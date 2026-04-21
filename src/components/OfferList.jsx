import OfferCard from "./OfferCard.jsx";

const OfferList = ({ offers }) => {
  const MIN_RATE = Math.min(...offers.map((offer) => offer.rate));
  return (
    <div className="offer-list">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isRecomonded={offer.rate === MIN_RATE}
        />
      ))}
    </div>
  );
};

export default OfferList;
