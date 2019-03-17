import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDTO } from '../users/user.model';

@Injectable()
export class LoginService {

    constructor(private readonly usersService: UsersService) {}

    async validateUser(user: UserDTO): Promise<any> {
        // Validate if token passed along with HTTP request
        // is associated with any registered account in the database
        return await this.usersService.login(user);
      }

}
