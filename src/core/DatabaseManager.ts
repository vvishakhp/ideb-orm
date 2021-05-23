import { ObjectStore } from "./ObjectStore";

export class databaseManager {
  private constructor() {}

  public static async open() {
    return new databaseManager();
  }

  public get(type: Function): ObjectStore {
    return new ObjectStore(null, type.name);
  }
}
