import React, {useEffect, useState} from "react";
import { MdContactPhone } from "react-icons/md";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";


// @ts-ignore
import decor from '../assets/image/1849355.png'
import {KonulluType} from "../components/Header";

const UserDetails:React.FC=()=> {
    const [token,setToken]=useState<KonulluType | null>(null)
    useEffect(()=>{
        const storedToken:string | null=localStorage.getItem('user')
        if (storedToken) {
            setToken(JSON.parse(storedToken));
        }
    },[])

    return (
        <>
                <section className='voluntaryDetails'>
                    <div className='container'>
                        <div className='row'>
                            <div className='aboutVoluntaryLeft'>
                                <div className='imgPerVol'>
                                    <img className='voluntaryImage' src={process.env.PUBLIC_URL!+ token?.img}
                                         alt={`${token?.firstName} ${token?.surName}`}/>
                                </div>
                                <div className='volTitle'>
                                    <h1 className='voluntaryName'>{token?.firstName} {token?.surName}</h1>
                                    <h4 className='volcen'> {token?.center}</h4>
                                </div>
                            </div>
                            <div className='aboutVoluntaryRight'>
                                <div className='contact'>
                                    <h2 className='title'><TbInfoSquareRoundedFilled
                                        style={{fontSize: '35px', color: '#740093'}}/> Haqqında</h2>
                                    <h4 className='volAbo' > Vəzifə: {token?.position}</h4>
                                    <h4 className='volAbo'> Fin: {token?.fin}</h4>
                                    <h4 className='volAbo'> Cinsi: {token?.gender}</h4>
                                </div>
                                <div className='contact'>
                                    <h2 className='title'> <MdContactPhone style={{ fontSize:'35px', color:'#740093'}} /> Əlaqə</h2>
                                    <h4 className='volAbo'> Email: {token?.email}</h4>
                                    <h4 className='volAbo'> Tel: {token?.phone}</h4>
                                </div>
                                <img className='decor' src={decor} alt={decor}/>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}


export default UserDetails;
