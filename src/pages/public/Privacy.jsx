export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 pb-2">
        Privacy Policy
      </h1>

      <p className="mb-4 text-gray-600  pb-4">
        This Privacy Policy describes how we collect, use, and protect your
        information when you use our platform. By accessing or using our services,
        you agree to the collection and use of information in accordance with this policy.
      </p>

      {/* Section */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4 pb-4">
        <li><strong>Personal Information:</strong> Name, email, phone, address</li>
        <li><strong>Account Data:</strong> Login credentials and preferences</li>
        <li><strong>Transaction Data:</strong> Orders and payments</li>
        <li><strong>Technical Data:</strong> IP, device, browser</li>
      </ul>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4 pb-4">
        <li>Process orders</li>
        <li>Improve services</li>
        <li>Send updates</li>
        <li>Prevent fraud</li>
      </ul>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        3. Cookies and Tracking Technologies
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We use cookies to improve your experience, remember preferences, and analyze usage.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        4. Sharing Your Information
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We do not sell your data. We may share it with payment providers, delivery services,
        and legal authorities if required.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        5. Data Retention
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We retain your data only as long as necessary for service and legal purposes.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        6. Data Security
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We use security measures to protect your data, but no system is fully secure.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        7. Your Rights
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        You can access, update, or delete your data and opt out of communications.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        8. Third-Party Links
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We are not responsible for third-party websites linked from our platform.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        9. Children's Privacy
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        Our services are not intended for children under 13.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        10. Changes to This Policy
      </h2>
      <p className="mb-4 text-gray-600 pb-4">
        We may update this policy periodically.
      </p>

      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        11. Contact Us
      </h2>
      <p className="text-gray-600">
        support@example.com
      </p>
    </div>
  );
}