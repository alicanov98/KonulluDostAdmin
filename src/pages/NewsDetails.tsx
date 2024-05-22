import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

interface NewsItem {
    id: number;
    bas: string;
    sekil: string;
    metn: string;
}

const NewsDetails: React.FC = () => {
    const [data, setData] = useState<NewsItem[]>([]);
    const [cardData, setCardData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<NewsItem[]>('https://konullu.dost.gov.az/fealiyyet-api.php')
            .then(response => {
                const allData = response.data;
                setData(allData);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id && data.length > 0) {
            const voluntaryData = data.filter((item) => Number(item.id) === parseInt(id));
            setCardData(voluntaryData);
        }
    }, [id, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className='newsDetails'>
            <div className='container'>
                <div className='row'>
                    <div className='newsDetailsCardBox'>
                        {cardData.map(item => (
                            <div key={item.id} className='newsDetailsCard'>
                                <img src={`https://konullu.dost.gov.az/mel/diger/${item.sekil}`} alt={item.sekil} />
                                <div>
                                    <h2 className='newsName'>{item.bas}</h2>
                                    <p className='newsDetailsTitle'>{item.metn}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsDetails;
