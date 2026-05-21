/** @type {import('tailwindcss').Config'} */
export default {
content:[
"./index.html",
"./src/**/*.{js,jsx}"
],
theme:{
extend:{
colors:{
primary:"#2563eb",
border:"#E5E7EB",
bg:"#F5F6F8"
},
fontFamily:{
sans:["Inter","sans-serif"]
}
}
},
plugins:[]
}