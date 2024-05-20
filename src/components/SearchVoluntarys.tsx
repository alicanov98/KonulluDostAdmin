import React, { useEffect, useState } from 'react';
import { db } from "../fakeDb/db";
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from "react-router-dom";
import path from "node:path";


export interface VoluntaryListType {
    id: number,
    name: string,
    surname: string,
    centerNumber: string,
    dkNumber: string,
    image: string,
    club: string,
    position: string,
}

export default function SearchVoluntarys() {
    const [voluntarys, setVoluntarys] = useState<VoluntaryListType[]>([]);
    const [value, setValue] = useState<string>("");
    useEffect(() => {
        setVoluntarys(db.voluntarys);
    }, []);

    const inputValue = function (e:any) {
        setValue(e.target.value);
    };

    const resultSearch = voluntarys.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
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
                    <button className='buttonSearch'><AiOutlineSearch className="iconSerach"/>Axtar</button>
                </div>

                {value === "" ? null : (
                    <ul className="searchList">
                        {resultSearch.length === 0 ? (
                            <li className="searchItem" style={{color: '#fff'}}>Axtarş üzrə məlumat tapılmadı!</li>
                        ) : (
                            resultSearch.map((searchItem) => (
                                <Link key={searchItem.id}
                                      to={`/voluntary-details/${searchItem.id}`}
                                      className="searchCard"
                                >
                                    <li className="searchItem">
                                        {searchItem.surname} {searchItem.name} {searchItem.centerNumber}DK{searchItem.dkNumber}
                                    </li>
                                </Link>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
    }
