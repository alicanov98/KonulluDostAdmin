import HeadlessDemo from "./HeadlessDemo";

import React, {useEffect, useState} from 'react';
import { RiPassValidLine } from "react-icons/ri";
import { AiFillBell} from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
// @ts-ignore
import userimg from '../../public/assets/images/users/hesenova.png'
export interface KonulluType {
    name: string;
    password: string;
    firstName:string;
    surName:string
    img:string
}

const Header: React.FC  =  ()=> {
    const [token,setToken]=useState<KonulluType|null>(null)
 useEffect(()=>{
     const storedToken:string | null=localStorage.getItem('user')
     if (storedToken) {
         setToken(JSON.parse(storedToken));
     }
 },[])




    return (

  <header className='header'>
<div className='container'>
    <div className='row'>
        <div className='left'>  <HeadlessDemo/>
            <h3 className='textHeader'>Könüllülər haqqında informasiya sistemi</h3></div>
        <div className='headerIcons'>
            <p style={{fontSize:20,color:'#fff'}}>{token?.firstName} {token?.surName}</p>
            <AiFillBell style={{color:"white" ,fontSize:30}} />
            <RiPassValidLine style={{color:"white" ,fontSize:30}} />
            <IoPersonCircleOutline style={{color:"white" ,fontSize:30}}  />

                <img
                    src={process.env.PUBLIC_URL!+ token?.img}
                    style={{ width: 40, height: 40, borderRadius: '9999px', objectFit: 'cover' }}
                    alt={token?.surName}
                />
        </div>
    </div>
</div>
  </header>

    );
};

export default Header;

