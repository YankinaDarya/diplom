import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Field.module.scss';
import TextField from "@material-ui/core/TextField";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Field';

type PropsType = {
    onClickSave: (e: any) => void;
    onChange: (e: any) => void;
    defaultValue: string | null | undefined;
    title: string;
};

const Field = ({ onChange, defaultValue, onClickSave, title}: PropsType): JSX.Element => {
    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
    };
    const saveNewData = (e) => {
        onClickSave(e.target.value);
        deactivateEditMode();
    };
    return (<div className={cn(`${COMPONENT_STYLE_NAME}`)}>
        {title}
        {editMode ?
            <span className={cn(`${COMPONENT_STYLE_NAME}__input-container`)}>
                <TextField id="outlined-basic" defaultValue={defaultValue} name="fullName"
                           onChange={onChange}
                />
                <SaveOutlinedIcon onClick={saveNewData}/>
                <CloseOutlinedIcon onClick={deactivateEditMode}/>
            </span> : <>
                <span className={cn(`${COMPONENT_STYLE_NAME}__data`)}>{defaultValue}</span>
                <EditOutlinedIcon
                    className={cn(`${COMPONENT_STYLE_NAME}__edit-icon`)}
                    onClick={activateEditMode}
                />
            </>}
    </div>);
};

export default Field;
