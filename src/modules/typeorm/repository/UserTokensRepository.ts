import { Repository, EntityRepository } from "typeorm";
import UsersToken from '../entities/UsersToken'
import { UsersTokensInterface } from "../protocols/UserTokensInterface";

@EntityRepository(UsersToken)
export default class UsersRepository  extends Repository <UsersToken>  implements UsersTokensInterface {

  public async findId(id:string): Promise<UsersToken | undefined>{

    const result = this.findOne({where:{id}})

    return result
  }

  public async findByToken(token:string): Promise<UsersToken | undefined>{

    const result = this.findOne({where:{token}})

    return result
  }

  public async generate(user_id:string): Promise<UsersToken | undefined>{

    const result = this.create({user_id})

    await this.save(result)

    return result
  }

}
