import './index.css'

const StudentsList = props => {
  const {eachStudent} = props
  const {name, description, imageUrl} = eachStudent
  return (
    <li className="student-card">
      <img className="student-image" src={imageUrl} alt="student" />
      <div className="tropical-student-details">
        <h1 className="student-name">{name}</h1>
        <p className="student-description">{description}</p>
      </div>
    </li>
  )
}

export default StudentsList
