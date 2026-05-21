function SelectField({

label,
name,
value,
onChange

}){

return(

<div>

<label className="block mb-2 text-sm">

{label}

</label>

<select

name={name}
value={value}
onChange={onChange}

className="
w-full
border
rounded-md
px-4
py-3
bg-gray-50
focus:ring-2
focus:ring-blue-400
"

>

<option>Select</option>
<option>Maharashtra</option>
<option>Karnataka</option>
<option>Delhi</option>

</select>

</div>

)

}

export default SelectField