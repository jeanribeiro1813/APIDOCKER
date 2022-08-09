import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Billboard from '../../../../data/typeorm/entities/Billboard';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  BillboardID: string;
  width: string;
  height: string;
  vectorx: number;
  vectory: number;
  vectorz: number;
}

export default class UpdateInventaryService {
  public async update({
    BillboardID,
    width,
    height,
    vectorx,
    vectory,
    vectorz,
  }: IRequest): Promise<Billboard | AppErrors> {
    const repository = getCustomRepository(BillboardRepository);

    const invent = await repository.findById(BillboardID);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-BILLBOARD');

    invent.width = width ? width : invent.width;
    invent.height = height ? height : invent.height;
    invent.vectorx = vectorx ? vectorx : invent.vectorx;
    invent.vectory = vectory ? vectory : invent.vectory;
    invent.vectorz = vectorz ? vectorz : invent.vectorz;

    const result = await repository.save(invent);

    return result;
  }
}
