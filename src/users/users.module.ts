import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema:}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], //providersの中のものしかかけない
})
export class UsersModule {}
