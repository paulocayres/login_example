import { User } from './../user/user.interface';
import { Injectable, HttpService } from '@nestjs/common';
import { UserDTO } from '../user/user.dto';
import { InjectModel } from '../../node_modules/@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userDTO: UserDTO): Promise<any> {
    // Logger.log('DTO' + visitorDto.recaptcha);
    const createdUser = new this.userModel(userDTO);
    // Logger.log('Visitor' + createdVisitor);
    if (createdUser) {
      try {
        const save = await createdUser.save();
        return save;
        // Logger.log(save);
      } catch (err) {
        // Logger.log('err');
        throw new Error(err.code);
        // return 'err';
      }
    } else {
      throw new Error('database');
    } /*  */
  }
}
