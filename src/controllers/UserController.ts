import { Request, Response } from "express";
// import { CreateUserService } from "../services/CreateUserService";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
    //   const service = new CreateUserService();
    //   const user = await service.execute({ name, email });
      const user = UserRepository.create({ name, email });
      await UserRepository.save(user);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
