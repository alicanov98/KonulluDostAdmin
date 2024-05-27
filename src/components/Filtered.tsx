import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { db } from "../fakeDb/db";
import SearchVoluntarys, { VoluntaryListType } from "../components/SearchVoluntarys";
// @ts-ignore
import person from "../assets/image/person2.jpg";
import { useLocation } from 'react-router-dom';
import {LuListFilter} from "react-icons/lu";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

    interface SearchVoluntarysProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Filtered: React.FC<SearchVoluntarysProps> = ({open,setOpen}) => {
    const [voluntarys, setVoluntarys] = useState<VoluntaryListType[]>([]);
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [surname, setSurname] = useState('');
    const [fin, setFin] = useState('');
    const [filteredData, setFilteredData] = useState<VoluntaryListType[]>([]);

    const navigate = useNavigate();


console.log(filteredData)
    useEffect(() => {
        setVoluntarys(db.voluntarys);
    }, []);



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
        navigate('/results', { state: { filteredData } });
    };

    return (
        <section className='filtered'>
            <button className='allVoluntaryBtn' onClick={() => setOpen(!open)}><LuListFilter/></button>
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
                        <button className='filteredBtn' onClick={handleSearch}>Ara</button>
                    </div>
                </div> : null
                }
            </div>
        </section>
    );
};

export default Filtered;
