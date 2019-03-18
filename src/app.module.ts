import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:
   [MongooseModule.forRoot('mongodb://paulo.cayres:pccr0976@ds147965.mlab.com:47965/login', {useNewUrlParser: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
