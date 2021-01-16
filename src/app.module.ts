import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://zuto:password@cluster0.nqlus.mongodb.net/nesttest?retryWrites=true&w=majority') ], //app.moduleでimportしないといけない
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module-デコレーター（関数）--classを受け取ってデコレーションする関数（色々いじる）

// Nest.jsの裏側の処理
// new AppModule();
// const appService = new AppService();
// new AppController(appService);

// newを書かずに外部から入れる仕込みをDI(ディペンデンシィインジェクション)−デザインパターン
// ディペンデンシィ-依存性 インジェクション−外部から注入する−
// コードが見やすくなったり、テストしやすくなる
