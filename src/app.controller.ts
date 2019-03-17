import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  teste: string = '';

  @Get()
  @Render('index')
  get() {
    return {teste: 'testando'};
  }
}
