using Microsoft.EntityFrameworkCore;
using MyWebApp.Context;
using MyWebApp.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Repositories
{
  public class PedidoRepository : IPedidoRepository
  {
    private MyWebAppContext _context;
    private IProdutoRepository _produtoRepository;

    public PedidoRepository(MyWebAppContext context, IProdutoRepository produtoRepository)
    {
      _context = context;
      _produtoRepository = produtoRepository;
    }

    public List<Pedido> ListarPedidos()
    {
      return _context.Pedidos.Include(p => p.ItensPedidos).ToList();
    }

    public void Salvar(Pedido pedido)
    {
      foreach (var item in pedido.ItensPedidos)
        item.Produto = _produtoRepository.ObterProdutoPorId(item.Produto.Id);

      _context.Pedidos.Add(pedido);
      _context.SaveChanges();
    }
  }
}
