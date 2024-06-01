import HeadlessDemo from "./HeadlessDemo";

import React, {useEffect, useRef, useState} from 'react';
import { RiPassValidLine } from "react-icons/ri";
import { AiFillBell} from "react-icons/ai";
import {Dialog} from "primereact/dialog";
import {Avatar} from "primereact/avatar";
import { ListBox } from 'primereact/listbox';
import {OverlayPanel} from "primereact/overlaypanel";
import {Badge} from "primereact/badge";
// @ts-ignore

export interface KonulluType {
    name: string;
    password: string;
    firstName:string;
    surName:string
    img:string
    position:string
    gender:string
    fin:string
    center:string
    phone:string
    email:string
}

const Header: React.FC  =  ()=> {
    const [visible,setVisible]=useState(false)
    const [token,setToken]=useState<KonulluType|null>(null)
 useEffect(()=>{
     const storedToken:string | null=localStorage.getItem('user')
     if (storedToken) {
         setToken(JSON.parse(storedToken));
     }
 },[])
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length:6 }, (_, index) => ({
        label: `News #${index}`,
        value: index
    }));
    const op= useRef<OverlayPanel>(null);
    console.log(items)
    return (

  <header className='header'>
<div className='container'>
    <div className='row'>
        <div className='left'>  <HeadlessDemo/>
            <h3 className='textHeader'>Könüllülər haqqında informasiya sistemi</h3></div>
        <div className='headerIcons'>
            <p style={{fontSize: 20, color: '#fff'}}>{token?.firstName} {token?.surName}</p>
            <i className="pi pi-envelope p-overlay-badge" style={{fontSize: 25,color:'#fff', cursor: 'pointer'}} onClick={() => {
                setVisible(!visible)
            }}>
                {
                    items.length>0 ?<Badge severity="danger"></Badge> :null
                }
            </i>
            <RiPassValidLine style={{color: "white", fontSize: 30, cursor: 'pointer'}} />
            {visible ?
                <div className="card flex justify-content-center" style={{position: "absolute", top: 60, right: 90}}>
                    {  items.length>0?<ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items}
                              virtualScrollerOptions={{itemSize: 38}} className="w-full md:w-14rem"
                                               listStyle={{height: '250px', width: 200, zIndex: 2}}/>:null}
                </div> : null}
            <img
                onClick={(e) => op.current && op.current.toggle(e)}
                src={process.env.PUBLIC_URL! + token?.img}
                style={{width: 40, height: 40, borderRadius: '9999px', objectFit: 'cover', cursor: 'pointer'}}
                alt={token?.surName}
            />
            <OverlayPanel ref={op}>
                <img
                    src={process.env.PUBLIC_URL! + token?.img}
                    style={{width: 150, height: 180, borderRadius: 10, objectFit: 'cover'}}
                    alt={token?.surName}
                /> </OverlayPanel>
            {/*<Dialog header={headerElement} visible={visible} maximizable style={{width: '50vw'}} onHide={() => {*/}
            {/*    if (!visible) return;*/}
            {/*    setVisible(false);*/}
            {/*}}>*/}
            {/*    <div style={{display:'flex',gap:10}}>*/}
            {/*        <img*/}
            {/*            onClick={() => setVisible(true)}*/}
            {/*            src={process.env.PUBLIC_URL! + token?.img}*/}
            {/*            style={{width: 100, height: 110,borderRadius:10, objectFit: 'cover', cursor: 'pointer'}}*/}
            {/*            alt={token?.surName}*/}
            {/*        />*/}
            {/*        <p className="m-0">*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
            {/*            labore et*/}
            {/*            dolore magna aliqua.*/}
            {/*            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
            {/*            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu*/}
            {/*            fugiat nulla*/}
            {/*            pariatur.*/}
            {/*            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim*/}
            {/*            id est*/}
            {/*            laborum.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</Dialog>*/}
        </div>
    </div>
</div>
  </header>

    );
};

export default Header;

