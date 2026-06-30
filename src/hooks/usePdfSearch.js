import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
`//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function usePdfSearch(){

const[data,setData]=useState([]);

const[loading,setLoading]=useState(true);

useEffect(()=>{

async function load(){

const files=[

{
name:"ICD-10",
file:"/pdf/ICD10.pdf"
},

{
name:"ICD-9-CM",
file:"/pdf/ICD9CM.pdf"
},

{
name:"BA Kesepakatan",
file:"/pdf/BA.pdf"
}

];

let hasil=[];

for(const pdf of files){

try{

const doc=

await pdfjsLib.getDocument(pdf.file).promise;

for(let i=1;i<=doc.numPages;i++){

const page=

await doc.getPage(i);

const txt=

await page.getTextContent();

const text=

txt.items.map(

x=>x.str

).join(" ");

hasil.push({

source:pdf.name,

page:i,

text,

file:pdf.file

});

}

}catch(e){

console.log(e);

}

}

setData(hasil);

setLoading(false);

}

load();

},[]);

function search(keyword){

if(keyword==="") return [];

return data.filter((x)=>

x.text

.toLowerCase()

.includes(

keyword.toLowerCase()

)

);

}

return{

loading,

search

};

}