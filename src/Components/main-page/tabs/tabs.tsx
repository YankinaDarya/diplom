import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { StudentLoginForm } from './login-form/student/student-login-form';
import {TeacherLoginForm} from "./login-form/teacher/teacher-login-form";
import {AdminLoginForm} from "./login-form/admin/admin-login-form";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

export const LoginTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Студент" />
                <Tab label="Преподаватель" />
                <Tab label="Администратор" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <StudentLoginForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TeacherLoginForm />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AdminLoginForm />
            </TabPanel>
        </div>
    );
};
