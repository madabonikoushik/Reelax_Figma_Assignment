function InputField({
label,
name,
value,
onChange,
placeholder
}){

return(

<div>

<label
htmlFor={name}
className="block mb-2 text-sm"
>

{label}

</label>

<input
id={name}
name={name}
value={value}
onChange={onChange}
placeholder={placeholder}
required
className="
w-full
border
rounded-md
px-4
py-3
bg-gray-50
focus:ring-2
focus:ring-blue-500
"
/>

</div>

)

}

export default InputField