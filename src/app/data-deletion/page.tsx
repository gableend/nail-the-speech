import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "Learn how to delete your account data and speeches from Nail The Speech.",
  robots: { index: false, follow: false },
};

export default function DataDeletionInstructionsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#e8e1d8] p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#181615] mb-2">
            Data Deletion Instructions
          </h1>
          <p className="text-sm text-[#756c64] mb-8">Last updated: 4 April 2026</p>

          <div className="space-y-8 text-[#4a4543] leading-relaxed">
            <section>
              <p>
                If you would like to delete your account and data from Nail The Speech,
                please follow the instructions below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">What data we collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Your profile information (name, email) used for account creation</li>
                <li>Wedding speeches you have created using our platform</li>
                <li>Account preferences and settings</li>
                <li>Usage analytics to improve our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">Option 1: Through your dashboard</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Log in to your Nail The Speech account</li>
                <li>Go to your Dashboard</li>
                <li>Navigate to Account Settings</li>
                <li>Click &quot;Delete Account&quot; to remove all your data</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">Option 2: Email request</h2>
              <p className="mb-3">
                If you cannot access your account, send an email to:
              </p>
              <p className="font-mono bg-[#faf7f4] px-4 py-3 rounded-lg border border-[#e8e1d8] text-[#181615] inline-block">
                <a href="mailto:hello@nailthespeech.com" className="text-[#c44578] hover:underline">
                  hello@nailthespeech.com
                </a>
              </p>
              <p className="mt-3">
                Include the email address associated with your account and &quot;Data Deletion Request&quot; in the subject line.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">What happens when you request deletion</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>We will delete your account and all associated data within 30 days</li>
                <li>All your created speeches will be permanently removed</li>
                <li>Your login information will be removed from our systems</li>
                <li>We will send you a confirmation email when deletion is complete</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">Data retention</h2>
              <p>
                Some data may be retained for legal compliance purposes as required by law,
                but will not be used for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">Questions?</h2>
              <p>
                If you have any questions about data deletion or our privacy practices,
                please contact us at{' '}
                <a href="mailto:hello@nailthespeech.com" className="text-[#c44578] hover:underline">
                  hello@nailthespeech.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
