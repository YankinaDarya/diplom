import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./week.module.scss";
import {TextField} from "final-form-material-ui";
import {Field} from "react-final-form";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Week';

type PropsType = {
    number: number;
};

export const Week = ({number}: PropsType) => {
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
        <div className={cn(COMPONENT_STYLE_NAME)}>
            Неделя {number}
            <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                <Field
                    fullWidth
                    name="content"
                    component={TextField}
                    type="text"
                    label="Содержание"
                    id="outlined-multiline-static"
                />
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                <Field
                    fullWidth
                    name="homework"
                    component={TextField}
                    type="text"
                    label="Домашнее задание"
                    id="outlined-multiline-static"
                />
            </div>
            <div className={cn(`${COMPONENT_STYLE_NAME}__upload-block`)}>
                <div>
                    <label htmlFor="file">
                        <CloudUploadIcon className={cn(`${COMPONENT_STYLE_NAME}__upload`)}
                                         style={{fontSize: 60}}/>
                    </label>
                    <input type="file" name="file" id="file" onChange={uploadImage}
                           className={cn(`${COMPONENT_STYLE_NAME}__input`)} />
                    <div className={cn(`${COMPONENT_STYLE_NAME}__upload-text`)}>
                        Загрузить материалы
                    </div>
                </div>
                <div className={cn(`${COMPONENT_STYLE_NAME}__url`)}>
                    {fileName ? <div>
                        {fileName}
                        <CloseIcon className={cn(`${COMPONENT_STYLE_NAME}__close-icon`)}
                                   onClick={deleteUrl}/>
                    </div> : ''}
                </div>
            </div>
            {/*<input type="file" name="file" onChange={onChangeHandler}/>*/}
        </div>
    );
};
