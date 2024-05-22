import foto from '../assets/image/1-12.jpeg'
import {useEffect, useState} from "react";
import axios from "axios";


interface NewsItem {
    id: number;
    bas: string;
    sekil: string;
    metn: string;
}
const News: React.FC = () => {
    const [data, setData] = useState<NewsItem[]>([]);
    const [topFiveData, setTopFiveData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        axios.get('https://konullu.dost.gov.az/fealiyyet-api.php')
            .then(response => {
                const allData = response.data;
                setData(allData);
                setLoading(false);
                const topFive = allData
                    .sort((a:any, b:any) => b.id - a.id)
                    .slice(0, 5);
                setTopFiveData(topFive);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    console.log(data,topFiveData)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <section className='news'>
            <div className='container'>
                <div className='row'>
                    <div className='newsCardBox'>
                        <div className='newsRight'>
                            {topFiveData[0] && (
                                <div className='newsCard' style={{width: 772, height: 376}}>
                                    <img src={`https://konullu.dost.gov.az/mel/diger/${topFiveData[0].sekil}`} alt={topFiveData[0].sekil}/>
                                    <h3 className='newsTitle'>{topFiveData[0].bas}</h3>
                                </div>
                            )}
                            {topFiveData[1] && (
                                <div className='newsCard' style={{width: 772, height: 248, marginTop: 8}}>
                                    <img src={`https://konullu.dost.gov.az/mel/diger/${topFiveData[1].sekil}`} alt={topFiveData[1].sekil}/>
                                    <h3 className='newsTitle'>{topFiveData[1].bas}</h3>
                                </div>
                            )}
                        </div>
                        <div className='newsLeft'>
                            <div style={{display: 'flex', gap: 8}}>
                                {topFiveData[2] && (
                                    <div className='newsCard' style={{width: 382, height: 248}}>
                                        <img
                                            src={`https://konullu.dost.gov.az/mel/diger/${topFiveData[2].sekil}`}
                                            alt={topFiveData[2]?.sekil || 'Default Title'}/>
                                        <h3 className='littleNewsTitle'>{topFiveData[2].bas}</h3>
                                    </div>
                                )}
                                {topFiveData[3] && (
                                    <div className='newsCard' style={{width: 382, height: 248}}>
                                        <img src={`https://konullu.dost.gov.az/mel/diger/${topFiveData[3].sekil}`} alt={topFiveData[3].sekil}/>
                                        <h3 className='littleNewsTitle'>{topFiveData[3].bas}</h3>
                                    </div>
                                )}
                            </div>
                            {topFiveData[4] && (
                                <div className='newsCard' style={{width: 772, height: 376, marginTop: 8}}>
                                    <img src={`https://konullu.dost.gov.az/mel/diger/${topFiveData[4].sekil}`} alt={topFiveData[4].sekil}/>
                                    <h3 className='newsTitle'>{topFiveData[4].bas}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default News;
