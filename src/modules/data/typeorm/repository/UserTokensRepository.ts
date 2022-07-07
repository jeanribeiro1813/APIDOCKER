import { Repository, EntityRepository } from 'typeorm';
import UsersToken from '../entities/UsersToken';
import { UsersTokensInterface } from '../protocols/UserTokensInterface';

@EntityRepository(UsersToken)
export default class UsersRepository
  extends Repository<UsersToken>
  implements UsersTokensInterface
{
  public async findId(IdToken: string): Promise<UsersToken | undefined> {
    const result = this.findOne({ where: { IdToken } });

    return result;
  }

  public async findByToken(Token: string): Promise<UsersToken | undefined> {
    const result = this.findOne({ where: { Token } });

    return result;
  }

  public async generate(UserIDToken: string): Promise<UsersToken | undefined> {
    const result = this.create({ UserIDToken });

    await this.save(result);

    return result;
  }
}
