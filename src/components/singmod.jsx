import React from "react";
import './styles/singmod.css';
import { useState } from 'react';

const Singmod = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log([email, pass])

    }
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const inputHandler = (e, type) => {
        e.preventDefault()
        type === 'email' ? setEmail(e.target.value) : setPass(e.target.value)

    }
    return (
        <form action="#" method="get">
            <div className="all">
                <div className="border">
                    <p className="p1">Електронна пошта</p>
                    <input className="input1" type="text" name="username" onChange={(e) => inputHandler(e, 'email')} />
                    <br />
                    <div className="ppp">
                        <div className="pp">
                            <p className="p2">Пароль</p>
                        </div>
                    </div>
                    <input className="input1" type="password" name="pass" onChange={(e) => inputHandler(e, 'pass')} />
                    <br />
                    <button className="button1" type="submit" onClick={(e) => onSubmit(e)}>Увійти</button>
                </div>
                <br />
                <div className="border1">
                    <p className="p4">Не маєш акаунту? - <a href="" className="p5">Зарєєструйся</a></p>
                </div>
            </div>
        </form>
    )

}
export default Singmod; 