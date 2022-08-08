import Friends from '../entities/Friends';

export interface FriendsProtocols {
  findById(Id: string): Promise<Friends | undefined>;
  findByUser(IdUser: string): Promise<Friends | undefined>;
  findByEmail(EmailUser: string): Promise<Friends | undefined>;
  findAll(): Promise<Friends[]>;
}
