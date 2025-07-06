
function OrderConfirmation() {
  // Example censored address
  const censoredAddress = "12XX, Eco Street, Green City";


  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const deliveryDateStr = deliveryDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-12 px-2">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Thank You for Your Order!
      </h2>
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/order_success.svg"
            alt="Order Success"
            className="w-16 h-16"
          />
          <div>
            <p className="text-lg font-semibold text-green-700 mb-1">
              Your order has been placed successfully.
            </p>
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Shipping to:</span>{" "}
            <span className="font-semibold blur-sm select-none">
              {censoredAddress}
            </span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">
              Estimated Delivery:
            </span>{" "}
            <span className="text-green-700 font-semibold">
              {deliveryDateStr}
            </span>
          </p>
        </div>
        <div className="border-t pt-4 text-sm text-gray-500">
          <p>
            You will receive an email confirmation with your order details and
            tracking information soon.
          </p>
          <p className="mt-2">
            Need help?{" "}
            <a href="/contact" className="text-green-700 underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
