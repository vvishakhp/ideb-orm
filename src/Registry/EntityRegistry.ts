export class EntityRegistry {
  private storeTypes: Set<Function> = new Set();
  private constructor() {}

  public static Instence = new EntityRegistry();

  public RegisterStore(type: Function) {
    this.storeTypes.add(type);
  }
}
