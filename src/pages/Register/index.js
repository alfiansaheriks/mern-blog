import React from "react";
import './register.scss';
import { RegisterBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const navigatetoLogin = () => {
        navigate('/login')
    }
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={15} />
                <Input label="Email" placeholder="Email"/>
                <Gap height={15} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={50} />
                <Button title="Register" onClick={navigatetoLogin} />
                <Gap height={100} />
                <Link title="Kembali ke Login" onClick={navigatetoLogin} />
            </div>
        </div>
    )
}

export default Register;