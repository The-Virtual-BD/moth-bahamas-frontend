import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function Metrology() {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center">
            <img
              width={100}
              height={100}
              src="/img/other-websites/meteorology.png"
              alt=""
            />
            <h4 className="mt-3">Department of Meteorology</h4>
          </div>
          <div>
            <h6>Our Vision</h6>
            <p className="mt-4">
              A customer centric, results-driven, transparent regulatory and
              licensing organization, that exceeds expectations while working in
              the best interest of the general public.
            </p>
          </div>
          <div className="mt-4">
            <h6>Our Mission</h6>
            <p className="mt-4">
              The Road Traffic Department is committed to providing a safe,
              sustainable and efficient transportation system through the
              enforcement of laws, responsible management, education and
              outstanding employee performance.
            </p>
          </div>
          <div className="mt-4">
            <h6>Our Core Values:</h6>
            <ul style={{ listStyle: "none" }} className="mt-4">
              <li>Quality Customer Service</li>
              <li>Integrity and Accountability </li>
              <li>
                Respect and consideration for both internal and external
                customers
              </li>
              <li>Employee welfare and Personal development</li>
              <li>Teamwork – the key to success!</li>
            </ul>
          </div>
          <div className="mt-4">
            <h6>We Provide:</h6>
            <ul className="mt-4">
              <li>Learners Permit/Provisional Licence</li>
              <li>Driving Tests (Theory and</li>
              <li>Practical)</li>
              <li>Driver’s Licences</li>
              <li>Vehicle Registration and Inspection</li>
              <li>Public Service Transportation Services</li>
            </ul>
          </div>
          <div className="mt-4">
            <h6>Hours of Operation:</h6>
            <p className="mt-4">
              Monday to Friday
              <br />
              9:00 am to 4:00 pm. <br />
              (These times are adjusted from 8am to 4pm at month end, beginning
              2 business days before the end of the month and 2 working days
              after.) We are closed on weekends and public holidays.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
