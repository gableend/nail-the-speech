import Link from 'next/link';

export default function DataDeletionInstructionsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Header */}
      <nav className="bg-white border-b border-[#e8e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎤</span>
              <span className="font-bold text-2xl text-[#181615]">Nail The Speech</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-[#e8e1d8] p-8">
          <h1 className="text-3xl font-bold text-[#181615] mb-6">
            Data Deletion Instructions
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#8f867e] mb-6">
              If you have used Facebook to sign in to Nail The Speech and would like to delete your data,
              please follow the instructions below.
            </p>

            <h2 className="text-2xl font-semibold text-[#181615] mb-4">
              What Data We Collect
            </h2>
            <ul className="list-disc list-inside text-[#8f867e] mb-6 space-y-2">
              <li>Your Facebook profile information (name, email) used for account creation</li>
              <li>Wedding speeches you have created using our platform</li>
              <li>Account preferences and settings</li>
              <li>Usage analytics to improve our service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#181615] mb-4">
              How to Request Data Deletion
            </h2>

            <div className="bg-[#faf7f4] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#181615] mb-3">
                Option 1: Through Your Account Dashboard
              </h3>
              <ol className="list-decimal list-inside text-[#8f867e] space-y-2">
                <li>Log in to your Nail The Speech account</li>
                <li>Go to your Dashboard</li>
                <li>Navigate to Account Settings</li>
                <li>Click "Delete Account" to remove all your data</li>
              </ol>
            </div>

            <div className="bg-[#fff5f5] border border-[#fecaca] rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#dc2626] mb-3">
                Option 2: Email Request
              </h3>
              <p className="text-[#7f1d1d] mb-3">
                If you cannot access your account, send an email to:
              </p>
              <p className="font-mono bg-white px-3 py-2 rounded border text-[#181615]">
                privacy@nailthespeech.com
              </p>
              <p className="text-[#7f1d1d] mt-3">
                Include your Facebook email address and "Data Deletion Request" in the subject line.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-[#181615] mb-4">
              What Happens When You Request Deletion
            </h2>
            <ul className="list-disc list-inside text-[#8f867e] mb-6 space-y-2">
              <li>We will delete your account and all associated data within 30 days</li>
              <li>All your created speeches will be permanently removed</li>
              <li>Your login information will be removed from our systems</li>
              <li>We will send you a confirmation email when deletion is complete</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#181615] mb-4">
              Data Retention
            </h2>
            <p className="text-[#8f867e] mb-6">
              Some data may be retained for legal compliance purposes as required by law,
              but will not be used for any other purpose.
            </p>

            <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#0369a1] mb-3">
                Questions?
              </h3>
              <p className="text-[#0c4a6e]">
                If you have any questions about data deletion or our privacy practices,
                please contact us at{" "}
                <a href="mailto:privacy@nailthespeech.com" className="underline">
                  privacy@nailthespeech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
