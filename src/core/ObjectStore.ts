import { EntityBase } from "./EntityBase";

export class ObjectStore {
  constructor(private db: IDBDatabase | null, private name: string) {}

  public get(id: number) {}

  public getAll(): EntityBase[] {
    return [];
  }
}
