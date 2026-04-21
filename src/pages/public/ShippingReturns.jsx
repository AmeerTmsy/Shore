import {motion} from 'framer-motion'
import FAQItem from '../../components/public/AccordionItem';

export default function ShippingReturns() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 pb-2">
        Shipping & Returns
      </h1>

      {/* Shipping */}
      <h2 className="font-semibold text-lg mt-6 border-b border-gray-300 pb-1">
        Shipping Policy
      </h2>
      <p className="text-gray-600 mt-2 mb-4">
        We aim to process and dispatch all orders as quickly as possible. Orders
        are typically processed within <strong>1–2 business days</strong> after
        confirmation.
      </p>

      <p className="text-gray-600 mb-4">
        Delivery times may vary depending on your location, but most orders are
        delivered within <strong>3–7 business days</strong>. During peak seasons
        or promotional periods, slight delays may occur.
      </p>

      <p className="text-gray-600 mb-4">
        Once your order has been shipped, you will receive a confirmation email
        along with a <strong>tracking number</strong> so you can monitor your
        shipment in real time.
      </p>

      <p className="text-gray-600 mb-4">
        Please ensure that your shipping address is accurate at the time of
        placing the order. We are not responsible for delays or losses caused by
        incorrect address details.
      </p>

      {/* Returns */}
      <h2 className="font-semibold text-lg mt-6 border-b border-gray-300 pb-1">
        Return Policy
      </h2>
      <p className="text-gray-600 mt-2 mb-4">
        We offer a <strong>7-day return window</strong> from the date of delivery.
        To be eligible for a return, items must be unused, unworn, and in their
        original packaging with all tags intact.
      </p>

      <p className="text-gray-600 mb-4">
        Returns will not be accepted for products that show signs of use, damage,
        or alteration. Certain items such as customized or final-sale products
        may not be eligible for return.
      </p>

      <p className="text-gray-600 mb-4">
        To initiate a return, please contact our support team with your order
        details. Our team will guide you through the return process and provide
        necessary instructions.
      </p>

      <p className="text-gray-600 mb-4">
        Customers may be responsible for return shipping charges unless the item
        received is defective or incorrect.
      </p>

      {/* Refunds */}
      <h2 className="font-semibold text-lg mt-6 border-b border-gray-300 pb-1">
        Refunds
      </h2>
      <p className="text-gray-600 mt-2 mb-4">
        Once your returned item is received and inspected, we will notify you of
        the approval or rejection of your refund.
      </p>

      <p className="text-gray-600 mb-4">
        If approved, refunds will be processed within <strong>5–7 business days</strong>
        and credited to your original payment method.
      </p>

      <p className="text-gray-600 mb-4">
        Please note that shipping charges are non-refundable unless the return
        is due to our error (such as defective or incorrect items).
      </p>

      {/* Exchanges */}
      <h2 className="font-semibold text-lg mt-6 border-b border-gray-300 pb-1">
        Exchanges
      </h2>
      <p className="text-gray-600 mt-2 mb-4">
        We currently offer exchanges for size or product issues, subject to stock
        availability. If the desired item is unavailable, a refund may be issued
        instead.
      </p>

      {/* Contact */}
      <h2 className="font-semibold text-lg mt-6 border-b border-gray-300 pb-1">
        Need Help?
      </h2>
      <p className="text-gray-600 mt-2">
        If you have any questions regarding shipping, returns, or refunds, feel
        free to reach out to our support team at{" "}
        <span className="font-medium">support@example.com</span>.
      </p>

      <h2 className="font-semibold text-lg mt-10 border-b border-gray-300 pb-1">
        Frequently asked questions
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FAQItem
          question="How long does shipping take?"
          answer="Orders are processed within 1–2 business days and typically delivered within 3–7 business days depending on your location."
        />
        <FAQItem
          question="Can I track my order?"
          answer="Yes, once your order is shipped, you will receive a tracking ID via email to monitor your delivery in real time."
        />
        <FAQItem
          question="What is your return policy?"
          answer="We offer a 7-day return window. Items must be unused, unworn, and returned in their original packaging with all tags intact."
        />
        <FAQItem
          question="How long does it take to receive a refund?"
          answer="Refunds are processed within 5–7 business days after the returned product is inspected and approved."
        />
        <FAQItem
          question="Do I have to pay for return shipping?"
          answer="Return shipping charges may apply unless the item received is defective or incorrect."
        />
        <FAQItem
          question="Can I exchange a product?"
          answer="Yes, exchanges are available for size or product issues, subject to stock availability."
        />
      </motion.div>
    </div>
  );
}