const express = require('express')
const app = express()

const db = [
  {
    id: '123',
    contract: '001',
    plan: 'Silver',
    apis: ['consolidatedFinancialConnections'],
    limits: '5000'
  },
  {
    id: '234',
    contract: '002',
    plan: 'Platinum',
    apis: [],
    limits: '100000'
  },
  {
    clientid: '345',
    contract: '003',
    plan: 'Platinum',
    apis: [],
    limits: '100000'
  },
  {
    id: '456',
    contract: '004',
    plan: 'Bronze',
    apis: ['Tenders'],
    limits: '1000'
  },
  {
    id: '567',
    contract: '005',
    plan: 'Bronze',
    apis: ['Tenders', 'Investigated'],
    limits: '1000'
  },
  {
    id: '678',
    contract: '006',
    plan: 'Platino',
    apis: [],
    limits: '100000'
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
    return res.json({ message: 'Credentials not matchs' })
  }
  res.status(200)
  res.json(user)
})
