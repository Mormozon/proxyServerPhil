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
      .get('http://localhost:3004/api/answer', {
        params: req.query
      })
      .then(result => {
        console.log(result.data);
        res.status(200).send(result.data);
      })
      .catch(err => console.error(err));
  },
  getProduct: (req, res) => {
    axios
      .get('http://ec2-54-193-62-209.us-west-1.compute.amazonaws.com:3001/api/product')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  getRelated: (req, res) => {
    axios
      .get('ec2-54-183-111-248.us-west-1.compute.amazonaws.com:1337/api/related')
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadCustomerQuestions: (req, res) => {
    axios
      .get('https://s3-us-west-1.amazonaws.com/mormont-phil/bundle.js', {
        'async': true,
        'crossDomain': true,
        'headers': {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'no-cache',
        }
      })
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadRelatedProducts: (req, res) => {
    axios
      .get('https://s3-us-west-1.amazonaws.com/relatedproducts/relatedProducts/bundle.js', {
        responseType: 'text',
        'async': true,
        'crossDomain': true,
        'headers': {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'no-cache'
        }
      })
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  },
  loadProductDescription: (req, res) => {
    axios
      .get('https://s3-us-west-1.amazonaws.com/mormont/client/dist/bundle.js', {
        'async': true,
        'crossDomain': true,
        'headers': {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'no-cache'
        }
      })
      .then(result => res.status(200).send(result.data))
      .catch(err => console.error(err));
  }
}

module.exports = controller;