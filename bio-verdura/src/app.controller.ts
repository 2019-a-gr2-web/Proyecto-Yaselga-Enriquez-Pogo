import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/Proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  login(@Response() res) {
    return res.render('login/login');
  }
}
