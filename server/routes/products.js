const express = require('express')
const router = express.Router()
const {
  ProductList
} = require('./products.mock')
const {
  ITEMS_PER_PAGE
} = require('../constants/index')

router.get('/list', function (req, res) {
  // get params: page: number

  setTimeout(() => {
    const page = parseInt(req.query.page);
    const offset = page * ITEMS_PER_PAGE

    const items = ProductList.slice(offset, offset + ITEMS_PER_PAGE)

    const response = {
      items,
      page,
      per_page: ITEMS_PER_PAGE,
      total: ProductList.length
    }

    res.send(response);
  }, 2000)

})

router.post('/buy', function (req, res) {
  // post params: productList: Object, paymentInfo: Object

  setTimeout(() => {
    const response = {
      success: !(req.body.products || []).includes(ProductList[0].id)
    }

    res.send(response);
  }, 2000)

})

module.exports = router
