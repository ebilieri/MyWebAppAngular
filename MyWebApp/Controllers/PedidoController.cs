using Microsoft.AspNetCore.Mvc;
using MyWebApp.Entidades;
using MyWebApp.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
  [Route("api/[Controller]")]
  public class PedidoController : Controller
  {
    private IPedidoRepository _pedidoRepository;

    public PedidoController(IPedidoRepository pedidoRepository)
    {
      _pedidoRepository = pedidoRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        return Ok(_pedidoRepository.ListarPedidos());

      }
      catch (Exception ex)
      {
        return BadRequest("Erro: " + ex.Message);
      }
    }

    [HttpPost]
    public IActionResult Post([FromBody]Pedido pedido)
    {
      try
      {
        if (ModelState.IsValid)
          _pedidoRepository.Salvar(pedido);
        return Created("api/pedido", pedido);

      }
      catch (Exception ex)
      {
        return BadRequest("Erro: " + ex.Message);
      }
    }
  }
}
