import { Repository, EntityRepository } from 'typeorm';
import Friends from '../entities/Friends';
import { FriendsProtocols } from '../protocols/FriendsProtocols';

@EntityRepository(Friends)
export default class FriendsRepository
  extends Repository<Friends>
  implements FriendsProtocols
{
  public async findById(Id: string): Promise<Friends | undefined> {
    const index = this.findOne({ where: { Id } });

    return index;
  }

  public async findByUser(IdUser: string): Promise<Friends | undefined> {
    const index = this.findOne({ where: { IdUser } });

    return index;
  }

  public async findByEmail(EmailUser: string): Promise<Friends | undefined> {
    const index = this.findOne({ where: { EmailUser } });

    return index;
  }

<<<<<<< HEAD
  public async findAll(): Promise<Friends[]> {
=======
  public async findAll(): Promise<Friends[] | undefined> {
>>>>>>> develop
    const all = this.find({});

    return all;
  }
}
