
            import React, { useState } from 'react';
            import { Sidebar } from 'primereact/sidebar';
// @ts-ignore
            import logo from '../assets/image/logo.png'
            // @ts-ignore
            import dec from '../assets/image/pngwing.com.png'

            import {NavLink} from "react-router-dom";
            export default function SizeDemo() {
            const [visible, setVisible] = useState(false);

            return (
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
                            <NavLink to="/" className='sideBarItem'>Çıxış</NavLink>
                        </ul>
                    </Sidebar>
                    <button onClick={() => setVisible(true)} className="p-button p-component p-button-icon-only" data-pc-name="button"
                            data-pc-section="root"><span className="p-button-icon p-c pi pi-bars"
                                                         data-pc-section="icon"></span><span
                        className="p-button-label p-c" data-pc-section="label">&nbsp;</span><span role="presentation"
                           aria-hidden="true"
                          className="p-ink"
                        data-pc-name="ripple"
                           data-pc-section="root"
                          ></span>
                    </button>
                </div>
            )
            }
