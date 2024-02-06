import { User } from "@/users/entities/user.entity";
import { Injectable } from "@nestjs/common";

const database: {
  users: User[];
} = {
  users: [],
};

type Collection = keyof typeof database;

@Injectable()
export class DbService {
  findOne(collection: Collection, id: number) {
    return database[collection].find((item) => item.id === id);
  }

  findAll(collection: Collection) {
    return database[collection];
  }

  insertOne(collection: Collection, item: User) {
    database[collection].push(item);
    return item;
  }

  updateOne(collection: Collection, id: number, item: User) {
    const index = database[collection].findIndex((item) => item.id === id);
    database[collection][index] = item;
    return item;
  }

  deleteOne(collection: Collection, id: number) {
    const index = database[collection].findIndex((item) => item.id === id);
    const item = database[collection][index];
    database[collection].splice(index, 1);
    return item;
  }
}
