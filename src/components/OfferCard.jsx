import React from "react";

const OfferCard = ({ offer, isRecomonded }) => {
  return (
    <div className="offer-card">

      {
        isRecomonded && (
          <span className="isRecomonded">Recomonded</span>
        )
      }

      <div className="bank-name">
        <i className="fas fa-university"></i>
        <h2>{offer.bankName}</h2>
      </div>

      <div className="offer-details">
        <p>Amount <span>${ offer.amount }</span></p>
        <p>Rate <span>{ offer.rate * 100 }%</span></p>
        <p>Duration <span>{ offer.duration } years</span></p>
      </div>

      <button className="details-btn">Details</button>
    </div>
  );
};

export default OfferCard;
