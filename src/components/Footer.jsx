import {

FaHospital,

FaHeart,

} from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer">

<div>

<h2>

<FaHospital/>

&nbsp;

SmartCasemix V2

</h2>

<p>

Digital Library ICD-10, ICD-9-CM,

dan BA Kesepakatan

</p>

</div>

<div>

<p>

Made with

<FaHeart className="footerHeart"/>

for Medical Record

</p>

<p>

© 2026 SmartCasemix

</p>

</div>

</footer>

);

}