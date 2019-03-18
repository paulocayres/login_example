import { Controller, Get, Render } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly appService: RegisterService) {}

  @Get()
  @Render('register')
  register() {
    return { teste: 'testando' };
  }
}
