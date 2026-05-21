import Layout from "./components/layout/Layout"
import BillingForm from "./components/dashboard/BillingForm"
import OrderSummary from "./components/dashboard/OrderSummary"

function App() {

  return (

    <Layout>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">

        <BillingForm />

        <OrderSummary />

      </div>

    </Layout>

  )
}

export default App