import React, {useCallback, useEffect, useState} from 'react';
import classNames from "classnames/bind";
import styles from "./new-course.module.scss";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {Button} from "@material-ui/core";
import {UploadImage} from "./upload-image/upload-image";
import {connect} from "react-redux";
import {createCourseThunk} from "../../../redux/student/courses-module/thunks";
import {
    isCourseCreating,
    isSuccessCreating,
    getErrorCourseCreatingMessage
} from "../../../redux/student/courses-module/selectors";
import {courseInfoType} from "../../../api/course/_types";
import {getTeacherId} from '../../../redux/Teacher/selectors/teacher-cabinet-selector';
import {useSnackbar} from 'notistack';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'New-course';

type PropsType = {
    isCreating: boolean;
    isSuccess: boolean;
    errorMessage: string;
    createCourse: ({id: number, courseData: courseInfoType}) => void;
    teacherId: number;
};

const NewCourse = (props) => {
    const {isCreating, createCourse, errorMessage, isSuccess, teacherId}: PropsType = props;
    const createNewCourse = useCallback((values) => {
        const courseData = {
            name: values.name,
            info: values.info,
            imgurl: url,
        };
        createCourse({id: teacherId, courseData: courseData})
    }, [createCourse, teacherId]);
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
    const {enqueueSnackbar} = useSnackbar();
    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar('Курс успешно добавлен', {variant: "success"});
        }
        if (Boolean(errorMessage)) {
            enqueueSnackbar(`${errorMessage}`, {variant: "error"});
        }
    }, [isSuccess, errorMessage]);
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                Новый курс
            </h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                <Form
                    onSubmit={createNewCourse}
                    render={({handleSubmit, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__main-container`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__fields-container`)}>
                                    <UploadImage uploadImage={uploadImage} deleteUrl={deleteUrl} url={url}/>
                                    <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                        <Field
                                            name="name"
                                            component={TextField}
                                            type="text"
                                            label="Название курса"
                                            id="outlined-multiline-static"
                                            variant="outlined"
                                            disable={isCreating}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                <Field
                                    fullWidth
                                    name="info"
                                    component={TextField}
                                    type="text"
                                    rows={6}
                                    label="Информация о курсе"
                                    id="outlined-multiline-static"
                                    multiline
                                    variant="outlined"
                                    disable={isCreating}
                                />
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__submit-button`)}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    Создать
                                </Button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isCreating: isCourseCreating(state),
    isSuccess: isSuccessCreating(state),
    errorMessage: getErrorCourseCreatingMessage(state),
    teacherId: getTeacherId(state),
});

export default connect(mapStateToProps, {createCourse: createCourseThunk})(NewCourse);
