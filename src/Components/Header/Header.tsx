import React from 'react';
import style from './Header.module.scss';
import logo from '../../images/logo.svg';
import prep from '../../images/prep.jpg';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.logo}/>
            <div className={style.outBlock}>
                ИВАН
                <img src={prep} alt="prep" className={style.avatar}/>
                <button>ВЫХОД</button>
            </div>
        </header>
    );
};

export default Header;
