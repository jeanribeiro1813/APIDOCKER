<<<<<<< HEAD
import BillboardFeed from '../entities/BillboardFeed';

export interface BillboardFeedItemProtocols {
  findById(IdBillBoardFeed: string): Promise<BillboardFeed | undefined>;
  findByIdUser(UserId: string): Promise<BillboardFeed | undefined>;
  findAll(): Promise<BillboardFeed[]>;
}
=======
import BillboardFeed from '../entities/BillboardFeed';

export interface BillboardFeedItemProtocols {
  findById(IdBillBoardFeed: string): Promise<BillboardFeed | undefined>;
  findByIdUser(UserId: string): Promise<BillboardFeed | undefined>;
  findAll(): Promise<BillboardFeed[] | undefined>;
}
>>>>>>> develop
