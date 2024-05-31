import React, {useState} from "react";
// @ts-ignore
import logo from '../assets/image/logo.png'
// @ts-ignore
import loginimg from '../assets/image/konulluLogin.jpg'

import {object, string} from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {ProgressSpinner} from "primereact/progressspinner";

const loginSchema=object().shape({
    name: string().trim().required("İstifadəçi Adı zəruridir"),
    password: string().trim().required("Şifrə zəruridir")
})
export interface KonulluType{
    name:string
    password:string
    firstName:string
    surName:string
    img:string
    position:string
    gender:string
    fin:string
    center:string
    phone:string
    email:string
}
const users: KonulluType[] = [
    {
        name: 'Həsənova',
        password: 'həsənova1',
        firstName: 'Solmaz',
        surName: 'Həsənova',
        img:'/assets/images/users/hesenova.png',
        position:'Könüllülərlə iş şöbəsinin müdiri.',
        gender:'Qadın',
        fin:'***6CY',
        center:'DOST Agentlik',
        phone:'+99450XXXXXXX',
        email:'hasanova@gmail.com',
    },
    {
        name: 'Teleyev',
        password: 'teleyev1',
        firstName: 'Fərid',
        surName: 'Teleyev',
        img:'/assets/images/users/teleyev.png',
        position:'Könüllülərlə iş şöbəsinin əməkdaşı',
        gender:'Kişi',
        fin:'***6CY',
        center:'DOST Agentlik',
        phone:'+99450XXXXXXX',
        email:'teleyev@gmail.com',
    },
    {
        name: 'Məmmədli',
        password: 'məmmədli1',
        firstName: 'Sona',
        surName: 'Məmmədli',
        img:'/assets/images/users/memmedli.png',
        position:'Könüllülərlə iş şöbəsinin əməkdaşı',
        gender:'Qadın',
        fin:'***6CY',
        center:'DOST Agentlik',
        phone:'+99450XXXXXXX',
        email:'mammadli@gmail.com',
    },
    {
        name: 'Aslanlı',
        password: 'aslanlı1',
        firstName: 'Nəcməddin',
        surName: 'Aslanlı',
        img:'/assets/images/users/Nacmaddin.png',
        position:'Abşeron Bakı DOST Mərkəzinin könüllərinin idarə edilməsi üzrə əməkdaş',
        gender:'Kişi',
        fin:'***6CY',
        center:'Abşeron Bakı DOST Mərkəzini',
        phone:'+99450XXXXXXX',
        email:'aslanlı@gmail.com',
    }
];

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = (data: { name: string; password: string }) => {
        const user = users.find(user => user.name === data.name && user.password === data.password);
        if (user) {
            setLoading(true);
            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = "/";
            }, 2000);
        } else {
            console.log(errors);
        }
    };
    return (
        <section>
            <div className='filtered'>
                    <img className='overlay' style={{objectFit:'cover'}} src={loginimg}/>
                <form onSubmit={handleSubmit(onSubmit)} className='filteredInputs'>
                  <img style={{width:200,marginBottom:50}} src={logo}/>
                    {loading ? (
                       <p style={{ color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',flexDirection:'column',gap:'10px'}}> <ProgressSpinner style={{width:'70px',height:'70px'}}  strokeWidth="4" animationDuration="1s" />Yüklənir...</p>

                    ) : (
                        < div style={{width:'100%', display:'flex',flexDirection:'column',gap:20,justifyContent:'center',alignItems:'center'}}>
                                <div style={{width:'70%'}}>
                                <input
                                    style={{width:'100%'}}
                                    type="text"
                                    className="searchInp"
                                    placeholder="İstifadəçi Adı"
                                    {...register('name')}
                                />
                                {errors.name && <p style={{color:'#fff',marginTop:'5px'}} >{errors.name.message}</p>}
                            </div>
                            <div style={{width:'70%'}}>
                                <input
                                    style={{width:'100%'}}
                                    className="searchInp"
                                    placeholder="Şifrə"
                                    type="password"
                                    {...register('password')}
                                />
                                {errors.password && <p style={{color:'#fff',marginTop:'5px'}}>{errors.password.message}</p>}
                            </div>
                            <button className='filteredBtn' type='submit'>Daxil ol</button>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}
export default Login
