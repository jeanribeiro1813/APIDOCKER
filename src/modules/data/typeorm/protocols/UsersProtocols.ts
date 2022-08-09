import User from '../entities/Users';

export interface UserProtocols {
  findById(UserID: string): Promise<User | undefined>;
  findByEmail(UserEmail: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
}
