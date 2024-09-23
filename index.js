const express = require('express')
const app = express()

const db = [
  {
    id: '123',
    contract: '001',
    limits: {
      count: '100',
      plan: 'test',
      rateLimit: '10000'
    }
  },
  {
    id: '234',
    contract: '002',
    limits: {
      count: '74',
      plan: 'test',
      rateLimit: '10000'
    }
  },
  {
    id: '345',
    contract: '003',
    limits: {
      count: '100',
      plan: 'test',
      rateLimit: '10000'
    }
  },
  {
    id: '456',
    contract: '004',
    limits: {
      count: '3',
      plan: 'Plata',
      rateLimit: '10000'
    }
  },
  {
    id: '567',
    contract: '005',
    limits: {
      count: '546',
      plan: 'Oro',
      rateLimit: '10000'
    }
  },
  {
    id: '678',
    contract: '006',
    limits: {
      count: '134',
      plan: 'Platinum',
      rateLimit: '10000'
    }
  }
]
app.get('/msg/:contract/:id', (req, res, next) => {
  if (db.some((elem) => elem.contract === req.params.contract) === false) {
    console.log('Contrato: ' + req.params.contract)
    res.status(404)
    return res.json({ message: 'Numero de contrato no encontrado' })
  }
  console.log('Contrato: ' + req.params.id)
  if (db.some((elem) => elem.id === req.params.id) === false) {
    console.log('ID: ' + req.params.id)
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