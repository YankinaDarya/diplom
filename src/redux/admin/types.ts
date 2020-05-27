export type StateType = {
    id: number | null;
    adminIsAuth: boolean;
    notifications: Array<any>;
};

export type NewUserType = {
    login: string;
    password: string;
    role: string;
};

export type adminLoginType = {
    login: string;
    password: string;
};
