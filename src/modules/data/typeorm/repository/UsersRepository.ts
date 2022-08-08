import { Repository, EntityRepository } from 'typeorm';
import Users from '../entities/Users';
import { UserProtocols } from '../protocols/UsersProtocols';

@EntityRepository(Users)
export default class UserRepository
  extends Repository<Users>
  implements UserProtocols
{
  public async findByEmail(UserEmail: string): Promise<Users | undefined> {
    const mail = this.findOne({ where: { UserEmail } });

    return mail;
  }
  public async findById(UserID: string): Promise<Users | undefined> {
    const index = this.findOne({ where: { UserID } });

    return index;
  }

  public async findAll(): Promise<Users[]> {
    const all = this.find({});

    return all;
  }
}
