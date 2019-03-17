import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.model';

@Injectable()

export class UsersService {

    login(user: UserDTO): boolean {
        return true;
    }
}
