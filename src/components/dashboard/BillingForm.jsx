import InputField from "../common/InputField"
import SelectField from "../common/SelectField"
import Button from "../common/Button"

function BillingForm() {

  return (

    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">

      <h2 className="text-2xl lg:text-3xl font-semibold mb-8">
        Review your details
      </h2>

      <h3 className="font-medium mb-6">
        Billing Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />

        <InputField
          label="Email"
          placeholder="abc@gmail.com"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise"
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <SelectField label="State"/>

        <SelectField label="City"/>

        <InputField
          label="Country"
          placeholder="India"
        />

        <InputField
          label="Pin Code"
          placeholder="Pin Code"
        />

      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

        <Button text="Cancel"/>

        <Button
          text="Save Details"
          primary
        />

      </div>

    </div>

  )

}

export default BillingForm