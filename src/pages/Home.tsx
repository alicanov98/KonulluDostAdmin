import SearchVoluntarys from "../components/SearchVoluntarys";
// @ts-ignore
import logo from '../assets/image/logo.png'
// @ts-ignore
import deceration from '../assets/image/pngwin.com.png'
import {useState} from "react";
function Home() {
const [open,setOpen]=useState(false)
    return (
        <section className='home'>
            <img src={deceration} alt={deceration} className='deceration'/>
<div className='container'>
    <div className='row'>
        <img src={logo} alt={logo}/>
        <div className='search'>
            <SearchVoluntarys open={open} setOpen={setOpen}/>
        </div>
    </div>
</div>
        </section>
    );
}


export default Home;
