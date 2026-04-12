exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const pedido = {
    id: Date.now(),
    produto: data.produto,
    valor: data.valor
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Pedido processado",
      pedido: pedido
    })
  };
};