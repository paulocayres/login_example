import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';

@Module({
  imports:
   [MongooseModule.forRoot('mongodb://paulo.cayres:pccr0976@ds147965.mlab.com:47965/login', {useNewUrlParser: true}),
    LoginModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
