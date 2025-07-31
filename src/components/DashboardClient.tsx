"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Clock,
  Edit,
  Plus,
  Settings,
  Trash2,
  AlertTriangle,
  Star,
  CheckCircle,
  X,
  Check,
  DownloadCloud,
  File,
  FileImage,
  FileSpreadsheet,
  RefreshCw,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import ProUpgradePrompt from '@/components/ProUpgradePrompt';
import { useProStatus } from '@/hooks/useProStatus';

interface Speech {
  id: string;
  title: string;
  customTitle: string | null;
  role: string;
  tone: string;
  length: string;
  wordCount: number | null;
  estimatedTime: number | null;
  isCompleted: boolean;
  isFinal: boolean;
  createdAt: string;
  updatedAt: string;
}

const getRoleTitle = (role: string) => {
  const titles: Record<string, string> = {
    'best-man': 'Best Man',
    'maid-of-honor': 'Maid of Honor',
    'father-of-bride': 'Father of Bride',
    'mother-of-bride': 'Mother of Bride',
    'groom': 'Groom',
    'bride': 'Bride',
  };
  return titles[role] || role;
};

const getRoleEmoji = (role: string) => {
  const emojis: Record<string, string> = {
    'best-man': '🥂',
    'maid-of-honor': '👸',
    'father-of-bride': '🥃',
    'mother-of-bride': '🌸',
    'groom': '🤵',
    'bride': '👰',
  };
  return emojis[role] || '🎤';
};

export default function DashboardClient() {
  const { user } = useUser();
  const { isProUser, loading: proStatusLoading } = useProStatus();
  const [speeches, setSpeeches] = useState<Speech[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showProBanner, setShowProBanner] = useState(true);

  // Speech management state
  const [editingTitle, setEditingTitle] = useState<string | null>(null);
  const [editTitleValue, setEditTitleValue] = useState('');
  const [updatingSpeeches, setUpdatingSpeeches] = useState<Set<string>>(new Set());
  const [deletingSpeeches, setDeletingSpeeches] = useState<Set<string>>(new Set());
  const [exportingSpeech, setExportingSpeech] = useState<string | null>(null);

  const fetchSpeeches = async (showLoadingState = true) => {
    if (showLoadingState) {
      setLoading(true);
    }
    setError(null);

    try {
      console.log('🔍 [DASHBOARD] Fetching speeches...');
      const response = await fetch('/api/user-speeches', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (!response.ok) {
        let errorMessage = 'Failed to fetch speeches';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.details || errorMessage;
        } catch {
          // If response isn't JSON, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('✅ [DASHBOARD] Successfully fetched speeches:', data.speeches?.length || 0);

      if (!data.speeches || !Array.isArray(data.speeches)) {
        throw new Error('Invalid response format from server');
      }

      setSpeeches(data.speeches);
      setRetryCount(0); // Reset retry count on success
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load speeches';
      console.error('❌ [DASHBOARD] Error fetching speeches:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpeeches();
  }, []);

  const handleDeleteAccount = async () => {
    if (!user?.id) return;

    setDeleteLoading(true);
    try {
      const response = await fetch('/api/delete-user-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          source: 'dashboard'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      // Redirect to home page after successful deletion
      window.location.href = '/';
    } catch (err) {
      console.error('Delete account error:', err);
      alert('Failed to delete account. Please try again or contact support.');
    } finally {
      setDeleteLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  // Speech management functions
  const handleStartEditTitle = (speech: Speech) => {
    setEditingTitle(speech.id);
    setEditTitleValue(speech.customTitle || speech.title);
  };

  const handleCancelEditTitle = () => {
    setEditingTitle(null);
    setEditTitleValue('');
  };

  const handleSaveTitle = async (speechId: string) => {
    if (!editTitleValue.trim()) return;

    setUpdatingSpeeches(prev => new Set(prev).add(speechId));
    try {
      const response = await fetch(`/api/speech/${speechId}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customTitle: editTitleValue.trim()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update speech title');
      }

      // Update local state
      setSpeeches(prev => prev.map(speech =>
        speech.id === speechId
          ? { ...speech, customTitle: editTitleValue.trim() }
          : speech
      ));

      setEditingTitle(null);
      setEditTitleValue('');
    } catch (err) {
      console.error('Error updating speech title:', err);
      alert('Failed to update speech title. Please try again.');
    } finally {
      setUpdatingSpeeches(prev => {
        const newSet = new Set(prev);
        newSet.delete(speechId);
        return newSet;
      });
    }
  };

  const handleToggleFinal = async (speechId: string, currentFinalStatus: boolean) => {
    setUpdatingSpeeches(prev => new Set(prev).add(speechId));
    try {
      const response = await fetch(`/api/speech/${speechId}/update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isFinal: !currentFinalStatus
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update speech status');
      }

      // Update local state
      setSpeeches(prev => prev.map(speech =>
        speech.id === speechId
          ? { ...speech, isFinal: !currentFinalStatus }
          : speech
      ));
    } catch (err) {
      console.error('Error updating speech status:', err);
      alert('Failed to update speech status. Please try again.');
    } finally {
      setUpdatingSpeeches(prev => {
        const newSet = new Set(prev);
        newSet.delete(speechId);
        return newSet;
      });
    }
  };

  const handleDeleteSpeech = async (speechId: string) => {
    if (!confirm('Are you sure you want to delete this speech? This action cannot be undone.')) {
      return;
    }

    setDeletingSpeeches(prev => new Set(prev).add(speechId));
    try {
      const response = await fetch(`/api/speech/${speechId}/delete`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete speech');
      }

      // Update local state
      setSpeeches(prev => prev.filter(speech => speech.id !== speechId));
    } catch (err) {
      console.error('Error deleting speech:', err);
      alert('Failed to delete speech. Please try again.');
    } finally {
      setDeletingSpeeches(prev => {
        const newSet = new Set(prev);
        newSet.delete(speechId);
        return newSet;
      });
    }
  };

  const handleExport = async (speechId: string, format: 'txt' | 'pdf' | 'docx') => {
    setExportingSpeech(speechId);
    try {
      const response = await fetch(`/api/speech/${speechId}/export?format=${format}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to export speech as ${format}. Server response: ${errorText}`);
      }
      const blob = await response.blob();
      const speech = speeches.find(s => s.id === speechId);
      const title = speech?.customTitle || speech?.title || 'speech';

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(`Error exporting speech as ${format}:`, err);
      alert(`Failed to export speech as ${format}. Please try again.`);
    } finally {
      setExportingSpeech(null);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Loading header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="animate-pulse">
            <div className="h-6 w-6 bg-gray-200 rounded-full" />
          </div>
          <div className="text-[#8f867e]">Loading your speeches...</div>
        </div>

        {/* Loading skeleton for stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '📄', label: 'Completed Speeches' },
            { icon: '✏️', label: 'Drafts' },
            { icon: '⏱️', label: 'Total Speaking Time' },
            { icon: '⭐', label: 'Final Speeches' }
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <div className="animate-pulse">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="h-8 w-12 bg-gray-200 rounded mx-auto mb-2" />
                  <div className="h-4 bg-gray-200 rounded" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading tabs */}
        <div className="animate-pulse">
          <div className="grid w-full grid-cols-2 max-w-[400px] h-10 bg-gray-200 rounded-lg mb-6" />
        </div>

        {/* Loading skeleton for speeches */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="h-12 w-12 bg-gray-200 rounded" />
                      <div className="flex-1 space-y-3">
                        <div className="h-6 w-3/4 bg-gray-200 rounded" />
                        <div className="flex space-x-4">
                          <div className="h-4 w-20 bg-gray-200 rounded" />
                          <div className="h-4 w-24 bg-gray-200 rounded" />
                          <div className="h-4 w-16 bg-gray-200 rounded" />
                        </div>
                        <div className="flex space-x-4">
                          <div className="h-4 w-16 bg-gray-200 rounded" />
                          <div className="h-4 w-20 bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-16 bg-gray-200 rounded-full" />
                      <div className="h-8 w-12 bg-gray-200 rounded-full" />
                      <div className="h-8 w-20 bg-gray-200 rounded-full" />
                      <div className="h-8 w-16 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loading footer message */}
        <div className="text-center text-sm text-[#8f867e] animate-pulse">
          Fetching your speeches from the cloud...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Speeches</h3>
            <p className="text-red-700 mb-6">
              {error.includes('500') || error.includes('Server error')
                ? 'Our servers are experiencing issues. Please try again in a moment.'
                : error.includes('Failed to fetch') || error.includes('Network')
                ? 'Check your internet connection and try again.'
                : error
              }
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => {
                  setRetryCount(prev => prev + 1);
                  fetchSpeeches();
                }}
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </>
                )}
              </Button>
              <Link href="/generator">
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Speech
                </Button>
              </Link>
            </div>
            {retryCount > 2 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Still having trouble? Try refreshing the page or contact support if the issue persists.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.reload()}
                  className="mt-2 border-yellow-300 text-yellow-700"
                >
                  Refresh Page
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  const completedSpeeches = speeches.filter(s => s.isCompleted);
  const draftSpeeches = speeches.filter(s => !s.isCompleted);
  const finalSpeeches = speeches.filter(s => s.isFinal);
  const totalSpeakingTime = speeches.reduce((acc, speech) => acc + (speech.estimatedTime || 0), 0);

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <FileText className="h-8 w-8 text-[#da5389] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#181615]">
              {completedSpeeches.length}
            </div>
            <div className="text-sm text-[#8f867e]">Completed Speeches</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Edit className="h-8 w-8 text-[#e9a41a] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#181615]">
              {draftSpeeches.length}
            </div>
            <div className="text-sm text-[#8f867e]">Drafts</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-[#8f867e] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#181615]">
              {Math.round(totalSpeakingTime)} min
            </div>
            <div className="text-sm text-[#8f867e]">Total Speaking Time</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#181615]">
              {finalSpeeches.length}
            </div>
            <div className="text-sm text-[#8f867e]">Final Speeches</div>
          </CardContent>
        </Card>
      </div>

      {/* Pro Upgrade Banner for non-pro users */}
      {!proStatusLoading && !isProUser && showProBanner && (
        <ProUpgradePrompt
          variant="banner"
          showCloseButton={true}
          onClose={() => setShowProBanner(false)}
          context="dashboard"
        />
      )}

      {/* Main Content Tabs */}
      <Tabs defaultValue="speeches" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="speeches">Your Speeches</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="speeches">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#181615]">Your Speeches</h2>
              <Link href="/generator">
                <Button variant="outline" className="rounded-full px-6 py-2 font-medium hover:bg-gray-100">
                  <Plus className="h-4 w-4 mr-2" />
                  New Speech
                </Button>
              </Link>
            </div>

            {speeches.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="h-16 w-16 text-[#8f867e] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#181615] mb-2">No speeches yet</h3>
                  <p className="text-[#8f867e] mb-6">
                    Create your first speech to get started with our AI-powered generator.
                  </p>
                  <Link href="/generator">
                    <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full px-6 py-2 font-medium">
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Speech
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {speeches.map((speech) => (
                  <Card key={speech.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{getRoleEmoji(speech.role)}</div>
                          <div className="flex-1">
                            {/* Editable Title */}
                            <div className="flex items-center gap-2 mb-1">
                              {editingTitle === speech.id ? (
                                <div className="flex items-center gap-2 flex-1">
                                  <input
                                    type="text"
                                    value={editTitleValue}
                                    onChange={(e) => setEditTitleValue(e.target.value)}
                                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-lg font-semibold"
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') handleSaveTitle(speech.id);
                                      if (e.key === 'Escape') handleCancelEditTitle();
                                    }}
                                    autoFocus
                                  />
                                  <button
                                    onClick={() => handleSaveTitle(speech.id)}
                                    disabled={updatingSpeeches.has(speech.id)}
                                    className="p-1 text-green-600 hover:text-green-800"
                                  >
                                    <Check className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={handleCancelEditTitle}
                                    className="p-1 text-gray-600 hover:text-gray-800"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              ) : (
                                <>
                                  <h3
                                    className="text-lg font-semibold text-[#181615] cursor-pointer hover:text-[#da5389] transition-colors"
                                    onClick={() => handleStartEditTitle(speech)}
                                  >
                                    {speech.customTitle || speech.title}
                                  </h3>
                                  {speech.isFinal && (
                                    <Badge className="bg-green-100 text-green-700 border-green-300">
                                      <Star className="h-3 w-3 mr-1" />
                                      Final
                                    </Badge>
                                  )}
                                </>
                              )}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-[#8f867e] mb-3">
                              <span>{getRoleTitle(speech.role)}</span>
                              <span>•</span>
                              <span>Created {new Date(speech.createdAt).toLocaleDateString()}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs capitalize">
                                {speech.tone}
                              </Badge>
                            </div>

                            {speech.isCompleted ? (
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-1">
                                  <FileText className="h-4 w-4 text-[#8f867e]" />
                                  <span className="text-[#8f867e]">{speech.wordCount || 0} words</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4 text-[#8f867e]" />
                                  <span className="text-[#8f867e]">{speech.estimatedTime || 0} min read</span>
                                </div>
                              </div>
                            ) : (
                              <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                                Draft - Incomplete
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {speech.isCompleted ? (
                            <>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="outline" size="sm" className="rounded-full hover:bg-gray-100">
                                    {exportingSpeech === speech.id ? (
                                      <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-1" />
                                    ) : (
                                      <DownloadCloud className="h-4 w-4 mr-1" />
                                    )}
                                    Export
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem onClick={() => handleExport(speech.id, 'txt')}>
                                    <File className="h-4 w-4 mr-2" />
                                    TXT
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleExport(speech.id, 'pdf')}>
                                    <FileImage className="h-4 w-4 mr-2" />
                                    PDF
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleExport(speech.id, 'docx')}>
                                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                                    DOCX
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>

                              <Link href={`/generator?step=2&speechId=${speech.id}`}>
                                <Button variant="outline" size="sm" className="rounded-full hover:bg-gray-100">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                              </Link>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`rounded-full ${speech.isFinal ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100' : 'hover:bg-gray-100'}`}
                                onClick={() => handleToggleFinal(speech.id, speech.isFinal)}
                                disabled={updatingSpeeches.has(speech.id)}
                              >
                                {updatingSpeeches.has(speech.id) ? (
                                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-1" />
                                ) : speech.isFinal ? (
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                ) : (
                                  <Star className="h-4 w-4 mr-1" />
                                )}
                                {speech.isFinal ? 'Unmark Final' : 'Mark Final'}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
                                onClick={() => handleDeleteSpeech(speech.id)}
                                disabled={deletingSpeeches.has(speech.id)}
                              >
                                {deletingSpeeches.has(speech.id) ? (
                                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-1" />
                                ) : (
                                  <Trash2 className="h-4 w-4 mr-1" />
                                )}
                                Delete
                              </Button>
                            </>
                          ) : (
                            <>
                              <Link href="/generator?step=2">
                                <Button size="sm" className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Continue
                                </Button>
                              </Link>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
                                onClick={() => handleDeleteSpeech(speech.id)}
                                disabled={deletingSpeeches.has(speech.id)}
                              >
                                {deletingSpeeches.has(speech.id) ? (
                                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-1" />
                                ) : (
                                  <Trash2 className="h-4 w-4 mr-1" />
                                )}
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#181615]">Account Settings</h2>

            {/* Account Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#181615] mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#8f867e]">Name</label>
                    <p className="text-[#181615]">{user?.fullName || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#8f867e]">Email</label>
                    <p className="text-[#181615]">{user?.primaryEmailAddress?.emailAddress || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#8f867e]">Member Since</label>
                    <p className="text-[#181615]">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Deletion */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#181615] mb-2">Delete Account</h3>
                    <p className="text-[#8f867e] mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>

                    {!showDeleteConfirm ? (
                      <Button
                        variant="outline"
                        className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                        onClick={() => setShowDeleteConfirm(true)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    ) : (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-4">
                        <div>
                          <p className="font-semibold text-red-800 mb-2">Are you absolutely sure?</p>
                          <p className="text-sm text-red-700 mb-3">
                            This will permanently delete your account, all {speeches.length} speech(es), and cannot be recovered.
                          </p>
                          <div className="text-sm text-red-600 space-y-1">
                            <p>• Your profile and login information will be deleted</p>
                            <p>• All speeches and drafts will be permanently removed</p>
                            <p>• Account preferences and settings will be deleted</p>
                            <p>• Usage data will be removed from our systems</p>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowDeleteConfirm(false)}
                            disabled={deleteLoading}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="bg-red-600 hover:bg-red-700 text-white"
                            size="sm"
                            onClick={handleDeleteAccount}
                            disabled={deleteLoading}
                          >
                            {deleteLoading ? (
                              <>
                                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                Deleting...
                              </>
                            ) : (
                              <>
                                <Trash2 className="h-4 w-4 mr-2" />
                                Yes, Delete Account
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-[#8f867e]">
                        Need help with data deletion? Visit our{' '}
                        <Link href="/data-deletion" className="text-[#da5389] hover:underline">
                          data deletion instructions
                        </Link>
                        {' '}or contact{' '}
                        <a href="mailto:privacy@nailthespeech.com" className="text-[#da5389] hover:underline">
                          privacy@nailthespeech.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
