import React, {useState} from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const Pay = () => {
  const [Amount_1, setAmount] = useState(0);
  const [P_Number, setPhone] = useState("");

  const stkPush = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/token',{
        //set new values
        amount: Amount_1,
        phone: P_Number      
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
        NotificationManager.info('Payment initiated', 'Info!', 4000);
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error);
        NotificationManager.error("Error!!", 'Error!', 4000);
    })
    }
  return (
    <div className='Pay' onSubmit={stkPush}>
        <form>
          <p>Your Phone Number: </p>
          <input className='input_number' 
              type="tel" 
              placeholder="2541XXX or 2547XXX"
              minLength="12"
              maxLength="12"
              value={P_Number}
              onChange={(e) => setPhone(e.target.value)} 
              required/>
          <br/>
          <p>Amount: </p>
          <input className='input_amount' 
              type="number" 
              placeholder="KShs:" 
              value={Amount_1}
              onChange={(e) => setAmount(e.target.value)} 
              required/>
          <br/>
          <input className='paybtn' type="submit" value="Pay" />
        </form>
    </div>
  )
}

export default Pay