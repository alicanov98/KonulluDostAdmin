import HeadlessDemo from "./HeadlessDemo";

import React from 'react';
import { RiPassValidLine } from "react-icons/ri";
import { AiFillBell} from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";



const Header =  ()=> {

    return (

  <header className='header'>
<div className='container'>
    <div className='row'>
        <div className='left'>  <HeadlessDemo/>
            <h3 className='textHeader'>Könüllülər haqqında informasiya sistemi</h3></div>
        <div className='headerIcons'>
            <AiFillBell style={{color:"white" ,fontSize:30}} />
            <RiPassValidLine style={{color:"white" ,fontSize:30}} />
            <IoPersonCircleOutline style={{color:"white" ,fontSize:30}}  />
        </div>
    </div>
</div>
  </header>

    );
};

export default Header;

