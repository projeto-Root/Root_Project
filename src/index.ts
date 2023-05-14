import express from 'express'
import { AppDataSource } from './data-source'
import { routes } from './routes/index';
const cors = require('cors')

const PORT = process.env.PORT || 3000

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.use(cors());

  routes(app)

  const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
  })


  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Servidor encerrado')
      process.exit(0)
    })
  })
})
