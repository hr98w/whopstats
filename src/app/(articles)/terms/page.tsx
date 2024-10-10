import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - WhopStats',
  description: 'The terms and conditions governing the use of WhopStats services.',
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-default-900">Terms of Use</h1>

      <div className="prose prose-lg mx-auto">
        <p className="mb-6 text-default-600">
          Welcome to WhopStats. By accessing or using our service, you agree to be bound by these Terms of Use. Please
          read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">1. Acceptance of Terms</h2>
        <p className="mb-6 text-default-600">
          By accessing or using WhopStats, you agree to be bound by these Terms of Use and all applicable laws and
          regulations. If you do not agree with any part of these terms, you may not use our service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">2. Description of Service</h2>
        <p className="mb-6 text-default-600">
          WhopStats is a paid service that collects and organizes product information from Whop to help users discover
          inspiration. We provide statistical analysis and insights based on this data. WhopStats is not affiliated with
          Whop.com.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">3. User Accounts</h2>
        <p className="mb-6 text-default-600">
          To access our service, you must create an account. You are responsible for maintaining the confidentiality of
          your account and password. You agree to accept responsibility for all activities that occur under your
          account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">4. Subscription and Payments</h2>
        <p className="mb-6 text-default-600">
          WhopStats is a paid service. By subscribing, you agree to pay all fees associated with your subscription. We
          use Paddle as our payment processor. All payment information is handled securely by Paddle.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">5. Cancellation and Refunds</h2>
        <p className="mb-6 text-default-600">
          You may cancel your subscription at any time. Refunds are handled on a case-by-case basis and are not
          guaranteed. Please contact us for any refund requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">6. Intellectual Property</h2>
        <p className="mb-6 text-default-600">
          The content, organization, graphics, design, and other matters related to WhopStats are protected under
          applicable copyrights and other proprietary laws. Copying, redistributing, use or publication of any such
          matters or any part of the site is prohibited without our express permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">7. Limitation of Liability</h2>
        <p className="mb-6 text-default-600">
          WhopStats shall not be liable for any direct, indirect, incidental, consequential or exemplary damages
          resulting from your use of our service. This shall include, but not be limited to, damages for loss of
          profits, business interruption, or loss of data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">8. Modifications to Terms</h2>
        <p className="mb-6 text-default-600">
          We reserve the right to modify these Terms of Use at any time. We will notify users of any significant
          changes. Your continued use of WhopStats after such modifications will constitute your acknowledgment and
          agreement to the modified terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">10. Contact Information</h2>
        <p className="mb-6 text-default-600">
          If you have any questions about these Terms of Use, please contact us at legendwhr@gmail.com.
        </p>
      </div>
    </div>
  );
}
