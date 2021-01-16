import { Body, Controller, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Postだとbodyを受け取る必要がある--@Bodyを使う
  @Post()
  create( @Body() createUsers) {
  return createUsers
}
  // create( @Body('username') username: string ,@Body('password') password: string) { //body分けて受け取りたいものだけ指定できる
  // @Post(':id')
  // create( @Param('id') id) { //@ParamにするとURLの動的な値を取得できるようになる
  // @Post('/?hello')
  // create(@Query()){} //クエリを取得できる
  // @Post()
  // create(@Request() req) {return} //リクエストを取得できる
  // @Post()
  // create(@Response() res) {} //レスポンスを取得できる
  // @Post()
  // create(@Headers() res) {} //ヘッダーも取得できる
}
