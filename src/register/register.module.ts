import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { UserSchema } from '../user/user.schema';
import { MongooseModule } from '../../node_modules/@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [RegisterService],
  controllers: [RegisterController],
  exports: [RegisterService],
})
export class RegisterModule {}
