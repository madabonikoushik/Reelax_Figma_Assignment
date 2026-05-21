import TopBar from "../components/layout/TopBar"
import BillingForm from "../components/billing/BillingForm"
import OrderSummary from "../components/billing/OrderSummary"

export default function Dashboard() {
  return (
    <>
      <TopBar />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BillingForm />
        </div>

        <OrderSummary />
      </div>
    </>
  )
}