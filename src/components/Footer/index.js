import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="student-special-discount">
      <>
        <h1 className="footer-heading">
          Student Special: Discounted rates on tropical getaways!
        </h1>
        <p className="footer-description">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </>
    </div>
    <hr className="footer-line" />
    <div className="footer">
      <ul className="footer-list-left-container">
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Sales and Refunds</li>
        <li>Legal</li>
      </ul>
      <ul className="footer-list-right-container">
        <li>About</li>
        <li>Schedules</li>
        <li>Pricing</li>
        <li>Membership</li>
        <li>Joins</li>
        <li className="break">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="19"
            viewBox="0 0 2 19"
            fill="none"
          >
            <path d="M1 0V19" stroke="#2D2E2E" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
