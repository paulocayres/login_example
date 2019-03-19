import { UserDTO } from './../user/user.dto';
import {
  Controller,
  Get,
  Render,
  Post,
  Req,
  Body,
  Logger,
} from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get()
  @Render('register')
  getRegister() {
    return { teste: 'testando' };
  }

  @Post()
  @Render('register')
  async postRegister(@Body() userDTO: UserDTO) {
    try {
      const login = await this.registerService.create(userDTO);
      Logger.log('login: ' + login);
      return { message: 'Cadastro realizado com sucesso' };
    } catch (err) {
      Logger.log(err);
      if (err.toString() === 'Error: 11000') {
        return { message: 'Usuário já cadastrado' };
      } else if (err.toString() === 'Error: database') {
        return { message: 'Falha ao cadastrar, tente novamente' };
      }
      return { message: err };
    }
  }
}
