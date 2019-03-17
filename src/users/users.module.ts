import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '../../node_modules/@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService],
})
export class UsersModule {}
