export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';

export const SET_NEW_STUDENT_DATA = 'SET_NEW_STUDENT_DATA';
export const setNewStudentData = (data: any) => ({type: SET_NEW_STUDENT_DATA, data});

export const SET_STUDENT_IS_AUTH = 'SET_STUDENT_IS_AUTH';
export const setStudentIsAuth = (isAuth: boolean) => ({type: SET_STUDENT_IS_AUTH, isAuth});
