import {Radios, TextField} from "mui-rff";
import React from "react";

export const formFields = [
    {
        size: 6,
        field: (
            <TextField
                label="Логин"
                name="login"
                margin="none"
                required={true}
            />
        ),
    },
    {
        size: 6,
        field: (
            <TextField
                label="Пароль"
                name="password"
                margin="none"
                required={true}
            />
        ),
    },
    {
        size: 12,
        field: (
            <Radios
                name="role"
                formControlProps={{margin: 'none'}}
                radioGroupProps={{row: true}}
                data={[
                    {label: 'Студент', value: 'student'},
                    {label: 'Преподаватель', value: 'lecturer'},
                ]}
            />
        ),
    },
];
