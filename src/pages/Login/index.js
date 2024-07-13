import React from "react";
import { LoginBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/')
    }
    const navigateDaftar = () => {
        navigate('/register')
    }
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={15} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={50} />
                <Button title="Login" onClick={navigateLogin} />
                <Gap height={100} />
                <Link title="Belum punya akun? Daftar disini" onClick={navigateDaftar} />
            </div>
        </div>
    )
}

export default Login;