function Button({
text,
primary,
onClick
}){

return(

<button
onClick={onClick}
className={`

px-6
py-3
rounded-md
font-medium
transition
duration-300
active:scale-95

${primary
?`bg-primary
text-white
hover:bg-blue-700`
:`border
bg-white
hover:bg-gray-100`
}

`}
>

{text}

</button>

)

}

export default Button