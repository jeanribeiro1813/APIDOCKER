import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '../../config/cache';

export default class RedisCache {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  public async recover<Generalista>(key: string): Promise<Generalista | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parseData = JSON.parse(data) as Generalista;

    return parseData;
  }

  public async invalidation(key: string): Promise<void> {
    await this.client.del(key);
  }
}
