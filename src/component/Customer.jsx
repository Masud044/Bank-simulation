import { GiPerson } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

const Customer = ({ customer }) => {
  

 

  return (
   
       <li className="flex justify-items-center  px-20 mt-20 ">
        <Fade>  <div className="flex relative mt-3">
          <GiPerson size={60} color="blue">
            {" "}
          </GiPerson>
          <p className="absolute left-0 top-0">{customer.id}</p>
         
        </div>
      

        <div className="bg-amber-400 p-4 font-medium space-y-4 rounded-lg opacity-80">
          Arrival Time: {customer.arrivalTime}s <br />
          Service Time: {customer.serviceTime}s <br />
          waitingTime:{customer.waitingTime <= 0 ? 0 : customer.waitingTime}s
        </div>
        </Fade>
      </li>
      
  );
};

export default Customer;
