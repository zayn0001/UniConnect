import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Razorpay from 'razorpay'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors({origin: '*',credentials: true}))
app.options('*', cors())
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
const router = express.Router()
const payment = async(req, res) => {
    try {
        console.log('got')
        var instance = new Razorpay({ key_id: "rzp_test_7no5vvd5xFAi9x", key_secret: "vcAt4BGAgUVLrpBHcU41oKmB" })
        let order = await instance.orders.create({
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: "receipt#1"
        })
        res.send({message: 'Successfully paid', success: true, order: order, amount: req.body.amount})
    } catch (error) {
      console.log('Error: ', error)
    }
}
const display = async(req, res) => {
    res.send('okay')
}
router.get('/', display)
router.post('/payment', payment)
app.use('/', router)

app.post('/payment', payment)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))