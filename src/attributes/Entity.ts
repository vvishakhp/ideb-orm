import type { EntityBase } from "../core/EntityBase";
import { IEntityAttributeOptions } from "../interfaces";
import { isValidIdentifier, isValidVersion } from "../utils/NameUtils";


export function Entity(options: IEntityAttributeOptions): ClassDecorator {
  if (options == null || options == undefined)
    throw new Error("Entity Options cannot be null");

  if (!isValidIdentifier(options))
    throw new Error(
      "Entity name should be a valid JS identifier. Given name was " +
        options.name
    );

  if (!isValidVersion(options)) {
    throw new Error(
      `Entity Version should be a number greater than 0. Given version number ${options.version} for Entity ${options.name} is invalid.`
    );
  }

  return function (ctor) {
      
  };
}
