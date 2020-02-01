const index = (_, res) => {
  return res.send({
    ok: true,
    message: 'Hello world!'
  });
}

module.exports = {
  index
}
