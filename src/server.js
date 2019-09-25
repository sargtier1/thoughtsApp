require('dotenv').config()
const express = require('express')
const http = require('http')
const next = require('next')
const thoughtsAPI = require('./api')

// detects enivronment
const dev = process.env.NODE_ENV !== 'production'
// extends the next server with our own custom server
const app = next({
  dev,
  dir: './src'
})
const handle = app.getRequestHandler()

// server will be add to the end points defined in API/ this allows our server to handle custome end points, while next handles the rest
app.prepare().then(() => {
  const server = express()

  server.use(thoughtsAPI)

  // handling everything else with Next.js
  server.get('*', handle)

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
  })
})
