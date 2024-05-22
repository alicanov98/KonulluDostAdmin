import {NavLink, useParams} from "react-router-dom";
import konullu from "../assets/image/1-12.jpeg";
import { db } from "../fakeDb/db";
import {useEffect, useState} from "react";

export interface VoluntaryListType {
    id: number,
    name: string,
    surname: string,
    fatherName: string,
    fin: string,
    birthday: string,
    gender: string,
    phone: string,
    language: string,
    email: string,
    city: string,
    address: string,
    education: string,
    centerNumber: string,
    dkNumber: string,
    image: string,
    position: string,
}


function CenterAbout() {

    const { id } = useParams<{ id: string  }>();

    return (
        <section className='centerAbout'>
            <img src={konullu} alt="Center About" />
            <div className='container'>
                <div className='row'>
                    <div className='cardBox'>
                        <NavLink
                            to={
                                 `/CenterVoluntaryDetails/${id}/${'Cari'}`}
                            className='cart'
                        >
                            <div className='cartItem'>
                                <span className='hover'></span>
                                <h3>Cari könüllülər</h3>
                            </div>
                        </NavLink>
                        <NavLink
                            to={
                                `/CenterVoluntaryDetails/${id}/${'Məzun'}`
                            }
                            className='cart'
                        >
                            <div className='cartItem'>
                                <span className='hover'></span>
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
