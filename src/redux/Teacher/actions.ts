export const SET_TEACHER_IS_AUTH = 'SET_TEACHER_IS_AUTH';
export const setTeacherIsAuth = (payload: boolean) => ({type: SET_TEACHER_IS_AUTH, payload});

export const SET_TEACHER_ID_ACTION = 'SET_TEACHER_ID_ACTION';
export const setTeacherIdAction = (payload: boolean) => ({type: SET_TEACHER_ID_ACTION, payload});

export const SET_NEW_TEACHER_DATA = 'SET_NEW_TEACHER_DATA';
export const setNewTeacherDataAction = (payload: any) => ({type: SET_NEW_TEACHER_DATA, payload});

export const SET_TEACHER_DATA = 'SET_TEACHER_DATA';
export const setTeacherDataAction = (payload: any) => ({type: SET_TEACHER_DATA, payload});
