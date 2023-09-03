import {v4 as uuidv4} from 'uuid'
import './index.css'
import StudentsList from '../StudentsList'

const studentsList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693569743/avatar_wgwe6q.png',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693569780/avatar_1_yffh6p.png',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693569800/avatar_2_dmeyu2.png',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
]

console.log(uuidv4())

const TropicalAdventure = () => (
  <div className="tropical-container">
    <div className="sutrack-container">
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1693568635/Subtract_xczfzy.png"
        alt="subtrack"
        className="sub-track"
      />
    </div>
    <div className="tropical-details-container">
      <ul className="student-list-container">
        {studentsList.map(eachStudent => (
          <StudentsList eachStudent={eachStudent} key={eachStudent.id} />
        ))}
      </ul>
      <div className="tropical-adventure-container">
        <img
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1693562597/Ellipse_46_dgsiwm.png"
          alt="icon"
          className="icon-tropical"
        />
        <h1 className="tropical-heading">
          Tropical Adventure
          <span className="tropical-heading-span"> for Students.</span>
        </h1>
        <p className="tropical-description">
          Student Tropical Vacation: Relax and Recharge
        </p>
        <ul className="tropical-list">
          <li>Lorem ipsum dolor sit amet </li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit</li>
          <li> tortor id euismod habitant</li>
          <li> Sed suspendisse id in ultrices</li>
        </ul>
        <button type="button" className="explore-button">
          Explore More
        </button>
      </div>
    </div>
  </div>
)

export default TropicalAdventure
