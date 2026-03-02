import { prisma } from "../libs/prisma";
import { Prisma, User } from "@prisma/client";

type CreateUserProps = {
  name: string;
  email: string;
};

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.create({data});

    return user;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("Email already exists");
        return false;
      }
    }

    console.error("Error creating user:", error);
    return false;
  }
}


export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    const result = await prisma.user.createMany({
        data: [
                {name: 'João', email: 'joao@example.com'}, 
                {name: 'João 2', email: 'joao2@example.com'}, 
                {name: 'Maria', email: 'maria@example.com'},
                {name: 'Pedro', email: 'pedro@example.com'} 
        ],
        skipDuplicates: true
    })
}