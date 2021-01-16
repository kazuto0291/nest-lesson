import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // app が作成したインスタンスになっている（NestFactoryというクラスがあり、クラスのstaticメソッドのcreateが作られAppMoculeが投入されている）
  const app = await NestFactory.create(AppModule);
  // app = express()内部的になっている
  await app.listen(3000);
}
bootstrap();
