import { Repository, EntityRepository } from 'typeorm';
import BillboardFeed from '../entities/BillboardFeed';
import { BillboardFeedItemProtocols } from '../protocols/BillboardFeedItemProtocols';

@EntityRepository(BillboardFeed)
export default class BillboardFeedRepository
  extends Repository<BillboardFeed>
  implements BillboardFeedItemProtocols
{
  public async findById(
    IdBillBoardFeed: string,
  ): Promise<BillboardFeed | undefined> {
    const index = this.findOne({ where: { IdBillBoardFeed } });

    return index;
  }

  public async findByIdUser(
    UserId: string,
  ): Promise<BillboardFeed | undefined> {
    const index = this.findOne({ where: { UserId } });

    return index;
  }

  public async findAll(): Promise<BillboardFeed[] | undefined> {
    const all = this.find({});

    return all;
  }
}
