import UsersToken from '../entities/UsersToken';

export interface UsersTokensInterface {
  findId(IdToken: string): Promise<UsersToken | undefined>;
  findByToken(Token: string): Promise<UsersToken | undefined>;
  generate(UserIDToken: string): Promise<UsersToken | undefined>;
}
