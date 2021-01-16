// DTOをつくる
// D:data
// T:trancefer
// 0:object
// クライアントからサーバーに送られてくるときのデータの形を定義したもの。クラスやインターフェースで定義したもの。

// どういう形でcreateuserが来てほしいかの型を作る
import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString() //文字列じゃないとだめ
  @MinLength(4) //１文字以上
  @MaxLength(20) //最大２０文字まで。
  readonly username!: string;
  @IsString() //文字列じゃないとだめ
  @MinLength(8) //8文字以上
  @MaxLength(20) //最大２０文字まで。
  readonly password!: 32;
}
