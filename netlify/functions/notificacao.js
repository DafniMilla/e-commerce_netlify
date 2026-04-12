exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Notificação enviada ao usuário"
    })
  };
};