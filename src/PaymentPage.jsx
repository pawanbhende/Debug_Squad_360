
import { QrCode, CreditCard, Landmark } from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold">
              <QrCode /> UPI
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Scan the QR code to pay using any UPI app.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-40 h-40 border flex items-center justify-center text-gray-400">
                QR CODE
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold">
              <Landmark /> Net Banking
            </h3>
            <select className="border p-2 rounded w-full mt-2">
              <option>Select Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>Axis Bank</option>
            </select>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold">
              <CreditCard /> Debit / Credit Card
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <input className="border p-2 rounded" placeholder="Card Number" />
              <input className="border p-2 rounded" placeholder="Name on Card" />
              <input className="border p-2 rounded" placeholder="MM/YY" />
              <input className="border p-2 rounded" placeholder="CVV" />
            </div>
          </div>
        </div>
      </div>

      <button className="px-8 py-3 bg-green-600 text-white rounded-lg">
        Pay Now
      </button>
    </div>
  );
}
