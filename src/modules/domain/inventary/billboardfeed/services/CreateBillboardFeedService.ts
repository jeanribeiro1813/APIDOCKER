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

export default class CreateService {
  public async criar({
    IdBillBoardFeed,
    UserId,
    imageProfile,
    Isimage,
    Url,
  }: IRequest): Promise<BillboardFeed | undefined> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const inventary = await repository.findByIdUser(UserId);

    if (!inventary) {
      throw new AppErrors('Não é um ID de Usuario', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      UserId,
      imageProfile,
      Isimage,
      Url,
    });

    await redisCache.invalidation('api-block-BILLBOARDFEED');

    await repository.save(result);

    return result;
  }
}
