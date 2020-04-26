import React from 'react';
import classNames from "classnames/bind";
import styles from "./new-course.module.scss";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import {Button} from "@material-ui/core";
import {Week} from "./week/week";
import {UploadImage} from "./upload-image/upload-image";

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'New-course';

const NewCourse = () => {
    return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
            <h1 className={cn(`${COMPONENT_STYLE_NAME}__h1`)}>
                Новый курс
            </h1>
            <div className={cn(`${COMPONENT_STYLE_NAME}__form-container`)}>
                <Form
                    onSubmit={() => {}}
                    render={({handleSubmit, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__main-container`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__fields-container`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                    <Field
                                        name="name"
                                        component={TextField}
                                        type="text"
                                        label="Название курса"
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                    />
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                    <Field
                                        name="time"
                                        component={TextField}
                                        type="text"
                                        label="Время проведения"
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                    />
                                </div>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                    <Field
                                        name="place"
                                        component={TextField}
                                        type="text"
                                        label="Место проведения"
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                    />
                                </div>
                                </div>
                                <UploadImage />
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__field-container`)}>
                                <Field
                                    fullWidth
                                    name="courseInfo"
                                    component={TextField}
                                    type="text"
                                    rows={6}
                                    label="Информация о курсе"
                                    id="outlined-multiline-static"
                                    multiline
                                    variant="outlined"
                                />
                            </div>
                            <div className={cn(`${COMPONENT_STYLE_NAME}__plan-container`)}>
                                <div className={cn(`${COMPONENT_STYLE_NAME}__plan-header`)}>
                                    План занятий на семестр
                                </div>
                                <Week number={1}/>
                                <Week number={2}/>
                                <Week number={3}/>
                                <Week number={4}/>
                                <Week number={5}/>
                                <Week number={6}/>
                                <Week number={7}/>
                                <Week number={8}/>
                                <Week number={9}/>
                                <Week number={10}/>
                                <Week number={11}/>
                                <Week number={12}/>
                                <Week number={13}/>
                                <Week number={14}/>
                                <Week number={15}/>
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

export default NewCourse;
