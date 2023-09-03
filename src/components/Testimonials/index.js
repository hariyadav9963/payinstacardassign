import {v4 as uuidv4} from 'uuid'
import TestimonialList from '../TestimonialsList'
import './index.css'

const testimonialList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693638546/Ellipse_1_gkzhdx.png',
    name: 'Corey Korsgaard',
    feedback:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693638571/Ellipse_1_1_zik0dy.png',
    name: 'Jakob Aminoff',
    feedback:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1693638623/Ellipse_1_2_exlvn5.png',
    name: 'Carla Press',
    feedback:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
]

const Testimonials = () => (
  <div className="testimonials-container">
    <h1 className="testimonials-heading">Testimonials</h1>
    <ul className="testimonial-list-container">
      {testimonialList.map(eachTestimonial => (
        <TestimonialList
          eachTestimonial={eachTestimonial}
          key={eachTestimonial.id}
        />
      ))}
    </ul>
    <hr className="footer-line" />
  </div>
)

export default Testimonials
