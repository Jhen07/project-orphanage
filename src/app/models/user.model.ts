export interface User {
    id?: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    nick_name: string;
    gender: number;
    age: number;
    birth_date: string;
    birth_place: string;
    sabbath: string;
    provincial_address: string;
    civil_status: string;
    nationality: string;
    address: string;
    date_hired: string;
    oi_phil_health: string;
    oi_sss: string;
    oi_umid: string;
    oi_pagibig: string;
    is_admin: number;
    status: number;
    created_by: number;
    updated_by: number;
    created_at?: any;
    updated_at?: any;
}

export interface EmpoymentHistory {
    staff_id: string;
    company: string;
    position: string;
    duties: string;
    date_from: string;
    date_to: string;
    reference: string;
    created_by: number;
    updated_by: number;
    created_at?: string;
    updated_at?: string;
}

export const initialUser: User = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    nick_name: '',
    gender: 1,
    age: 0,
    birth_date: '',
    birth_place: '',
    sabbath: '',
    provincial_address: '',
    civil_status: '',
    nationality: '',
    address: '',
    date_hired: '',
    oi_phil_health: '',
    oi_sss: '',
    oi_umid: '',
    oi_pagibig: '',
    is_admin: 0,
    status: 0,
    created_by: 0,
    updated_by: 0
};

export const initialEHistory = {
    staff_id: '',
    company: '',
    position: '',
    duties: '',
    date_from: '',
    date_to: '',
    reference: '',
    created_by: 0,
    updated_by: 0,
};

