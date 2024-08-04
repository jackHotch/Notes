import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 9090


app.use(express.json())
app.use(cors())

import router from './routes/route'
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
