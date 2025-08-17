import Builder from "./Builder";
import type Data from "./Data";

export default class PlainTextBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }

  buildHead(): string {
    return "";
  }

  buildBody(): string {
    return `${this._data.name} is ${this._data.age} years old.`;
  }

  buildFoot(): string {
    return "";
  }
}
