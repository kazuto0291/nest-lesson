import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// コントローラの役割--どんなURL来たらどんな値を返すかが書かれている。
// サーバーとしてコントローラがメイン
@Controller('base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello/goodby')
  getHello2() {
    return 'hello';
  }
}
