import React, {memo} from 'react';
import style from './index.module.css';

export const Preloader = memo(() => {
    return (<div className={style.loader}>
        <div className={style.l_main}>
            <div className={style.l_square}><span></span><span></span><span></span></div>
            <div className={style.l_square}><span></span><span></span><span></span></div>
            <div className={style.l_square}><span></span><span></span><span></span></div>
            <div className={style.l_square}><span></span><span></span><span></span></div>
        </div>
    </div>);
});
