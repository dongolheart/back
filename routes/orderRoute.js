const express = require('express')
const router = express.Router()
const {placeOrder, viewOrders, orderDetails,updateOrder, deleteOrder} = require('../controller/orderController')

router.post('/placeorder',placeOrder)
router.get('/orders',viewOrders)
router.get('/order/details/:id',orderDetails)
router.put('/order/update/:id',updateOrder)
router.delete('/order/delete/:id',deleteOrder)

module.exports = router