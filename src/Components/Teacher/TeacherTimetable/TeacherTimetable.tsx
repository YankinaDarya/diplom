import React from 'react';
import {Field, Form} from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import {FieldArray} from 'react-final-form-arrays'

const onSubmit = async values => {
    console.log(values);
};

const TeacherTimetable = () => {
    return (
        <Form
            onSubmit={onSubmit}
            mutators={{
                ...arrayMutators
            }}
            render={({
                         handleSubmit,
                         form: {
                             mutators: {push, pop}
                         },
                         pristine,
                         form,
                         submitting,
                         values
                     }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <FieldArray name="customers">
                            {({fields}) => (
                                <div>
                                    {/*{fields.length === 0 && fields.push({firstName: 'тфьу'})}*/}
                                    {fields.map((name, index) => (
                                        <div key={name}>
                                            <div>
                                                <label>First Name</label>
                                                <Field name={`${name}.firstName`} component="input"/>
                                            </div>
                                            {fields.length !== 1 &&
                                            <button type="button" onClick={() => fields.remove(index)}>
                                                Remove
                                            </button>}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => {fields.push({firstName: ''})
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Создать расписание
                            </button>
                        </div>
                    </form>
                )
            }}
        />
    );
};

export default TeacherTimetable;
