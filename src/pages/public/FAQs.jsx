export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 pb-2">
        FAQs
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
            1. How do I place an order?
          </h2>
          <p className="text-gray-600 mt-2">
            Browse our collection, select your preferred product, choose your size,
            and proceed to checkout to complete your order.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
            2. What payment methods do you accept?
          </h2>
          <p className="text-gray-600 mt-2">
            We accept major debit/credit cards, UPI, and other secure payment methods.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
            3. Can I cancel my order?
          </h2>
          <p className="text-gray-600 mt-2">
            Yes, orders can be canceled before they are shipped. Once shipped,
            cancellation may not be possible.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
            4. Do you offer international shipping?
          </h2>
          <p className="text-gray-600 mt-2">
            Currently, we primarily serve domestic customers. International
            shipping options may be added in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
