
            import React, { useState } from 'react';
            import { Sidebar } from 'primereact/sidebar';
// @ts-ignore

            import logo from '../assets/image/logo.png'
            import { ProgressSpinner } from 'primereact/progressspinner';
            // @ts-ignore
            import dec from '../assets/image/pngwing.com.png'

            import {NavLink} from "react-router-dom";
            export default function SizeDemo() {
                const [visible, setVisible] = useState(false);
                const [loading,setLoading]=useState(false)
                return (
                    <>
                    {loading? <p className='overlay' style={{ color:'#fff',position:"absolute",top:0,left:0,background:'#00000060',width:'100%',height:'100%',zIndex:1,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'30px',flexDirection:'column'}}> <ProgressSpinner  strokeWidth="4" animationDuration="1s" />Yüklənir...</p>:
                        <div className="card flex justify-content-center">
                            <Sidebar visible={visible} onHide={() => setVisible(false)}
                                     className="w-full md:w-20rem lg:w-30rem">
                                <img className='dec' src={dec} alt={dec}/>
                                <div className='logo'>
                                    <img src={logo} alt="mobilApp"/>
                                </div>
                                <ul className='sideBarList'>
                                    <NavLink to="/" className='sideBarItem'>Əsas səhifə</NavLink>
                                    <NavLink to="/centers" className='sideBarItem'> Mərkəzlər</NavLink>
                                    <NavLink to="/News" className='sideBarItem'>Xəbərlər</NavLink>
                                    <NavLink to="/myPersonalAccount" className='sideBarItem'>Şəxsi hesabım</NavLink>
                                    <NavLink to="/" className='sideBarItem' onClick={() => {
                                        setLoading(true)
                                        setTimeout(() => {
                                            localStorage.clear();
                                            window.location.reload();
                                        }, 2000)
                                    }}>Çıxış</NavLink>
                                </ul>
                            </Sidebar>
                            <button onClick={() => setVisible(true)} className="p-button p-component p-button-icon-only"
                                    data-pc-name="button"
                                    data-pc-section="root"><span className="p-button-icon p-c pi pi-bars"
                                                                 data-pc-section="icon"></span><span
                                className="p-button-label p-c" data-pc-section="label">&nbsp;</span><span
                                role="presentation"
                                aria-hidden="true"
                                className="p-ink"
                                data-pc-name="ripple"
                                data-pc-section="root"
                            ></span>
                            </button>
                        </div>
                    }
                    </>

                )
            }
