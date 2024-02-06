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
  private _userId = database.users.length;

  findOne(collection: Collection, id: number) {
    return database[collection].find((item) => item.id === id);
  }

  findAll(collection: Collection) {
    return database[collection];
  }

  insertOne(collection: Collection, item: Omit<User, "id">): User {
    const user = { id: this._userId++, ...item };
    database[collection].push(user);
    return user;
  }

  updateOne(collection: Collection, id: number, item: Omit<User, "id">) {
    const index = database[collection].findIndex((item) => item.id === id);
    database[collection][index] = { id, ...item };
    return database[collection][index];
  }

  deleteOne(collection: Collection, id: number) {
    const index = database[collection].findIndex((item) => item.id === id);
    const item = database[collection][index];
    database[collection].splice(index, 1);
    return item;
  }
}
