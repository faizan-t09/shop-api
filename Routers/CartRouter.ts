import * as express from 'express'

const cartRouter = express.Router()

cartRouter.get(`/`,(req,res)=>{
  res.send(`Get for /cart says hello!`)
})

cartRouter.post(`/addToCart`,(req,res)=>{
  res.send(`Post for /cart/addToCart for productId ${req.body.productId} says hello!`)
})

export default cartRouter;