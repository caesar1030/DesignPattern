import Builder from "./Builder";
import type Data from "./Data";

export default class JSONBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }

  buildHead(): string {
    return "{";
  }

  buildBody(): string {
    return `"name": "${this._data.name}", "age": ${this._data.age}`;
  }

  buildFoot(): string {
    return "}";
  }
}
