import { useState } from "react"
import InputField from "../common/InputField"
import SelectField from "../common/SelectField"
import Button from "../common/Button"

const initialState = {
  company:"Koushik Madaboni",
  email:"koushikmadaboni@gmail.com",
  gst:"",
  pan:"",
  premise:"",
  street:"",
  state:"",
  city:"",
  country:"India",
  pin:""
}

function BillingForm(){

const [formData,setFormData]=useState(initialState)

const [loading,setLoading]=useState(false)

const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
})

}

const resetForm=()=>{

setFormData(initialState)

}

const handleSubmit=async(e)=>{

e.preventDefault()

if(
!formData.company ||
!formData.email ||
!formData.pin
){
alert("Please fill all required fields")
return
}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(formData.email)){
alert("Enter valid email")
return
}

setLoading(true)

await new Promise(resolve=>setTimeout(resolve,1500))

setLoading(false)

alert("Details saved successfully")

}

return(

<form
onSubmit={handleSubmit}
className="bg-white rounded-xl p-4 sm:p-8"
>

<h2 className="text-2xl font-semibold mb-6">
Review your details
</h2>

<h3 className="font-medium mb-6">
Billing Information
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<InputField
label="Company Name"
name="company"
value={formData.company}
onChange={handleChange}
placeholder="Koushik Madaboni"
/>

<InputField
label="Email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="koushikmadaboni@gmail.com"
/>

<InputField
label="GST Number"
name="gst"
value={formData.gst}
onChange={handleChange}
placeholder="GST Number"
/>

<InputField
label="PAN Number"
name="pan"
value={formData.pan}
onChange={handleChange}
placeholder="PAN Number"
/>

<InputField
label="Premise"
name="premise"
value={formData.premise}
onChange={handleChange}
placeholder="Premise"
/>

<InputField
label="Street"
name="street"
value={formData.street}
onChange={handleChange}
placeholder="Street"
/>

<SelectField
label="State"
name="state"
value={formData.state}
onChange={handleChange}
/>

<SelectField
label="City"
name="city"
value={formData.city}
onChange={handleChange}
/>

<InputField
label="Country"
name="country"
value={formData.country}
onChange={handleChange}
/>

<InputField
label="Pin Code"
name="pin"
value={formData.pin}
onChange={handleChange}
placeholder="Pin Code"
/>

</div>

<div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">

<Button
text="Cancel"
onClick={resetForm}
/>

<Button
primary
text={loading ? "Saving..." : "Save Details"}
/>

</div>

</form>

)

}

export default BillingForm