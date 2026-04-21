import React from 'react'
import ReactDOM from 'react-dom/client';
import { monthlyGrow } from '../utils/monthlyGrow.js';

const OfferDetails = ({ offer, isRecomonded }) => {

    const month = offer.duration * 12;
    const monthlyRate = offer.rate / 12;
    const totalPaid = offer.amount * Math.pow((1 + offer.rate) , (offer.duration));

    const mensualite = totalPaid / month;

    const clear = () => {
        const container = document.getElementById("details-container");
        container.innerHTML = ""
    }


  return (
    <>
    <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-40"></div>
    <div className="offer_details">
        {
            isRecomonded && (
                <span className="isRecomonded right-2 left-auto">Recomonded</span>
            )
        }
      <div className="details_info">
        <p className='amount font-bold text-2xl'>Amount : <span>${offer.amount}</span></p>
        <div>
            <p>Rate: <span>{offer.rate}</span></p>
            <p>Duration: <span>{offer.duration}</span></p>
            <p>Mensualite: <span>${mensualite.toFixed(2)}</span></p>
            <p>Total paid: <span>${totalPaid.toFixed(2)}</span></p>
        </div>
        
        <table class="table-auto w-full mb-5">
          <thead>
            <tr className='text-center border-1 bg-primary text-white'>
              <th>year</th>
              <th>Interets</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="text-center bg-neutral">
            {
                monthlyGrow(offer.duration, offer.amount, offer.rate).map((e) => (
                   <tr>
                       <td>{ e.year }</td>
                       <td>{ e.interets }</td>
                       <td>{ e.total.toFixed(2) }</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
        
                <button
         className='py-2 px-5 outline-0 font-medium rounded-lg bg-red-600 cursor-pointer transition-all duration-300 hover:bg-red-400 text-white border-none'
         onClick={clear}
        >Close</button>
      </div>
    </div>
    </>
  )
}

export default OfferDetails
