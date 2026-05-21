import {FiSearch} from "react-icons/fi"

function SearchBar(){

return(

<div className="relative">

<FiSearch className="absolute top-4 left-3 text-gray-400"/>

<input

placeholder="Find influencers to collaborate"

className="
w-full
lg:w-[320px]
border
rounded-lg
pl-10
py-3
focus:ring-2
focus:ring-blue-400
"

/>

</div>

)

}

export default SearchBar