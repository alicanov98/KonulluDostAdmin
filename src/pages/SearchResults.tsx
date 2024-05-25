import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {db} from "../fakeDb/db";
import SearchVoluntarys, {VoluntaryListType} from "../components/SearchVoluntarys";
// @ts-ignore
import person from "../assets/image/person2.jpg";



const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResults: React.FC = () => {
    const query = useQuery().get('query')?.toLowerCase() || '';
    const [voluntarys, setVoluntarys] = useState<VoluntaryListType[]>([]);

    useEffect(() => {
        setVoluntarys(db.voluntarys);
    }, []);



    const filteredData = query
        ? voluntarys.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.surname.toLowerCase().includes(query) ||
            item.fatherName.toLowerCase().includes(query)
        )
        : voluntarys;

    return (
        <section className='centerVoluntaryDetails'>
            <div style={{marginTop:30}}><SearchVoluntarys/></div>
            <div className='container'>
                <div className='row'>
                    < div className='cardBoxCenterVoluntaryDetails'>
                        {filteredData.length > 0 ? (
                            filteredData.map(item => (
                                <NavLink to={`/voluntary-details/${item.id}`} className='voluntaryCard' key={item.id}>
                                    <img className='voluntaryImage' src={person} alt={person}/>
                                    <div className='cardDetails'>
                                        <h3 className='centerVoluntaryName'>{item.surname} {item.name} {item.fatherName}</h3>
                                        <h4 className='centerName'> {item.centerNumber} sayli Dost merkezi</h4>
                                        <h4 className='dkNumber'>{item.centerNumber}DK-{item.dkNumber}</h4>
                                        <p style={{color: '#000'}}>{item.position}</p>
                                    </div>
                                </NavLink>
                            ))
                        ) : (
                            <li className="searchItem" style={{color: '#000'}}>Axtarış üzrə məlumat tapılmadı!</li>
                        )}
                    </div>
                </div>
            </div>
        </section>
)
    ;
};

export default SearchResults;
