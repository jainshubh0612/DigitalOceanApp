import { Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';
import * as  data from './public/assets/json/data.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/*')
  @Header('content-type', 'text/html')
  async getData(@Res() res: Response, @Req() req: Request) {
    return res.render('index', { 
      data: data
    });
  }
}
