import SearchVoluntarys from "../components/SearchVoluntarys";
// @ts-ignore
import logo from '../assets/image/logo.png'
// @ts-ignore
import deceration from '../assets/image/pngwin.com.png'
function Home() {

    return (
        <section className='home'>
            <img src={deceration} alt={deceration} className='deceration'/>
<div className='container'>
    <div className='row'>
        <img src={logo} alt={logo}/>
        <div className='search'>
            <SearchVoluntarys/>
        </div>
    </div>
</div>
        </section>
    );
}


export default Home;
