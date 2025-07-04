import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/api/v1/hello')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
}
