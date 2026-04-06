import { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: "Privacy Policy | Nail The Speech",
  description: "How Nail The Speech collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf7f4]">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#e8e1d8] p-8 md:p-12">
          <h1 className="text-3xl font-bold text-[#181615] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#756c64] mb-8">Last updated: 3 April 2026</p>

          <div className="space-y-8 text-[#4a4543] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">1. Who we are</h2>
              <p>
                Nail The Speech ("we", "us", "our") operates the website nailthespeech.com. This policy explains how we collect, use, and protect your personal information when you use our AI wedding speech generator and related services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">2. What we collect</h2>
              <p className="mb-3">We collect the following information when you use our service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[#181615]">Account information:</strong> Your name, email address, and authentication data when you create an account via Clerk (our authentication provider).</li>
                <li><strong className="text-[#181615]">Speech content:</strong> The personal details, stories, and preferences you provide to generate your speech, including names, roles, and relationship details.</li>
                <li><strong className="text-[#181615]">Payment information:</strong> Processed securely by Stripe. We do not store your credit card details directly.</li>
                <li><strong className="text-[#181615]">Usage data:</strong> Basic analytics data collected via Google Analytics, including pages visited, device type, and general location.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">3. How we use your data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To generate personalised wedding speeches based on the details you provide.</li>
                <li>To save your speeches so you can access and edit them later.</li>
                <li>To process payments and manage your Pro subscription.</li>
                <li>To send you your speech via email if you opt in.</li>
                <li>To improve our service and fix technical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">4. AI and your data</h2>
              <p>
                Your personal stories and details are sent to OpenAI's API to generate your speech. This data is processed in real time and is not used by OpenAI to train their models. We do not use your personal data to train any AI models. Your speech content is stored in our database solely so you can access it from your dashboard.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">5. Third-party services</h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[#181615]">Clerk</strong> for authentication and account management.</li>
                <li><strong className="text-[#181615]">Stripe</strong> for secure payment processing.</li>
                <li><strong className="text-[#181615]">OpenAI</strong> for AI-powered speech generation.</li>
                <li><strong className="text-[#181615]">Google Analytics</strong> for anonymous usage statistics.</li>
                <li><strong className="text-[#181615]">Supabase</strong> for database hosting.</li>
                <li><strong className="text-[#181615]">Netlify</strong> for website hosting.</li>
              </ul>
              <p className="mt-3">Each of these services has its own privacy policy governing how they handle data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">6. Data retention</h2>
              <p>
                Your account and speech data are retained for as long as you maintain an account with us. Pro access expires 90 days after purchase. You can request deletion of your data at any time by visiting our <Link href="/data-deletion" className="text-[#c44578] hover:underline">data deletion page</Link> or contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">7. Cookies</h2>
              <p>
                We use essential cookies required for authentication and session management. We also use Google Analytics cookies to understand how visitors use our site. You can disable analytics cookies in your browser settings without affecting the functionality of our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">8. Your rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Withdraw consent for data processing at any time.</li>
                <li>Export your speech data.</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at the email below.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">9. Data security</h2>
              <p>
                We take reasonable measures to protect your data. All data is transmitted over HTTPS. Passwords are managed by Clerk and never stored by us directly. Payment data is handled entirely by Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">10. Children</h2>
              <p>
                Our service is not directed at children under 16. We do not knowingly collect personal data from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">11. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of the service after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#181615] mb-3">12. Contact</h2>
              <p>
                If you have questions about this privacy policy or your data, contact us at: <a href="mailto:hello@nailthespeech.com" className="text-[#c44578] hover:underline">hello@nailthespeech.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
