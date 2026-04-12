const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const dados = event.body ? JSON.parse(event.body) : {};
    const valor = dados.valor ? Number(dados.valor) : 0;

    if (!valor || valor <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ mensagem: "Valor inválido" })
      };
    }

    const pagamento = await stripe.paymentIntents.create({
      amount: Math.round(valor * 100),
      currency: 'brl',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        mensagem: "Pagamento criado com sucesso",
        id: pagamento.id
      })
    };

  } catch (erro) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        mensagem: "Erro ao processar pagamento",
        erro: erro.message
      })
    };
  }
};