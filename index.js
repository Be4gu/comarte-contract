const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

const db = [
  {
    id: '123',
    contract: '001'
  },
  {
    id: '234',
    contract: '002'
  },
  {
    id: '345',
    contract: '003'
  },
  {
    id: '456',
    contract: '004'
  },
  {
    id: '567',
    contract: '005'
  },
  {
    id: '678',
    contract: '006'
  }
]
app.get('/msg/:contract/:id', (req, res, next) => {
  if (db.some((elem) => elem.contract === req.params.contract) === false) {
    res.status(404)
    return res.json({ message: 'Numero de contrato no encontrado' })
  }
  if (db.some((elem) => elem.id === req.params.id) === false) {
    res.status(404)
    return res.json({ message: 'ID no encontrado' })
  }
  const user = db.find((elem) => elem.contract === req.params.contract)
  if (user.contract !== req.params.contract || user.id !== req.params.id) {
    res.status(404)
    return res.json({ message: 'Credentials not match' })
  }
  res.send('Todo encontrado')
})
