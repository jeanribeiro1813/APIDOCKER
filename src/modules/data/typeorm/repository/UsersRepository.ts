import { Repository, EntityRepository } from 'typeorm';
import Users from '../entities/Users';
import { UserProtocols } from '../protocols/UsersProtocols';

@EntityRepository(Users)
export default class UserRepository
  extends Repository<Users>
  implements UserProtocols
{
  public async findByEmail(email: string): Promise<Users | undefined> {
    const mail = this.findOne({ where: { email } });

    return mail;
  }
  public async findById(id: string): Promise<Users | undefined> {
    const index = this.findOne({ where: { id } });

    return index;
  }
  public async findByName(name: string): Promise<Users | undefined> {
    const index = this.findOne({ where: { name } });

    return index;
  }

  public async findAll(): Promise<Users[] | undefined> {
    const all = this.find({});

    return all;
  }
}
