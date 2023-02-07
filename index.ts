import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
const cors = require('cors');

import productRouter from './Routers/ProductRouter';
import cartRouter from './Routers/CartRouter';

const portNo = 4000;

const app = express.default();
app.use(express.json())
app.use(cors())

app.use('/product', productRouter);
app.use('/cart', cartRouter);

const connectToMongoDb = async () => {
  await mongoose.connect('mongodb://0.0.0.0:27017/shop-api',()=>{
    console.log(`Connected to MongoDB sucessfully.`)
  })
}

connectToMongoDb().catch((error)=>{
  console.log(`Failed to connect to MongoDb`)
})

app.listen(portNo, () => {
  console.log('App up and running.\nListening to port : ' + portNo);
});
