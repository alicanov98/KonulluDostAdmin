import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { db } from "../fakeDb/db";
// @ts-ignore
import person from '../assets/image/person2.jpg'
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
                            <div className='imagePerson'>
                                <div className='imgPerVol'>
                                    <img className='voluntaryImage' src={person}
                                         alt={`${cardData.name} ${cardData.surname}`}/>
                                </div>
                                <h1 className='voluntaryName'> {cardData.surname} {cardData.name} {cardData.fatherName}</h1>
                            </div>
                            <div className='contact'>
                                <h4 className='voluntaryAbout'> Fin: {cardData.fin}</h4>
                                <h4 className='voluntaryAbout'> Email: {cardData.email}</h4>
                                <h4 className='voluntaryAbout'> Tel: {cardData.phone}</h4>
                            </div>
                            <div className='contact'>
                                <h4 className='voluntaryAbout'> Cinsi: {cardData.gender}</h4>
                                <h4 className='voluntaryAbout'> Doğum tarixi: {cardData.birthday}</h4>
                                <h4 className='voluntaryAbout'> Təhsil: {cardData.education}</h4>
                                <h4 className='voluntaryAbout'> Dil bilikləri: {cardData.language}</h4>
                            </div>
                            <div className='contact'>
                                <h4 className='voluntaryAbout'> {cardData.centerNumber}DK-{cardData.dkNumber}</h4>
                                <h4 className='voluntaryAbout'> {cardData.centerNumber} saylı Dost mərkəzi</h4>
                                <h4 className='voluntaryAbout'> {cardData.position} Könüllü</h4>
                            </div>
                            <div className='contact'>
                                <h4 className='voluntaryAbout'> Şəhər: {cardData.city}</h4>
                                <h4 className='voluntaryAbout'> Adres: {cardData.address}</h4>
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
