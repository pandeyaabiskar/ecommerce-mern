const welcomeUser = (req, res) => {
    res.send(`Welcome ${req.body.name}`)
  }

  module.exports = welcomeUser