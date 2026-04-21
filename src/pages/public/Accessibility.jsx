export default function Accessibility() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 pb-2">
        Accessibility
      </h1>

      <p className="mb-6 text-gray-600">
        ShoeStore is committed to ensuring digital accessibility for all users,
        including individuals with disabilities. We believe everyone should have
        equal access to our platform, regardless of their abilities or the
        technologies they use.
      </p>

      {/* Commitment */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        1. Our Commitment
      </h2>
      <p className="mb-4 text-gray-600">
        We strive to create an inclusive and user-friendly experience by following
        recognized accessibility standards and best practices. Our goal is to make
        our website accessible to the widest possible audience.
      </p>
      <p className="mb-4 text-gray-600">
        We aim to comply with applicable accessibility guidelines such as WCAG
        (Web Content Accessibility Guidelines) to ensure usability for individuals
        with visual, auditory, motor, and cognitive impairments.
      </p>

      {/* Features */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        2. Accessibility Features
      </h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
        <li>Keyboard navigation support for key interactions</li>
        <li>Readable fonts and sufficient color contrast</li>
        <li>Responsive design for different devices and screen sizes</li>
        <li>Alternative text for images where applicable</li>
        <li>Clear and consistent navigation structure</li>
      </ul>

      {/* Ongoing Improvements */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        3. Ongoing Improvements
      </h2>
      <p className="mb-4 text-gray-600">
        Accessibility is an ongoing effort. We continuously evaluate our platform
        and implement improvements to enhance usability and inclusivity.
      </p>
      <p className="mb-4 text-gray-600">
        We regularly review our website using both automated tools and manual
        testing to identify and fix accessibility barriers.
      </p>

      {/* Limitations */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        4. Known Limitations
      </h2>
      <p className="mb-4 text-gray-600">
        While we strive for full accessibility, some areas of the platform may not
        yet fully meet the highest standards. We are actively working to address
        these issues and improve the overall experience.
      </p>

      {/* Third Party */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        5. Third-Party Content
      </h2>
      <p className="mb-4 text-gray-600">
        Some parts of our platform may rely on third-party tools or integrations.
        We cannot guarantee the accessibility of these external services, but we
        encourage providers to meet accessibility standards.
      </p>

      {/* Feedback */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        6. Feedback and Support
      </h2>
      <p className="mb-4 text-gray-600">
        We welcome your feedback on the accessibility of our platform. If you
        encounter any barriers or have suggestions, please let us know so we can
        improve.
      </p>

      {/* Contact */}
      <h2 className="font-semibold mt-8 mb-2 text-lg border-b border-gray-300 pb-1">
        7. Contact Us
      </h2>
      <p className="text-gray-600">
        If you experience accessibility issues or need assistance, please contact us:
        <br />
        <span className="font-medium">support@example.com</span>
      </p>
    </div>
  );
}