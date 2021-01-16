import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' }, //一時間のみ有効
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
