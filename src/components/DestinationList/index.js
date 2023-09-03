import {BsThreeDots} from 'react-icons/bs'
import './index.css'

const DestinationList = props => {
  const {eachDestination} = props
  const {imageUrl, university, address} = eachDestination

  return (
    <li className="destination-card">
      <img className="destination-image" src={imageUrl} alt="destination" />
      <div className="destination-details">
        <h4 className="university-name">{university}</h4>
        <div className="address-container">
          <p className="destination-address">{address}</p>
          <BsThreeDots className="three-dots" />
        </div>
      </div>
    </li>
  )
}

export default DestinationList
