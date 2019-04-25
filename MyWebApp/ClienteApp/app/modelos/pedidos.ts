import { Produto } from "../modelos/produto";
import * as sh from "lodash";

export class Pedido {
  public Id: number;
  public DataPedido: Date;
  public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();

  get total(): number {
    return sh.sum(sh.map(this.ItensPedidos, i => i.Produto.preco * i.Quantidade));
  }

  get contagem(): number {
    return sh.sum(sh.map(this.ItensPedidos, i => i.Quantidade))
  }
}

export class ItemPedido {
  public Id: number;
  public Produto: Produto;
  public Quantidade: number;

  constructor() {
    this.Produto = new Produto();
  }
}
