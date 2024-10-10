import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - WhopStats',
  description: 'Our commitment to protecting your privacy and personal information at WhopStats.',
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-default-900">Privacy Policy</h1>

      <div className="prose prose-lg mx-auto">
        <p className="mb-6 text-default-600">
          At WhopStats, we are committed to protecting your privacy and personal information. This Privacy Policy
          outlines our practices concerning the collection, use, and protection of your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">Affiliation Disclaimer</h2>
        <p className="mb-6 text-default-600">
          <strong>WhopStats is not affiliated with Whop.com.</strong> We are an independent service that provides
          analytics and insights based on publicly available Whop data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">1. Information We Collect</h2>
        <p className="mb-6 text-default-600">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 text-default-600">
          <li>
            Account information: When you sign up, we collect your email address and password for account creation and
            login purposes.
          </li>
          <li>Subscription details: We maintain records of your subscription status and history.</li>
          <li>Usage data: We may collect anonymous data about how you use our service to improve our offerings.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">2. How We Use Your Information</h2>
        <p className="mb-6 text-default-600">We use the collected information solely for the following purposes:</p>
        <ul className="list-disc pl-6 mb-6 text-default-600">
          <li>To provide and maintain our service</li>
          <li>To manage your account and subscription</li>
          <li>To send you important updates about our service</li>
          <li>To deliver newsletters you&apos;ve opted into</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">3. Payment Processing</h2>
        <p className="mb-6 text-default-600">
          We use Paddle as our payment processor. When you make a payment, you will be redirected to Paddle&apos;s
          secure payment page. We do not store your payment information on our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">4. Data Protection</h2>
        <p className="mb-6 text-default-600">
          We implement industry-standard security measures to protect your personal information from unauthorized
          access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">5. Third-Party Services</h2>
        <p className="mb-6 text-default-600">
          We collect and organize product information from Whop. However, we do not share your personal information with
          Whop or any other third parties, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">6. Your Rights</h2>
        <p className="mb-6 text-default-600">
          You have the right to access, correct, or delete your personal information. You can also unsubscribe from our
          newsletters at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">7. Changes to This Policy</h2>
        <p className="mb-6 text-default-600">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-default-800">8. Contact Us</h2>
        <p className="mb-6 text-default-600">
          If you have any questions about this Privacy Policy, please contact us at devhaoran@gmail.com.
        </p>
      </div>
    </div>
  );
}
