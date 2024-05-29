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

const Login: React.FC=()=>{
    const [loading, setLoading] = useState(false);

 const {
     register,
     handleSubmit,formState:{errors}}=useForm({
     resolver:yupResolver(loginSchema)
 })
    const obj= {
    name:'konulludost',
    password:'123456aa'
 }

    const onSubmit = (data: { name: string, password: string }) => {
        if (data.name === obj.name && data.password === obj.password) {
            const token = "konulludost";
            setLoading(true)
            setTimeout(()=>{
                localStorage.setItem('konulludost', token);
                console.log("Giris ugurlu!, token:", token);
                window.location.href = "/";
            },2000)
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
