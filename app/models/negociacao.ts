export class Negociacao {
  constructor(
    public _data: Date,
    private readonly quantidade: number,
    private readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data() {
    return new Date(this._data.getTime())
  }
}
