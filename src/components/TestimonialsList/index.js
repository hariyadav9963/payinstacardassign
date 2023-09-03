import './index.css'

const TestimonialList = props => {
  const {eachTestimonial} = props
  const {name, feedback, imageUrl} = eachTestimonial

  return (
    <li className="testimonial-item">
      <div className="testimonial-profile">
        <img src={imageUrl} alt="testimonial" />
        <h3 className="user-name">{name}</h3>
        <hr className="line" />
      </div>
      <p className="user-feedback">{feedback}</p>
    </li>
  )
}

export default TestimonialList
