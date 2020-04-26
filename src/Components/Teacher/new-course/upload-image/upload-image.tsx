import React, {useState} from 'react';
import style from './upload-image.module.scss';
import upload from '../../../../images/upload2.png'
import CloseIcon from '@material-ui/icons/Close';

export const UploadImage = () => {
    let mainFile = null;
    let [url, setUrl] = useState('');
    let [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    let uploadImage = (e) => {
        let reader = new FileReader();
        let photo_file = e.target.files[0];
        setFileName(e.target.files[0].name);
        reader.onloadend = () => {
            setUrl(`${reader.result}`);
            setFile(photo_file);
            mainFile = photo_file;
        };
        reader.readAsDataURL(photo_file)
    };
    const deleteUrl = () => {
        setUrl('');
        setFileName('');
        setFile(null);
        mainFile = null;
    };
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
