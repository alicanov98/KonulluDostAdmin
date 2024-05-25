import React, { ChangeEvent, useEffect, useState } from 'react';
import { db } from "../fakeDb/db";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export interface VoluntaryListType {
    id: number;
    name: string;
    surname: string;
    fatherName: string;
    fin: string;
    birthday: string;
    gender: string;
    phone: string;
    language: string;
    email: string;
    city: string;
    address: string;
    education: string;
    centerNumber: string;
    dkNumber: string;
    image: string;
    position: string;
}

const SearchVoluntarys: React.FC = () => {
    const [voluntarys, setVoluntarys] = useState<VoluntaryListType[]>([]);
    const [value, setValue] = useState<string>('');
    const [warning, setWarning] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        setVoluntarys(db.voluntarys);
    }, []);

    const inputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (e.target.value.length >= 3) {
            setWarning('');
        } else {
            setWarning('Minimum 3 hərf yazmalısınız.');
        }
    };

    const handleSearch = () => {
        const query = value.trim();
        if (query.length >= 3) {
            navigate(`/search-results?query=${query}`);
            setValue('');
        } else {
            setWarning('Minimum 3 hərf yazmalısınız.');
        }
    };

    const resultSearch = voluntarys.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.surname.toLowerCase().includes(value.toLowerCase()) ||
        item.fatherName.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <div className='search'>
            <div className="formSearch">
                <div className='searchInpBtn'>
                    <input
                        type="text"
                        className="searchInp"
                        placeholder="Axtar"
                        value={value}
                        onChange={inputValue}
                    />
                    <button className='buttonSearch' onClick={handleSearch}>
                        <AiOutlineSearch className="iconSerach" />Axtar
                    </button>
                </div>
                {warning && <p style={{ color: 'red' ,marginTop:10 }}>{warning}</p>}
                {value.length >= 3 && (
                    <ul className="searchList">
                        {resultSearch.length === 0 ? (
                            <li className="searchItem" style={{ color: '#fff' }}>Axtarış üzrə məlumat tapılmadı!</li>
                        ) : (
                            resultSearch.map((searchItem) => (
                                <Link key={searchItem.id}
                                      to={`/voluntary-details/${searchItem.id}`}
                                      className="searchCard"
                                >
                                    <li className="searchItem">
                                        {searchItem.surname} {searchItem.name} {searchItem.fatherName} {searchItem.centerNumber}DK{searchItem.dkNumber}
                                    </li>
                                </Link>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchVoluntarys;
