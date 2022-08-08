<<<<<<< HEAD
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

export default class CreateService {
  public async criar({
    BillboardID,
    width,
    height,
    vectorx,
    vectory,
    vectorz,
  }: IRequest): Promise<Billboard | undefined> {
    const repository = getCustomRepository(BillboardRepository);

    const inventary = await repository.findById(BillboardID);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      BillboardID,
      width,
      height,
      vectorx,
      vectory,
      vectorz,
    });

    await redisCache.invalidation('api-block-BILLBOARD');

    await repository.save(result);

    return result;
  }
}
=======
import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Billboard from '../../../../data/typeorm/entities/Billboard';

interface IRequest {
  BillboardID: string;
  width: string;
  height: string;
  vectorx: number;
  vectory: number;
  vectorz: number;
}

export default class CreateService {
  public async criar({
    BillboardID,
    width,
    height,
    vectorx,
    vectory,
    vectorz,
  }: IRequest): Promise<Billboard | undefined> {
    const repository = getCustomRepository(BillboardRepository);

    const inventary = await repository.findById(BillboardID);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const result = repository.create({
      BillboardID,
      width,
      height,
      vectorx,
      vectory,
      vectorz,
    });

    await repository.save(result);

    return result;
  }
}
>>>>>>> develop
