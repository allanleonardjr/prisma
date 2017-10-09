module.exports = event => {
  // access the environment variable called `NAME` defined `graphcool.yml`
  const name = event.data.name || process.env['NAME']
  return {
    data: {
      message: `Hello ${name || 'World'}`
    }
  }
}