import './index.css'

const StudentDiscount = () => (
  <div className="student-discount-container">
    <div className="student-discount-details-container">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1693562597/Ellipse_46_dgsiwm.png"
          alt="ellipse"
        />
        <img
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1693646794/Subtract_osqvgy.png"
          alt="subtract"
          className="subtract"
        />
      </div>
      <h5 className="offer-percentage">Get 20% off for student</h5>
      <h2 className="student-discount-heading">
        Student discounts available.
        <span className="student-discount-span">
          {' '}
          Get ready for some fun in the sun!
        </span>
      </h2>
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
    <img
      src="https://res.cloudinary.com/dky69roxl/image/upload/v1693645088/Mask_group_aulspk.png"
      alt="student"
      className="student-discount-image"
    />
  </div>
)

export default StudentDiscount
