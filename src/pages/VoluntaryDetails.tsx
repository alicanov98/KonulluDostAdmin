import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { db } from "../fakeDb/db";
// @ts-ignore
import person from '../assets/image/person2.jpg'
export interface VoluntaryListType {
    id: number;
    name: string;
    surname: string;
    centerNumber: string;
    dkNumber: string;
    image: string;
    club: string;
    position: string;
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
                            </div>
                            <h1 className='voluntaryName'>{cardData.name} {cardData.surname}</h1>
                            <p> {cardData.centerNumber} saylı Dost mərkəzi</p>
                            <p> {cardData.centerNumber}DK-{cardData.dkNumber}</p>
                            <p> {cardData.position} Könüllü</p>
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
