import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { db } from "../fakeDb/db";

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
                <div>
                    <h1>{cardData.name} {cardData.surname}</h1>
                    <p>Center Number: {cardData.centerNumber}</p>
                    <p>DK Number: {cardData.dkNumber}</p>
                    <p>Club: {cardData.club}</p>
                    <p>Position: {cardData.position}</p>
                    <img src={cardData.image} alt={`${cardData.name} ${cardData.surname}`} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}


export default VoluntaryDetails;
