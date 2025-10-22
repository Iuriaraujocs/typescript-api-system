import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = UserRepository.create({ name, email });
      await UserRepository.save(user);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await UserRepository.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }
}
