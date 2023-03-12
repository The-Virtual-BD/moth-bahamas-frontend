import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function PostBahamas() {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center">
            <img
              width={100}
              height={100}
              src="/img/other-websites/post-bahamas.png"
              alt=""
            />
            <h4 className="mt-3">Post Office Bahamas</h4>
          </div>
          <div>
            <h6>VISION</h6>
            <p className="mt-4">
              The Bahamas Post Office is committed to providing high-quality
              postal service to all Bahamians. Its enthusiastic, professional
              staff will maintain a progressive organization through a
              commitment to high levels of customer satisfaction.
            </p>
          </div>
          <div className="mt-4">
            <h6>Mission</h6>
            <p className="mt-4">
              The mission of the Bahamas Post Office is to work together to be
              recognized and respected for its timely collection and transmittal
              of postal products from and for Bahamian and international
              consumers, including businesses and other organizations. It is to
              become a fully featured market-oriented and profitable business
              that meets the customers&apos; communications, advertising, and
              physical distributional needs.
            </p>
          </div>
          <div className="mt-4">
            <h6>Objectives</h6>
            <p className="mt-4">
              The objectives of the Bahamas Post Office are as follows:
              <ol type="a" className="mt-4">
                <li>
                  Maintain a superior knowledge and understanding of the
                  marketplace and thereby market competitive and accessible
                  products and services;
                </li>
                <li>Maintain a quality serviced policy;</li>
                <li>
                  Ensure effective interconnection with the international postal
                  network;
                </li>
                <li>
                  Adopt cost control policies and measures to improve
                  efficiency;
                </li>
                <li>
                  Sustain a higher level of productivity in the workplace;
                </li>
                <li>
                  Secure administrative and financial management independence
                  from the public service bureaucracy;
                </li>
                <li>
                  Encourage employees to optimize their individual and
                  collective contribution as members of the customer-oriented
                  enterprise;
                </li>
                <li>
                  Continue to develop strategies in the Family Islands as well
                  as New Providence;
                </li>
                <li>
                  Promote the ongoing development of human resources through
                  training designed for adaption to commercial function;
                </li>
                <li>
                  Maintain a management approach that emphasizes teamwork and
                  staff motivation;
                </li>
                <li>
                  Anticipate and satisfy the requirements of our customers for
                  excellent communication, distribution, financial, and other
                  agency services;
                </li>
                <li>
                  Earn national confidence as a responsible provider of a key
                  part of our country’s social and commercial infrastructure;
                </li>
                <li>
                  Ensure a positive working environment n which all of our
                  employees can find joy and satisfaction, take pride in our
                  organization, and feel that their views are valued; and
                </li>
                <li>
                  Foster innovative product development including e-commerce
                  service offerings, with the use of advanced technology and
                  efficient working practice to give customers better value for
                  money, than can be obtained anywhere else.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
