import {instance} from '../index';
import {courseInfoType} from "./_types";

export const courseAPI = {
    createNewCourse(id: number, courseData: courseInfoType) {
        return instance.post(`course`, {
            name: courseData.name,
            imgurl: Boolean(courseData.imgurl) ? courseData.imgurl : null,
            info: courseData.info,
            lec_id: id
        }).then(res => res.data);
    },
    getAllCourses(id: number) {
        return instance.get(`course/student/all/${id}`).then(res => res.data);
    },
    getCourseInfo(id: number) {
        return instance.get(`course/${id}`).then(res => res.data);
    },
    getCoursePlan(id: number) {
        return instance.get(`course/week/${id}`).then(res => res.data);
    },
    getCourseStudentsInfo(id: number) {
        return instance.get(`course/hw/${id}`).then(res => res.data);
    },
    getCourseNotifications(id: number) {
        return instance.get(`course/notification/${id}`).then(res => res.data);
    },
    getAllStudentCourses(id: number) {
        return instance.get(`course/student/${id}`).then(res => res.data);
    },
    enrollCourse(courseId: number, studentId: number) {
        return instance.post(`course/student`, {
            course_id: courseId,
            student_id: studentId,
        }).then(res => res.data);
    },
    getStudentsHomeworks(courseId: number, studentId: number) {
        return instance.get(`student/course/hw`, {params: {course_id: courseId, student_id: studentId}})
            .then(res => res.data);
    },
    sentHomework(courseId: number, studentId: number, week_num: string, hw_url: string) {
        return instance.post(`course/hw`, {
            course_id: courseId,
            student_id: studentId,
            week_num: Number(week_num),
            hw_url
        }).then(res => res.data);
    },
    sentQuestion(notification: string, studentId: number, courseId: string) {
        return instance.post(`/course/question`, {
            course_id: courseId,
            student_id: studentId,
            notification,
        }).then(res => res.data);
    },
};
