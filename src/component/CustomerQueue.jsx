// CustomerQueue.js
import  { useState, useEffect } from 'react';
import Customer from './Customer';
import Bank from './Bank';

const CustomerQueue = () => {
  const [customers, setCustomers] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalService, setTotalService] = useState(0)
  const [animationEffect, setAnimationEffect]= useState(null);

  
  const maxArrivalTime = 7; // Set the maximum arrival time

  useEffect(() => {
    
    const timer = setInterval(() => {
      
        
          addCustomerToQueue();
       
     
    }, 3000);

    return () => clearInterval(timer);
  }, [customers]);

  const generateRandomArrivalTime = () => {
   
    return Math.floor(Math.random() * (maxArrivalTime + 1)) + 1;
  };

  

  const addCustomerToQueue = () => {

    const newCustomer = {
      id: customers.length + 1,
      arrivalTime: generateRandomArrivalTime() + (customers.length > 0 && customers[customers.length - 1].arrivalTime),
       // Random arrival time within the limit
      serviceTime: Math.floor(Math.random() * (10 - 5 + 1) + 5), 
    };

   
    
// newCustomer.arrivalTime + newCustomer.serviceTime
    setTotalService(prev => prev + ( customers.length == 0 ? newCustomer.arrivalTime + newCustomer.serviceTime :  newCustomer.serviceTime));
let waitingTime = 0;
    if(customers.length > 0){
      waitingTime = totalService - newCustomer.arrivalTime;
    }




   let modifiedCustomer = {
      ...newCustomer, waitingTime
    }

   
     setAnimationEffect(newCustomer)

    setCustomers([...customers, modifiedCustomer]);
  };

  return (
    <div className='flex '>
     
      <ul className='w-2/5'>
        {customers.map((customer,index) => (
          <Customer
            key={customer.id}
            customer={customer}
            currentTime={currentTime}
          previousCustomer={customers[index - 1]}
          nextCustomer={customers[index + 1]}
            
           
          />
        ))}
      </ul>
      <div className=''>
        <Bank customers={customers} animationEffect={animationEffect}></Bank>
      </div>
      
    </div>
  );
};

export default CustomerQueue;
