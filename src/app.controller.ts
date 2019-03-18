import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {teste: 'testando'};
  }

  @Get('/login')
  @Render('login')
  login() {
    return {teste: 'testando'};
  }

  @Get('/register')
  @Render('register')
  register() {
    return {teste: 'testando'};
  }
}
