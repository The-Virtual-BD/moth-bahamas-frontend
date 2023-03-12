import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function IncentivesToExpand() {
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center">
            <h4 className="mt-3">Incentives to Expand Housing</h4>
          </div>
          <div className="mt-4">
            <ul className="mt-4">
              <li>
                Both solar panels, solar system parts and solar accessories are
                all duty free thus making renewable energy for homes more
                affordable
              </li>
              <li>
                First home purchase zero rating of VAT increased from $200k to
                $250k
              </li>
              <li>
                Currently Bahamians obtain VAT concessions on acquisition of
                first home. If they acquire a vacant lot VAT is paid on the
                conveyance, however, a reduced VAT rate may be obtained for
                construction services if they subsequently construct their first
                home on that land. The Act is amended to provide that Bahamians
                may register for VAT for the purpose of obtaining a refund of
                the VAT payable on the construction or renovation of first home
                (including fixer-uppers). The amount of the refund will be equal
                to the amount in excess of that payable for Bahamian first home
                acquisition with a cap of $40k. Construction must be completed
                within 18 months and application for refund submitted within 90
                days of completion
              </li>
              <li>
                The threshold on the payment of Real Property Tax on
                Owner-occupied property is increased from the existing rate of
                $250,000 to $300,000
              </li>
              <li>
                Reduction or elimination of duty on over 25 frequently used
                construction items such as plumbing fixtures, roofing tiles and
                hurricane impact windows
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
