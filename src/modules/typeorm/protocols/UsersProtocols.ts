import User from '../entities/Users';

export interface UserProtocols {
  findById(id: string): Promise<User | undefined>;
  findByName(name: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[] | undefined>;
}
