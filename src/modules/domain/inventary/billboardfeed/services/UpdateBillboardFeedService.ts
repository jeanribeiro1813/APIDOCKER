<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  IdBillBoardFeed: string;
  UserId: string;
  imageProfile: string;
  Isimage: boolean;
  Url: string;
}

export default class UpdateInventaryService {
  public async update({
    IdBillBoardFeed,
    UserId,
    imageProfile,
    Isimage,
    Url,
  }: IRequest): Promise<BillboardFeed | AppErrors> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const invent = await repository.findById(IdBillBoardFeed);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-BILLBOARDFEED');

    invent.UserId = UserId ? UserId : invent.UserId;
    invent.imageProfile = imageProfile ? imageProfile : invent.imageProfile;
    invent.Isimage = Isimage ? Isimage : invent.Isimage;
    invent.Url = Url ? Url : invent.Url;

    const result = await repository.save(invent);

    return result;
  }
}
=======
import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';

interface IRequest {
  IdBillBoardFeed: string;
  UserId: string;
  imageProfile: string;
  Isimage: boolean;
  Url: string;
}

export default class UpdateInventaryService {
  public async update({
    IdBillBoardFeed,
    UserId,
    imageProfile,
    Isimage,
    Url,
  }: IRequest): Promise<BillboardFeed | AppErrors> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const invent = await repository.findById(IdBillBoardFeed);

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    invent.UserId = UserId ? UserId : invent.UserId;
    invent.imageProfile = imageProfile ? imageProfile : invent.imageProfile;
    invent.Isimage = Isimage ? Isimage : invent.Isimage;
    invent.Url = Url ? Url : invent.Url;

    const result = await repository.save(invent);

    return result;
  }
}
>>>>>>> develop
