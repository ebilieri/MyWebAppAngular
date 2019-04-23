using MyWebApp.Entidades;
using System.Collections.Generic;

namespace MyWebApp.Repositories
{
  public interface IPedidoRepository
  {
    List<Pedido> ListarPedidos();
    void Salvar(Pedido pedido);
  }
}
