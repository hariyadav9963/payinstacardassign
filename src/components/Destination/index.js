import {v4 as uuidv4} from 'uuid'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import DestinationList from '../DestinationList'
import './index.css'

const destinationDetailsList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693573314/card-image_olgoir.png',
    university: 'Harvard University',
    address: 'Cambridge, Massachusetts, UK',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693573508/card-image_1_tohewp.png',
    university: 'Oxford University',
    address: 'Oxford, England',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693573543/card-image_2_st6msk.png',
    university: 'Stanford University',
    address: 'Stanford, California',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693573592/card-image_3_lblfpu.png',
    university: 'Nanyang Technological University',
    address: 'Nanyang Ave, Singapore',
  },
]

const Destination = () => (
  <div className="destination-container">
    <h1 className="destination-heading">Our Destinations</h1>
    <ul className="destination-list-container">
      {destinationDetailsList.map(eachDestination => (
        <DestinationList
          eachDestination={eachDestination}
          key={eachDestination.id}
        />
      ))}
    </ul>
    <div className="page-container">
      <div className="pages-count-container">
        <button type="button" className="left-arrow-button">
          <BsArrowLeft className="left-arrow-icon" />
        </button>
        <span className="current-page">2</span>
        <span className="total-pages">/140</span>
        <button type="button" className="right-arrow-button">
          <BsArrowRight className="right-arrow-icon" />
        </button>
      </div>
    </div>
  </div>
)

export default Destination
