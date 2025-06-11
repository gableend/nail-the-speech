"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Plus,
  Settings,
  Crown,
  Calendar,
  Clock,
  Download,
  Trash2,
  Edit3,
  Copy,
  MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserDropdown from "@/components/auth/UserDropdown";

interface Speech {
  id: string;
  title: string;
  role: string;
  tone: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const { data: session } = useUser();
  const [speeches, setSpeeches] = useState<Speech[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpeech, setSelectedSpeech] = useState<Speech | null>(null);

  useEffect(() => {
    if (user) {
      fetchUserSpeeches();
    }
  }, [session]);

  const fetchUserSpeeches = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/speeches');

      if (response.ok) {
        const userSpeeches = await response.json();
        setSpeeches(userSpeeches);
      } else {
        console.error("Failed to fetch speeches:", response.statusText);
        // Fall back to empty array if API fails
        setSpeeches([]);
      }
    } catch (error) {
      console.error("Failed to fetch speeches:", error);
      // Fall back to empty array if API fails
      setSpeeches([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    // TODO: Add toast notification
  };

  const deleteSpeech = async (id: string) => {
    try {
      const response = await fetch(`/api/speeches/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove speech from local state
        setSpeeches(speeches.filter(speech => speech.id !== id));
        // TODO: Add success toast notification
      } else {
        console.error("Failed to delete speech:", response.statusText);
        // TODO: Add error toast notification
      }
    } catch (error) {
      console.error("Failed to delete speech:", error);
      // TODO: Add error toast notification
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#faf7f4]">
        {/* Navigation */}
        <nav className="bg-white border-b border-[#e8e1d8] sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-3xl">🎤</span>
                <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="text-sm">
                  <Crown className="h-4 w-4 mr-1" />
                  Free Plan
                </Badge>
                <UserDropdown />
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#181615]">
                  Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
                </h1>
                <p className="text-[#8f867e] mt-2">
                  Manage your speeches and account settings
                </p>
              </div>
              <Link href="/generator">
                <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Speech
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="speeches" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-96">
              <TabsTrigger value="speeches" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                My Speeches
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Billing
              </TabsTrigger>
            </TabsList>

            {/* My Speeches Tab */}
            <TabsContent value="speeches" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#8f867e]">Total Speeches</p>
                        <p className="text-3xl font-bold text-[#181615]">{speeches.length}</p>
                      </div>
                      <FileText className="h-8 w-8 text-[#da5389]" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#8f867e]">This Month</p>
                        <p className="text-3xl font-bold text-[#181615]">2</p>
                      </div>
                      <Calendar className="h-8 w-8 text-[#da5389]" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#8f867e]">Plan Status</p>
                        <p className="text-lg font-semibold text-[#181615]">Free Plan</p>
                      </div>
                      <Crown className="h-8 w-8 text-[#da5389]" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Speeches List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Speeches</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Plus className="h-4 w-4 mr-2" />
                      New Speech
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#da5389]" />
                    </div>
                  ) : speeches.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-[#8f867e] mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-[#181615] mb-2">No speeches yet</h3>
                      <p className="text-[#8f867e] mb-4">Create your first speech to get started</p>
                      <Link href="/generator">
                        <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                          Create Speech
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {speeches.map((speech) => (
                        <div key={speech.id} className="border border-[#e8e1d8] rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-[#181615]">{speech.title}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {speech.role}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {speech.tone}
                                </Badge>
                              </div>
                              <p className="text-sm text-[#8f867e] mb-3 line-clamp-2">
                                {speech.content.substring(0, 150)}...
                              </p>
                              <div className="flex items-center gap-4 text-xs text-[#8f867e]">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  Created {formatDate(speech.createdAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  Updated {formatDate(speech.updatedAt)}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(speech.content)}
                                className="rounded-full"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full"
                              >
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteSpeech(speech.id)}
                                className="rounded-full hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    {user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="h-16 w-16 rounded-full"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-full bg-[#da5389] flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">
                          {user?.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-[#181615]">
                        {user?.name || "User"}
                      </h3>
                      <p className="text-[#8f867e]">{user?.email}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-[#181615]">Full Name</label>
                      <p className="text-[#8f867e]">{user?.name || "Not provided"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#181615]">Email Address</label>
                      <p className="text-[#8f867e]">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#181615]">Account Type</label>
                      <p className="text-[#8f867e]">Free Plan</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#e8e1d8]">
                    <Button variant="outline" className="rounded-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription & Billing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-[#da5389]/10 to-[#e9a41a]/10 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="h-8 w-8 text-[#da5389]" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#181615]">Free Plan</h3>
                        <p className="text-sm text-[#8f867e]">Limited features</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-[#8f867e]">Speeches per month</p>
                        <p className="font-semibold text-[#181615]">1 / 1 used</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#8f867e]">Export options</p>
                        <p className="font-semibold text-[#181615]">Limited</p>
                      </div>
                    </div>
                    <Button className="bg-[#da5389] hover:bg-[#da5389]/90 text-white rounded-full">
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade to Premium
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#181615] mb-3">Premium Features</h4>
                    <ul className="space-y-2 text-sm text-[#8f867e]">
                      <li>• Unlimited speech generation</li>
                      <li>• Advanced customization options</li>
                      <li>• Priority export formats (PDF, DOCX)</li>
                      <li>• Extended speech lengths</li>
                      <li>• Premium support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
}
