import { IEntity, IObjectStoreInfo } from "../interfaces";

export class EntityBase {
  //#region Private Properties
  private __id: number = 0;
  private __createdAt: number = 0;
  private __modifiedAt: number = 0;
  private __isDeleted: boolean = false;
  private __isDirty = false;
  private __objectStoreInfo: IObjectStoreInfo | null = null;
  //#endregion

  //#region Getters
  public get id(): number {
    return this.id;
  }

  public get createdAt(): Date {
    return new Date(this.__createdAt);
  }

  public get modifiedAt(): Date {
    return new Date(this.__modifiedAt);
  }

  public get isDeleted() {
    return this.__isDeleted;
  }

  public isDirty() {
    return this.__isDirty;
  }

  public get objectStoreInfo() {
    return this.__objectStoreInfo;
  }
  //#endregion
  
  private modify() {
    this.__modifiedAt = new Date().getTime();
    this.__isDirty = true;
  }

  private delete() {
    this.__isDeleted = true;
    this.modify();
  }

  constructor() {
    
  }
}
