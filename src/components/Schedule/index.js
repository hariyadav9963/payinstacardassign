import './index.css'

const Schedule = () => (
  <div className="schedule-container">
    <div className="schedule-image-container">
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1693647010/Group_167_e2fbv2.png"
        alt="schedule"
        className="schedule-image"
      />
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1693646794/Subtract_osqvgy.png"
        alt="subtract"
        className="subtract"
      />
    </div>
    <form className="form-container">
      <div className="form-header">
        <h1 className="form-heading">Book Now</h1>
        <p className="form-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="form-body">
        <div className="city-input-container">
          <label htmlFor="city" className="label">
            CITY
          </label>
          <br />
          <input
            type="text"
            placeholder="Placeholder"
            className="city-input"
            id="city"
          />
        </div>
        <div className="arrival-departure-container">
          <div className="arrival-input-container">
            <label htmlFor="arrival" className="label">
              ARRIVAL
            </label>
            <br />
            <input
              type="text"
              placeholder="10 October"
              className="arrival-input"
              id="arrival"
            />
          </div>
          <div className="departure-input-container">
            <label htmlFor="departure" className="label">
              DEPARTURE
            </label>
            <br />
            <input
              type="text"
              placeholder="11 October"
              className="departure-input"
              id="departure"
            />
          </div>
        </div>
        <div className="room-container">
          <div className="star-input-container">
            <label htmlFor="star" className="label">
              STAR
            </label>
            <div className="plus-minus-button-container">
              <button type="button" className="minus-button">
                -
              </button>
              <input className="no-of-rooms-input" placeholder="4" />
              <button type="button" className="plus-button">
                +
              </button>
            </div>
          </div>
          <div className="room-input-container">
            <label htmlFor="room" className="label">
              ROOM
            </label>
            <div className="plus-minus-button-container">
              <button type="button" className="minus-button">
                -
              </button>
              <input className="no-of-rooms-input" placeholder="1" />
              <button type="button" className="plus-button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button type="button" className="book-now-button">
          BOOK NOW
        </button>
      </div>
    </form>
  </div>
)

export default Schedule
