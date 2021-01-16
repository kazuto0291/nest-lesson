import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// コントローラの役割--どんなURL来たらどんな値を返すかが書かれている。
// サーバーとしてコントローラがメイン
@Controller('base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); //thisはconstructorに定義されているから使える
  }
  @Get('hello/goodby')
  getHello2() {
    return 'hello';
  }
}
// new AppController(new AppService())
// thisが使える条件２つ
// app.serviceに@Injectable()というデコレーター書く
// app.moduleでprovidersにAppServiceを登録する
// 事によってconstructor()関数にAppService型を入れると自動的にNest.jsはAppServiceを認識してAppServiceを定義することができる
