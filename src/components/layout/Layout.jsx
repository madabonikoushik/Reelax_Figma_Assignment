import Header from "./Header"

function Layout({children}){

return(

<div className="min-h-screen">

<Header/>

<div className="max-w-7xl mx-auto px-5 py-8">

{children}

</div>

</div>

)

}

export default Layout