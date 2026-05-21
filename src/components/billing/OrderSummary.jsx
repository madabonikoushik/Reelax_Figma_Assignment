import { useState } from "react"
import { formatCurrency } from "../../utils/formatCurrency"
import FloatingSupport from "../common/FloatingSupport"

function OrderSummary() {

  const subtotal = 14999
  const tax = 1079

  const coupons = {
    WELCOME20: 0.2,
    ANNUAL50: 0.5
  }

  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME20")

  const discount = selectedCoupon
    ? subtotal * coupons[selectedCoupon]
    : 0

  const total = subtotal + tax - discount

  return (
    <div className="relative">

      <FloatingSupport />

      <div className="bg-white rounded-xl p-6 shadow-sm">

        <h2 className="text-2xl font-semibold mb-5">
          Order Summary
        </h2>

        <div className="border rounded-lg p-5">

          <div className="flex justify-between items-start">

            <div>
              <h1 className="text-3xl font-bold">
                {formatCurrency(4999)}
              </h1>

              <p className="text-gray-500 text-sm">
                /month
              </p>
            </div>

            <div className="text-right">

              <p className="text-xs text-blue-500">
                SELECTED PLAN
              </p>

              <p className="font-bold">
                Startup
              </p>

            </div>

          </div>

          <button
            className="
            w-full
            border
            rounded-full
            py-3
            mt-5
            hover:bg-gray-50
            transition
            "
          >
            Upgrade to Growth Plan
          </button>

        </div>

     

        <div className="mt-6 border rounded-lg p-4">

          <div className="flex justify-between items-center mb-6">

            <div>

              <p className="font-medium">
                Wallet Balance
              </p>

              <p className="text-sm text-gray-400">
                ₹500 available
              </p>

            </div>

            <button
              className="
              border
              px-4
              py-2
              rounded
              hover:bg-gray-50
              transition
              text-blue-600
              font-medium
              "
            >
              Apply
            </button>

          </div>

          <p className="font-medium mb-4">
            Apply Coupon
          </p>

          <input
            placeholder="Enter coupon code"
            className="
            w-full
            border
            rounded-md
            p-3
            mb-5
            outline-none
            focus:ring-2
            focus:ring-blue-400
            "
          />

          <div className="space-y-3">

            {Object.keys(coupons).map((item) => (

              <label
                key={item}
                className={`
                flex
                items-center
                justify-between
                border
                rounded-md
                p-4
                cursor-pointer
                transition

                ${
                  selectedCoupon === item
                  ? "border-blue-500 bg-white ring-1 ring-blue-100"
                  : "border-gray-200"
                }
                `}
              >

                <div>

                  <h4 className="font-medium">
                    {item}
                  </h4>

                  <p className="text-xs text-gray-400">

                    {
                      item === "WELCOME20"
                        ? "20% off on your first month"
                        : "50% off on annual plans"
                    }

                  </p>

                </div>

                <div className="flex items-center space-x-3">

                  <input
                    type="radio"
                    name="coupon"
                    value={item}
                    checked={selectedCoupon === item}
                    onChange={() => setSelectedCoupon(item)}
                    className="sr-only peer"
                  />

                  <span className="w-5 h-5 rounded-full border flex items-center justify-center
                    peer-checked:border-blue-600 peer-checked:bg-blue-50">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform" />
                  </span>

                </div>

              </label>

            ))}

          </div>

        </div>


        <div className="mt-6 space-y-4">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">
              -{formatCurrency(discount)}
            </span>
          </div>

          <div className="flex justify-between text-2xl font-bold">

            <span>Total due today</span>

            <span className="text-blue-600">
              {formatCurrency(total)}
            </span>

          </div>

        </div>

        <button
          className="
          w-full
          bg-blue-600
          text-white
          rounded-lg
          py-4
          mt-8
          hover:bg-blue-700
          transition
          "
        >
          Proceed to Payment
        </button>

      </div>

    </div>
  )
}

export default OrderSummary