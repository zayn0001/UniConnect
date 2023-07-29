import React from 'react'
import { getDatabase, set, get, update, ref } from "firebase/database"
import { useNavigate } from 'react-router-dom'
import useRazorpay from 'react-razorpay'
import axios from 'axios'

const FundCard = ({fund}) => {
  const Razorpay = useRazorpay();
  const [amount, setAmount] = React.useState(0)
  const navigate = useNavigate()
  const successHandler = (amount) => {
    const db = getDatabase()
    const fundRef = ref(db, 'funds/' + fund.username);
    get(fundRef).then((snapshot) => {
      if (snapshot.exists()) {
        const fundData = snapshot.val();
        let currentPool = fundData.pool;
        
        update(fundRef, {
          pool: parseInt(currentPool)+parseInt(amount)
        });
      }
    })
    window.location.reload()
  }
  const handleFund = async(e) => {
    e.preventDefault()
    const orderReq = await axios.post(`http://localhost:5000/payment`, {amount});

    if(orderReq.data.success){
      const orderid = orderReq.data.order.id
      console.log(orderid)
        const options = {
          key: "rzp_test_7no5vvd5xFAi9x",
          amount: amount * 100, 
          currency: "INR",
          order_id: orderid,
          handler: () => successHandler(amount)
        };
      
        const rzp1 = new window.Razorpay(options);
      
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      
        rzp1.open();
      }
  }
  return (
    <div className='w-[100%] mt-10'>
        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#EAEAEA] dark:bg-[#EAEAEA] dark:hover:bg-[#CECECE]">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{fund.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{fund.desc}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">Goal: ${fund.amount}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">Pool: ${fund.pool}</p>
        <div className='flex'>
            <input onChange={(e) => setAmount(e.target.value)} type="number" name="" placeholder='Amount to fund...' className='px-3' id="" />
            <button onClick={handleFund} className='bg-green-500 text-white px-4 py-2 rounded'>Fund</button>
        </div>
    </div>
</a>

    </div>
  )
}

export default FundCard