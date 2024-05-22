import {NavLink} from "react-router-dom";
import konullu from "../assets/image/1-12.jpeg";

function CenterAbout() {

    return (
        <section className='centerAbout'>
            <img src={konullu} alt={konullu}/>
            <div className='container'>
                <div className='row'>
                    <div className='cardBox'>
                        <NavLink to='/CenterVoluntaryDetails' className='cart'>
                            <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                <h3>Cari könüllülər</h3>
                            </div>
                        </NavLink>
                        <NavLink to='/CenterVoluntaryDetails' className='cart'>
                            <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                <h3>Məzun könüllülər</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default CenterAbout;
