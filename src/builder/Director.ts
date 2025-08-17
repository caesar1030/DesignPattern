import Builder from "./Builder";

export default class Director {
  private _builder: Builder;
  constructor(builder: Builder) {
    this._builder = builder;
  }

  build() {
    return `${this._builder.buildHead()}${this._builder.buildBody()}${this._builder.buildFoot()}`;
  }
}
