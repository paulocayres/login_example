import { Controller, Get, Render } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly appService: LoginService) {}

  @Get()
  @Render('login')
  login() {
    return { teste: 'testando' };
  }
}
