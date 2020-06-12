import { studentAPI } from "../../../api/student";
import { setStudentTimetableStartLoadingAction, setStudentTimetableStopLoadingAction, setStudentTimetableAction } from "./actions";

export const getStudentTimetableThunk = (id: number): any =>
    (dispatch) => {
        dispatch(setStudentTimetableStartLoadingAction());
        studentAPI.getStudentTimetable(id).then((response => {
                if (response) {
                    response.schedule.forEach((lesson) => {
                        const lessonData = {
                            lessonNumber: lesson.time,
                            day: lesson.day_cd,
                            lessonName: lesson.name,
                            isLecture: lesson.islecture,
                            isSeminar: lesson.isseminar,
                            place: lesson.place,
                            courseId: lesson.course_id
                        };
                        dispatch(setStudentTimetableAction({...lessonData}));
                        dispatch(setStudentTimetableStopLoadingAction());
                    })
                }
            }
        ))
    };
