import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";

export const UserRepository = AppDataSource.getRepository(User);
