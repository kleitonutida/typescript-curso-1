export class Negociacao {
  constructor(
    private readonly _data: Date,
    private readonly _quantidade: number,
    private readonly _valor: number
  ) {}

  get volume(): number {
    return this._quantidade * this.valor;
  }
}
