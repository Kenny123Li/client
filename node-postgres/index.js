// const express = require('express')
// const app = express()
// const port = 3001

// const model = require('./postgresinteract')

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })
const express = require('express');
const app = express()
const port = 3001
app.use(express.json())

const merchant_model = require('./postgresinteract')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
    merchant_model.getMerchants()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.post('/merchants', (req, res) => {
    merchant_model.createMerchant(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.delete('/merchants/:username', (req, res) => {
    merchant_model.deleteMerchant(req.params.username)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(req.params.username)
      console.log("where does this print")
      console.log(error)
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(<App />, document.getElementById('root'));

