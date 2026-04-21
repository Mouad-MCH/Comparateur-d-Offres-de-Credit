import React from "react";
import ReactDOM from "react-dom/client"
import OfferDetails from "./OfferDetails.jsx";


const OfferCard = ({ offer, isRecomonded }) => {

  const showDetails = () => {
    const container = document.getElementById("details-container");

    const root = ReactDOM.createRoot(container);

    root.render(<OfferDetails offer={offer} isRecomonded={isRecomonded}/>);
  };

  return (
    <div className="offer-card">

      {
        isRecomonded && (
          <span className="isRecomonded">Recomonded</span>
        )
      }

      <div className="bank-name">
        <i className="fas fa-university"></i>
        <h2>{offer.provider}</h2>
      </div>

      <div className="offer-details">
        <p>LOAN AMOUNT <span>${ offer.amount }</span></p>
        <p>INTERSET RATE <span>{ offer.rate * 100 }%</span></p>
        <p>DURATION <span>{ offer.duration } years</span></p>
      </div>

      <button className="details-btn" onClick={showDetails}>Details</button>
    </div>
  );
};

export default OfferCard;
