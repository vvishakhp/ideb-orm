import { DBIndex, DBTypes } from "./enums";

export interface INamed {
  name: string;
}

export interface IVersioned {
  version: number;
}

export interface IDbInfo extends INamed, IVersioned {
  objectStores: IObjectStoreInfo[];
}

export interface IObjectStoreInfo extends INamed, IVersioned {
  columns: IColumnInfo[];
}

export interface IColumnInfo extends INamed {
  type: DBTypes;
  index: DBIndex;
}

export interface IEntityAttributeOptions extends INamed, IVersioned {
  dbName: string;
}

export interface IDatabaseAttributeOptions extends INamed {}

export interface IColumnAttributeOptions extends INamed {
  indexing?: DBIndex;
  dataType: DBTypes;
}

export interface IEntity {
  id: number;
  createdAt: number;
  modifiedAt: number;
  isDeleted: boolean;
}
