import OfferList from "../components/OfferList.jsx";

const OffersPage = ({ offers }) => {
  return (
    <div className="offers-page p-10">
      <div className="header mb-10">
        <h1 className="text-black">Smart <span className="text-blue-500">Offer</span> Page</h1>
        <p className="text-gray-600 mt-2">Compare the best offers from top banks in one place.</p>
      </div>

      <OfferList 
        offers={offers}
      />

    </div>
  )
}

export default OffersPage
