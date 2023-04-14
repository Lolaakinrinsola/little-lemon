import React,{useState} from 'react'
import './reservation.scss'
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const BookingForm = ({name, date,enter,submitt}) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

    console.log(submit)

    const handleSubmit=()=>{
        setSubmit(!submit)
        submitt(submit)  
        setTimeout(() => {
            navigate("/reservations/customer-details")
        }, 1000);     
    }
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    enter(event.target.value)
};

  return (
    <div className=' grid justify-center items-center'>
        {submit?
        <div className='loading'>
            <div>
            <p>We are redirecting you to the customer details page</p>
            </div>
            <div>
            <ReactLoading type="spin" color="#EE9972"
            height={100} width={50} />

            </div>
        </div>  
        :
      <form className='p-[2em] md:px-[5em] mx-[2em] md:mx-[7em] max-w-[40em]  shadow-3xl'>
                <h1 className='font-mar font-bold text-[2em] text-primary-10'>RESERVE A TABLE</h1>
                <label htmlFor="date" className='flex items-center gap-[.5em] font-bold'>DATE: <input type="date" name="date" id="date" value={selectedDate} onChange={handleDateChange} className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] max-w-[15em]'/>
                </label>
                <label className='flex font-bold items-center gap-[.5em]' htmlFor="time">TIME: <select name="time" id="" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] max-w-[15em]' >
                    {name.map((times)=>{
                        return <option value="">{times}</option>
                    })}
                    </select></label>
                    <label for="guests"className='flex items-center gap-[.5em] font-bold'>Number of guests
                        <input type="number" placeholder="1" min="1" max="10" id="guests" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] py-[.3em] max-w-[15em]'/>
                    </label>
                <select name="ocassion" id="" className='border-[#f5f5f5] shadow-xl w-full bg-[#f5f5f5] rounded-full px-[1em] font-bold py-[.3em] max-w-[15em]'placeholder='OCASSION'>
                    <option value="">Anniversary</option>
                    <option value="">Birthday</option>
                    <option value="">Engagement</option>
                </select>
            <button onClick={handleSubmit} className="hover:text-highlight-10 hover:bg-highlight-20 px-[1em] py-[.5em] rounded-[16px] bg-primary-20 text-highlight-20 mt-[2em]">BOOK</button>
      </form>        
        }
    </div>
  )
}

export default BookingForm
