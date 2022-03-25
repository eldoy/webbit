const sirloin = require('sirloin')

const app = sirloin({ port: 8900 })

const page = require('./app/index.js')

app.get('*', async function(req, res) {
  res.setHeader('content-type', 'text/html')
  return await page()
})
