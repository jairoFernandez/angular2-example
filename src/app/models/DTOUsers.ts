import {User} from 'app/models/user.interface';
export class DTOUsers implements User{
    name: string;
    username: string;
    password: string;
    age: number;
    urlPhoto: string;
    quantity: number;
}