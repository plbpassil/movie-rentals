import { ICreateUsersDTO } from "../dto/ICreateUsersDTO"
import { User } from "@prisma/client"


interface IUsersRepository {
    create({ nome, email, senha }: ICreateUsersDTO): Promise<User>;
}

export { IUsersRepository }