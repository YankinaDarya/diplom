import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {LessonForm} from './LessonForm/LessonForm';

const cn = classNames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-cell';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

type PropsType = {
    dayNumber: number;
    lessonNumber: number;
    isLecture: boolean;
    isSeminar: boolean;
    lessonName: string;
    updateTimeTableAction: (payload: any) => void;
};

const dayOfWeek = {
    0: 'Понедельник',
    1: 'Вторник',
    2: 'Среда',
    3: 'Четверг',
    4: 'Пятница',
    5: 'Суббота',
    6: 'Воскресенье',
};

const dayOfWeekEnglish = {
    0: 'monday',
    1: 'tuesday',
    2: 'wednesday',
    3: 'thursday',
    4: 'friday',
    5: 'saturday',
    6: 'sunday',
};

const numberofLesson = {
    1: '1 пара',
    2: '2 пара',
    3: '3 пара',
    4: '4 пара',
    5: '5 пара',
    6: '6 пара',
    7: '7 пара',
};

const Cell = ({
                  dayNumber, lessonNumber, lessonName,
                  isLecture, isSeminar, updateTimeTableAction
              }: PropsType): JSX.Element => {
    const classes = useStyles();
    const [isModalOpen, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = values => {
        const newLesson = {
            lessonName: values.lessonName,
            isLecture: values.lessonType === 'lecture',
            isSeminar: values.lessonType === 'seminar',
            day: dayOfWeekEnglish[dayNumber],
            lessonNumber: lessonNumber
        };
        updateTimeTableAction(newLesson);
        handleClose();
    };
    return (
        <>
            <td className={cn(COMPONENT_STYLE_NAME,
                {[`${COMPONENT_STYLE_NAME}--lecture`]: isLecture,},
                {[`${COMPONENT_STYLE_NAME}--seminar`]: isSeminar,},
            )} onClick={handleOpen}>
                {lessonName}
            </td>
            {isModalOpen && (<Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isModalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Добавить предмет</h2>
                        <h3>Время: {dayOfWeek[dayNumber]} {numberofLesson[lessonNumber]}</h3>
                        <LessonForm isLecture={isLecture}
                                    isSeminar={isSeminar}
                                    lessonName={lessonName}
                                    onSubmit={onSubmit}
                        />
                    </div>
                </Fade>
            </Modal>)}
        </>
    );
};

export default Cell;


