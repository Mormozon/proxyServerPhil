const axios = require('axios');

const controller = {
  getQuestion: (req, res) => {
    axios
      .get('http://localhost:3004/api/question', {
        params: req.query
      })
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  getAnswer: (req, res) => {
    axios
      .get('http://localhost:3004/api/question', {
        params: req.query
      })
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  getProduct: (req, res) => {
    axios
      .get('http://localhost:3001/api/product')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  getRelated: (req, res) => {
    axios
      .get('http://localhost:1337/api/related')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadCustomerQuestions: (req, res) => {
    axios
      .get('http://localhost:3004/bundle.js')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadRelatedProducts: (req, res) => {
    axios
      .get('http://localhost:1337/client/bundle.js')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadProductDescription: (req, res) => {
    axios
      .get('http://localhost:3001/bundle.js')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  }
}

module.exports = controller;