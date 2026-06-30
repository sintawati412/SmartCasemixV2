import { useState } from "react";

import {
FaSearch
} from "react-icons/fa";

export default function SearchBox({onSearch}){

const[keyword,setKeyword]=useState("");

function submit(e){

e.preventDefault();

onSearch(keyword);

}

return(

<form

className="searchBox"

onSubmit={submit}

>

<input

type="text"

placeholder="Cari diagnosis, kode ICD, tindakan..."

value={keyword}

onChange={(e)=>setKeyword(e.target.value)}

/>

<button>

<FaSearch/>

Cari

</button>

</form>

);

}