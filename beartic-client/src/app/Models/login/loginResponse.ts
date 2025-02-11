import { role } from "../role/role";

export class loginResponse {
    status!: number;
    message!: string;
    errors!: string[];
    data!: login;
}

export class login{
    id!: string;
    username!: string;
    email!: string;
    roles!: role[];
    token!: string;
}