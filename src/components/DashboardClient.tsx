"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Clock,
  Download,
  Edit,
  Plus,
  Settings,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

interface Speech {
  id: string;
  title: string;
  role: string;
  tone: string;
  length: string;
  wordCount: number | null;
  estimatedTime: number | null;
  isCompleted: boolean;
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
  const [speeches, setSpeeches] = useState<Speech[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchSpeeches = async () => {
      try {
        const response = await fetch('/api/user-speeches');
        if (!response.ok) {
          throw new Error('Failed to fetch speeches');
        }
        const data = await response.json();
        setSpeeches(data.speeches);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load speeches');
        console.error('Error fetching speeches:', err);
      } finally {
        setLoading(false);
      }
    };

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

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Loading skeleton for stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <div className="animate-pulse">
                  <div className="h-8 w-8 bg-gray-200 rounded mx-auto mb-2"></div>
                  <div className="h-6 w-8 bg-gray-200 rounded mx-auto mb-1"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading skeleton for speeches */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="animate-pulse flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-20 bg-gray-200 rounded"></div>
                      <div className="h-8 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">Error loading speeches: {error}</div>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  const completedSpeeches = speeches.filter(s => s.isCompleted);
  const draftSpeeches = speeches.filter(s => !s.isCompleted);
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
            <div className="h-8 w-8 bg-[#da5389]/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-[#da5389] font-bold text-sm">✨</span>
            </div>
            <div className="text-2xl font-bold text-[#181615]">Free</div>
            <div className="text-sm text-[#8f867e]">Current Plan</div>
          </CardContent>
        </Card>
      </div>

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
                <Button variant="outline" className="rounded-full px-6 py-2 font-medium">
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
                            <h3 className="text-lg font-semibold text-[#181615] mb-1">
                              {speech.title}
                            </h3>
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

                        <div className="flex space-x-2">
                          {speech.isCompleted ? (
                            <>
                              <Button variant="outline" size="sm" className="rounded-full">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                              <Link href="/generator">
                                <Button variant="outline" size="sm" className="rounded-full">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                              </Link>
                            </>
                          ) : (
                            <Link href="/generator">
                              <Button size="sm" className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                                <Edit className="h-4 w-4 mr-1" />
                                Continue
                              </Button>
                            </Link>
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
