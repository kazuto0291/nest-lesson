// DTOをつくる
// D:data
// T:trancefer
// 0:object
// クライアントからサーバーに送られてくるときのデータの形を定義したもの。クラスやインターフェースで定義したもの。

// どういう形でcreateuserが来てほしいかの型を作る

export class CreateUserDto {
  readonly username!: string;
  readonly password!: string;
}
