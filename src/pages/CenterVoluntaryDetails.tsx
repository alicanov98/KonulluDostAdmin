// @ts-ignore
import person from '../assets/image/person2.jpg'
import { db } from "../fakeDb/db";
import {useEffect, useState} from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {voluntaryTypes} from "../fakeDb/VoluntaryListType";

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
function CenterVoluntaryDetails() {
    const [cardData, setCardData] = useState<VoluntaryListType[]>([]);

    const { type } = useParams<{ type: string  }>();
    const { id } = useParams<{ id: string  }>();

    useEffect(() => {
        if (id) {
            const voluntaryData = db.voluntarys.filter((item) => item.centerNumber === parseInt(id).toString());
            setCardData(voluntaryData);
        }
    }, [id]);


    console.log(type)

    return (
        <section className='centerVoluntaryDetails'>
            <div className='container'>
                <div className='row'>
                    < div className='cardBoxCenterVoluntaryDetails'>
                        {type==='Cari'&& cardData.filter((item) => item.position === 'Cari').map((volunteer:VoluntaryListType, index:any) => (
                            <NavLink to={`/voluntary-details/${volunteer.id}`} className='voluntaryCard' key={index}>
                                <img className='voluntaryImage' src={person} alt={person}/>
                                <div className='cardDetails'>
                                    <h3 className='centerVoluntaryName'>{volunteer.surname} {volunteer.name} {volunteer.fatherName}</h3>
                                    <h4 className='centerName'> {volunteer.centerNumber} sayli Dost merkezi</h4>
                                    <h4 className='dkNumber'>{volunteer.centerNumber}DK-{volunteer.dkNumber}</h4>
                                    <p style={{color:'#000'}}>{volunteer.position}</p>
                                </div>
                            </NavLink>
                        ))}
                        {type==='Məzun'&& cardData.filter((item) => item.position === 'Məzun').map((volunteer:VoluntaryListType, index:any) => (
                            <NavLink to={`/voluntary-details/${volunteer.id}`} className='voluntaryCard' key={index}>
                                <img className='voluntaryImage' src={person} alt={person}/>
                                <div className='cardDetails'>
                                    <h3 className='centerVoluntaryName'>{volunteer.surname} {volunteer.name} {volunteer.fatherName}</h3>
                                    <h4 className='centerName'> {volunteer.centerNumber} sayli Dost merkezi</h4>
                                    <h4 className='dkNumber'>{volunteer.centerNumber}DK-{volunteer.dkNumber}</h4>
                                    <p style={{color:'#000'}}>{volunteer.position}</p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default CenterVoluntaryDetails;
