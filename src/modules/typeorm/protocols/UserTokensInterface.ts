import UsersToken from "../entities/UsersToken";

export interface UsersTokensInterface {
  findId(id:string): Promise<UsersToken | undefined>
  findByToken(token:string): Promise<UsersToken | undefined>
  generate(user_id:string): Promise<UsersToken | undefined>

}
