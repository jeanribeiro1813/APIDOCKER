import { AppErrors } from '../../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../../config/authInventory';
import Inventary from '../../../../data/typeorm/entities/Inventary';

interface IRequest {
  inventoryID: string;
  password: string;
}

interface IResponseDTO {
  inventory: Inventary;
  token: string;
}

export default class CreateSession {
  public async session({
    inventoryID,
    password,
  }: IRequest): Promise<IResponseDTO> {
    const repository = getCustomRepository(InventaryRepository);

    const inventory = await repository.findById(inventoryID);

    if (!inventory) {
      throw new AppErrors('Incorrect ID/password', 404);
    }

    // const password_confirmation = compare(UserPassword, user.UserPassword);

    if (password !== inventory.password) {
      throw new AppErrors('Incorrect ID/password', 404);
    }

    const token = sign(
      {
        id: inventory.inventoryID,
      },
      authConfig.jwt.secret,
      {
        subject: inventory.inventoryID,
        expiresIn: authConfig.jwt.expireIn,
      },
    );

    return { inventory, token };
  }
}
