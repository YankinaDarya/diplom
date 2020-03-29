import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export const Input =() => {
    const classes = useStyles();
    return (
            <TextField id="outlined-basic" label="Название предмета" variant="outlined" />
    );
};
