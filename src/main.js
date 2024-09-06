import dotenv from 'dotenv'

dotenv.config()
import { listen } from './app'

const PORT = 5000

listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
