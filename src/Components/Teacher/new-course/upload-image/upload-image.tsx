import React, {useState} from 'react';
import style from './upload-image.module.scss';
import upload from '../../../../images/upload2.png'
import CloseIcon from '@material-ui/icons/Close';

type PropsType = {
    uploadImage: (e: any) => void;
    deleteUrl: () => void;
    url: string;
};

export const UploadImage = ({uploadImage, deleteUrl, url}: PropsType) => {
    return (
        <div className={style.uploadBlock}>
            <div>
                <label htmlFor="file">
                    <img src={upload} alt="upload-photo" className={style.photo}/>
                </label>
                <input type="file" name="file" id="file" onChange={uploadImage} className={style.input}/>
                <div className={style.text}>Загрузить фото</div>
            </div>
            <div className={style.image}>
                {url ? <div>
                    <img className={style.avatar} src={`${url}`} alt="картинка"/>
                    <CloseIcon className={style.closeIcon} onClick={deleteUrl}/>
                </div> : ''}
            </div>
        </div>
    );
};
