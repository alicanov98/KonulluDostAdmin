import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { db } from "../fakeDb/db";
import SearchVoluntarys, { VoluntaryListType } from "../components/SearchVoluntarys";
// @ts-ignore
import person from "../assets/image/person2.jpg";
import { useLocation } from 'react-router-dom';
import {LuListFilter} from "react-icons/lu";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResults: React.FC = () => {
    const query = useQuery().get('query')?.toLowerCase() || '';
    const [voluntarys, setVoluntarys] = useState<VoluntaryListType[]>([]);
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [surname, setSurname] = useState('');
    const [fin, setFin] = useState('');
    const [filteredData, setFilteredData] = useState<VoluntaryListType[]>([]);
    const [open,setOpen]=useState(false)

    useEffect(() => {
        setVoluntarys(db.voluntarys);
    }, []);

    useEffect(() => {
        const filtered = voluntarys.filter(item => {
            const searchTerms = query.toLowerCase().split(' ');
            return searchTerms.every(term =>
                item.name.toLowerCase().includes(term) ||
                item.surname.toLowerCase().includes(term) ||
                item.fatherName.toLowerCase().includes(term)
            );
        });
        setFilteredData(filtered);
    }, [query, voluntarys]);

    const handleSearch = () => {
        const filtered = voluntarys.filter(item =>
            item.name.toLowerCase().includes(name.toLowerCase()) &&
            item.surname.toLowerCase().includes(surname.toLowerCase()) &&
            item.fatherName.toLowerCase().includes(fatherName.toLowerCase()) &&
            item.fin.toLowerCase().includes(fin.toLowerCase())
        );
        setFilteredData(filtered);
        setName('');
        setFatherName('');
        setSurname('');
        setFin('');
        setOpen(false)
    };

    return (
        <section className='centerVoluntaryDetails'>
            <div style={{marginTop: 30}} className='filteredSearch'><button className='allVoluntaryBtn' onClick={() => setOpen(!open)}><LuListFilter/></button>
                <SearchVoluntarys/></div>
            <div>
                {open ? <div className='filtered'>
                <div className='overlay' onClick={() => setOpen(false)}></div>
                    <div className='filteredInputs'>

                        <input
                            type="text"
                            className="searchInp"
                            placeholder="Ad"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="searchInp"
                            placeholder="Ata adı"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="searchInp"
                            placeholder="Soyad"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        <input
                            type="text"
                            className="searchInp"
                            placeholder="FIN"
                            value={fin}
                            onChange={(e) => setFin(e.target.value)}
                        />
                        <button className='filteredBtn' onClick={handleSearch}>Axtar</button>
                    </div>
                </div> : null
                }

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='cardBoxCenterVoluntaryDetails'>
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
    );
};

export default SearchResults;
