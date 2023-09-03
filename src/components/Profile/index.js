import './index.css'

const Profile = () => (
  <div className="profile-container">
    <div className="student-details-container">
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1693562597/Ellipse_46_dgsiwm.png"
        alt="icon"
        className="icon"
      />
      <h2 className="profile-sub-heading">
        Discover the beauty of the tropics
      </h2>
      <h1 className="profile-heading">
        Tropical Destinations <span className="for-student">For Student</span>
      </h1>
      <div className="description-container">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
      </div>
      <button type="button" className="signup-button">
        SIGN UP
      </button>
    </div>
    <div className="profile-image-container">
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1693637812/Group_171_cxbpzn.png"
        alt="profile"
        className="profile-image"
      />
    </div>
  </div>
)

export default Profile
