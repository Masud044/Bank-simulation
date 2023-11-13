import { Fade } from 'react-awesome-reveal';
import img from '../assets/bank.jpg'
import { GiPerson } from "react-icons/gi";

const Bank = ({ animationEffect}) => {
   
    return (
        <div className='relative mt-16 shadow-2xl shadow-gray-500'>
            <img className='' src={img} alt="" height={250} width={400} />

            <Fade key={animationEffect?.id} delay={300}  direction='down' className={`${animationEffect ? "" : "hidden"}`}> 
            <div className="flex ml-20 -mt-60 absolute  ">
           
          <GiPerson size={250} color="orange">
            {" "}
          </GiPerson>
         
         <p className='text-black -ml-[176px] pb-2 px-4  rounded-sm h-8 w-4 mt-4 bg-sky-300'>{animationEffect?.id}</p>
         
        </div> </Fade>
            
           

        </div>
    );
};

export default Bank;