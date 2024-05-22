import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";

import { db } from "../fakeDb/db";
// @ts-ignore
import person from '../assets/image/person2.jpg'
// @ts-ignore
import decor from '../assets/image/1849355.png'
export interface VoluntaryListType {
    id: number,
    name: string,
    surname: string,
    fatherName:string,
    fin:string,
    birthday:string,
    gender:string,
    phone:string,
    language:string,
    email:string,
    city:string,
    address:string,
    education:string,
    centerNumber: string,
    dkNumber: string,
    image:string,
    position: string,
}

function VoluntaryDetails() {
    const [cardData, setCardData] = useState<VoluntaryListType | undefined>(undefined);
    const { id } = useParams<{ id: string  }>();

    useEffect(() => {
        if (id) {
            const voluntaryData = db.voluntarys.find((item) => item.id === parseInt(id));
            setCardData(voluntaryData);
        }
    }, [id]);

    return (
        <>
            {cardData ? (
                <section className='voluntaryDetails'>
                    <div className='container'>
                        <div className='row'>
                            <div className='aboutVoluntaryLeft'>
                                <div className='imgPerVol'>
                                    <img className='voluntaryImage' src={person}
                                         alt={`${cardData.name} ${cardData.surname}`}/>
                                </div>
                                <div className='volTitle'>
                                    <h1 className='voluntaryName'> {cardData.surname} {cardData.name} {cardData.fatherName}</h1>
                                    <h4 className='volcen'> {cardData.centerNumber}DK-{cardData.dkNumber}</h4>
                                    <h4 className='volcen'> {cardData.position} Könüllü</h4>
                                    <h4 className='volcen'> {cardData.centerNumber} saylı Dost mərkəzi</h4>
                                </div>
                            </div>
                            <div className='aboutVoluntaryRight'>
                                <div className='contact'>
                                    <h2 className='title'><TbInfoSquareRoundedFilled style={{fontSize:'35px',  color:'#740093'}}/> Haqqında</h2>
                                    <h4 className='volAbo'> Fin: {cardData.fin}</h4>
                                    <h4 className='volAbo'> Cinsi: {cardData.gender}</h4>
                                    <h4 className='volAbo'> Doğum tarixi: {cardData.birthday}</h4>
                                    <h4 className='volAbo'> Təhsil: {cardData.education}</h4>
                                    <h4 className='volAbo'> Dil bilikləri: {cardData.language}</h4>
                                </div>
                                <div className='contact'>
                                    <h2 className='title'> <MdContactPhone style={{ fontSize:'35px', color:'#740093'}} /> Əlaqə</h2>
                                    <h4 className='volAbo'> Email: {cardData.email}</h4>
                                    <h4 className='volAbo'> Tel: {cardData.phone}</h4>
                                </div>
                                <div className='contact'>
                                    <h2 className='title'><FaLocationDot style={{fontSize:'35px', color:'#740093'}}/> Ünvan</h2>
                                    <h4 className='volAbo'> Şəhər: {cardData.city}</h4>
                                    <h4 className='volAbo'> Ünvanı: {cardData.address}</h4>
                                </div>
                                <img className='decor' src={decor} alt={decor}/>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}


export default VoluntaryDetails;
