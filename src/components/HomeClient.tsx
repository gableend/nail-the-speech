"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Sparkles } from "lucide-react";

export default function HomeClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0])); // Track which videos are loaded

  // Array of hero videos to cycle through - using new webm videos
  const heroVideos = useMemo(() => [
    "/videos/best-man.webm",
    "/videos/bride-groom.webm",
    "/videos/father-bride.webm",
    "/videos/groom.webm",
    "/videos/maid-of-honor.webm"
  ], []);

  // Lazy load video function
  const lazyLoadVideo = useCallback((index: number) => {
    if (loadedVideos.has(index)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = heroVideos[index];
    document.head.appendChild(link);

    setLoadedVideos(prev => new Set(prev).add(index));
  }, [heroVideos, loadedVideos]);

  // Preload first video immediately and next video when component mounts
  useEffect(() => {
    // Always preload the first video
    const firstVideoLink = document.createElement('link');
    firstVideoLink.rel = 'preload';
    firstVideoLink.as = 'video';
    firstVideoLink.href = heroVideos[0];
    document.head.appendChild(firstVideoLink);

    // Preload second video after a short delay
    const timer = setTimeout(() => {
      if (heroVideos.length > 1) {
        lazyLoadVideo(1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [heroVideos, lazyLoadVideo]);

  // Preload next video when current video changes
  useEffect(() => {
    const nextIndex = (currentVideoIndex + 1) % heroVideos.length;
    const timer = setTimeout(() => {
      lazyLoadVideo(nextIndex);
    }, 2000); // Preload next video 2 seconds after current starts

    return () => clearTimeout(timer);
  }, [currentVideoIndex, heroVideos.length, lazyLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      // Only handle transition completion, not initial load
      if (isTransitioning) {
        setIsTransitioning(false);
        setVideoOpacity(1);
      }
    };

    const handleCanPlay = async () => {
      try {
        // Only auto-play if we're not in the middle of a transition
        if (!isTransitioning) {
          await video.play();
        }
      } catch (error) {
        console.log('Autoplay failed:', error);
      }
    };

    const handleLoadedMetadata = async () => {
      // Play immediately when metadata is loaded during transitions
      if (isTransitioning) {
        try {
          await video.play();
          setVideoOpacity(1);
          setIsTransitioning(false);
        } catch (error) {
          console.log('Autoplay failed:', error);
        }
      }
    };

    const handleEnded = () => {
      // Auto-advance to next video when current one ends
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    };

    // Remove the flicker-causing opacity reset
    const handleTimeUpdate = () => {
      // Ensure video stays at full opacity during playback
      if (!isTransitioning && videoOpacity !== 1) {
        setVideoOpacity(1);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isTransitioning, heroVideos, videoOpacity]);

  // Update video source when currentVideoIndex changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video is loaded before switching
    if (!loadedVideos.has(currentVideoIndex)) {
      lazyLoadVideo(currentVideoIndex);
    }

    // Only set transitioning state and opacity for actual changes
    if (video.src !== heroVideos[currentVideoIndex]) {
      setIsTransitioning(true);
      setVideoOpacity(0.7); // Less dramatic opacity change to reduce flicker

      // Shorter delay to minimize flicker duration
      setTimeout(() => {
        video.src = heroVideos[currentVideoIndex];
        video.load();
      }, 50); // Reduced from 75ms
    }
  }, [currentVideoIndex, heroVideos, loadedVideos, lazyLoadVideo]);

  // Handle manual video selection with lazy loading
  const handleVideoSelect = (index: number) => {
    if (isTransitioning) return;

    // Ensure video is loaded before switching
    if (!loadedVideos.has(index)) {
      lazyLoadVideo(index);
    }

    setCurrentVideoIndex(index);
  };

  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          className="w-full h-96 object-cover transition-opacity duration-300 ease-in-out"
          autoPlay
          muted
          playsInline
          preload="metadata"
          style={{ opacity: videoOpacity }}
        >
          <source src={heroVideos[currentVideoIndex]} type="video/webm" />
          Your browser does not support the video tag.
          {/* Fallback content for browsers that don't support video */}
          <div className="bg-gradient-to-br from-[#da5389]/10 to-[#e9a41a]/10 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="h-24 w-24 text-[#da5389] mx-auto mb-4" />
              <p className="text-[#181615] text-lg font-medium">Perfect speeches for your perfect day</p>
            </div>
          </div>
        </video>

        {/* Video indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroVideos.map((videoSrc, index) => (
            <button
              key={videoSrc}
              onClick={() => handleVideoSelect(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentVideoIndex === index
                  ? 'bg-white shadow-lg scale-110'
                  : 'bg-white/60 hover:bg-white/80 hover:scale-105'
              } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Play video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
