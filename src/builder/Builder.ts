import Data from "./Data";

export default abstract class Builder {
  protected _data: Data;
  constructor(data: Data) {
    this._data = data;
  }

  abstract buildHead(): void;
  abstract buildBody(): void;
  abstract buildFoot(): void;
}
