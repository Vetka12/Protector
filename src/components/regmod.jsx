import React from "react";
import './styles/regmod.css'

const Regmod = () => {
    return(
        <form  action="#" method="get" className="regmod">
        <div className="all">
             <div className="border">
             <p className="p1">Нік/ім'я</p>
             <input className="input1" type="text" name="username" />
             <p className="p1">Електронна пошта</p>
             <input className="input1" type="text" name="username" />
             <br/>
             <div className="ppp">
             <div className="pp">
             <p className="p2">Пароль</p>
             </div>
             </div>
             <input className="input1" type="password" name="pass" />
             <br/>
             <button className="button1" type="submit">Зарєєструватися</button>
             </div>
             <br/>
      </div>
        </form>
    )

}
export default Regmod; 