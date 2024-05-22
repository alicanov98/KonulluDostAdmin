import birsaylimerkez from '../assets/image/merkezler/1saylidostmerkezi.jpeg'
import ikisaylimerkez from '../assets/image/merkezler/2saylidostmerkezi.jpeg'
import ucsaylimerkez from '../assets/image/merkezler/3saylidostmerkezi.jpeg'
import dortsaylimerkez from '../assets/image/merkezler/4saylidostmerkezi.jpeg'
import bessaylimerkez from '../assets/image/merkezler/5saylidostmerkezi.jpeg'
import abseronregionalmerkez from '../assets/image/merkezler/abserondostmerkezi.jpeg'
import qarabagregionalmerkez from '../assets/image/merkezler/qarabagdostmerkezi.jpeg'
import {NavLink} from "react-router-dom";

function Center() {

    return (
        <>
            <section className="center">
                <div className='container'>
                    <div className='row'>
                        <div className='cartBox'>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={birsaylimerkez} alt={birsaylimerkez}/>
                                </div>
                                <h4> 1 saylı Bakı Dost mərkəzi</h4>
                            </NavLink>

                            <NavLink to='/centerAbout'  className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={ikisaylimerkez} alt={ikisaylimerkez}/>
                                </div>
                                <h4> 2 saylı Bakı Dost mərkəzi</h4>
                            </NavLink>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={ucsaylimerkez} alt={ucsaylimerkez}/>
                                </div>
                                <h4> 3 saylı Bakı Dost mərkəzi</h4>
                            </NavLink>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={dortsaylimerkez} alt={dortsaylimerkez}/>
                                </div>
                                <h4> 4 saylı Bakı Dost mərkəzi</h4>
                            </NavLink>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={bessaylimerkez} alt={birsaylimerkez}/>
                                </div>
                                <h4> 5 saylı Bakı Dost mərkəzi</h4>
                            </NavLink>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={abseronregionalmerkez} alt={birsaylimerkez}/>
                                </div>
                                <h4> Abşeron Dost mərkəzi</h4>
                            </NavLink>
                            <NavLink to='/centerAbout' className='cart'>
                                <div className='cartItem'>
                        <span className='hover'>
                    </span>
                                    <img src={qarabagregionalmerkez} alt={birsaylimerkez}/>
                                </div>
                                <h4> Qarabağ regional Dost mərkəzi</h4>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Center;
