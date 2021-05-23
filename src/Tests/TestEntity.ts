import { Column } from "../attributes/Column";
import { Entity } from "../attributes/Entity";
import { EntityBase } from "../core/EntityBase";
import { DBIndex, DBTypes } from "../enums";

@Entity({ name: "TestObjects", version: 1, dbName: "TestDB" })
export class TestEntity extends EntityBase {
  constructor() {
    super();
  }

  @Column({ name: "column1", indexing: DBIndex.none, dataType: DBTypes.string })
  column1: string = "";

  @Column({ name: "column2", indexing: DBIndex.none, dataType: DBTypes.string })
  column2: number = 0;
}
