import React, { ChangeEvent, useEffect, useState } from 'react';
import { db } from "../fakeDb/db";
import { AiOutlineSearch} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { LuListFilter } from "react-icons/lu";
import {ZIndexUtils} from "primereact/utils";
import set = ZIndexUtils.set;

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
interface SearchVoluntarysProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchVoluntarys: React.FC<SearchVoluntarysProps> = ({open,setOpen}) => {
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
        const query = value.trim().toLowerCase();
        if (query.length >= 3) {
            navigate(`/search-results?query=${query}`);
            setValue('');
        }  else if(query.length === 0 ){
            navigate(`/search-results?query=${query}`);
        }else {
            setWarning('Minimum 3 hərf yazmalısınız.');
        }
    };

    const resultSearch = voluntarys.filter((item) => {
        const searchTerms = value.trim().toLowerCase().split(' ');
        return searchTerms.every(term => {
            const regex = new RegExp(term,('i'));
            return regex.test(item.name) || regex.test(item.surname) || regex.test(item.fatherName);
        });
    });

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
                        <AiOutlineSearch className="iconSerach"/>Axtar
                    </button>
                    <button className='allVoluntaryBtn' onClick={()=>setOpen(!open)}><LuListFilter/></button>
                </div>
                {warning && <p style={{color: 'red', marginTop: 10}}>{warning}</p>}
                {value.length >= 3 && (
                    <ul className="searchList">
                        {resultSearch.length === 0 ? (
                            <li className="searchItem" style={{color: '#fff'}}>Axtarış üzrə məlumat tapılmadı!</li>
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
