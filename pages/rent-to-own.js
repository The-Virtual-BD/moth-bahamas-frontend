import { ErrorMessage } from "@hookform/error-message";
import axios from "apis/axios";
import { getProfileData } from "apis/profile";
import Footer from "components/Footer";
import HousingModelCards from "components/HousingModelCards";
import Navbar from "components/Navbar";
import ProfileCard from "components/ProfileCard";
import RentToOwn from "components/RentToOwn";
import withAuth from "HOC/withAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const islands = [
  "Abaco",
  "Acklins",
  "Andros",
  "Berry Islands",
  "Bimini",
  "Cat Island",
  "Crooked Island",
  "Eleuthera",
  "Exuma",
  "Grand Bahama",
  "Inagua",
  "Long Cay",
  "Long Island",
  "Mayaguana",
  "New Providence",
  "Ragged Island",
  "Rum Cay",
  "San Salvador",
];
const countries = [
  "Bahamas",
  "Afghanistan ",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Korea",
  "Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Korea",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates ",
  "United Kingdom",
  "United Republic of Tanzania ",
  "United States of America ",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Holy See",
  "State of Palestine",
  "Cook Islands",
  "Niue",
];

function RTOApplication() {
  const [profile, setProfile] = useState(null);
  const [canSubmit, setCanSubmit] = useState(null);
  const [deps, setDeps] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.accept) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("passport_photo", data.passport_photo[0]);
    formData.append("nib_photo", data.nib_photo[0]);
    formData.append("job_letter_document", data.job_letter_document[0]);
    formData.append("paystub_photo", data.paystub_photo[0]);
    formData.append("credit_facilities", data.credit_facilities[0]);

    try {
      setSubmitting(true);
      const res = await axios.post("/apply-rto", formData);
      toast.success("Application submitted successfully");
      setDeps(Math.random());
      setSubmitting(false);
    } catch (err) {
      setSubmitting(false);
      toast.error("Check your inputs and try again");
      errorify(err.response.data.errors);
    }
  };

  const errorify = (err) => {
    Object.entries(err).forEach(([key, value]) => {
      setError(
        key,
        { type: "custom", message: value[0] },
        { shouldFocus: true }
      );
    });
  };

  const showError = (fieldName) => {
    return (
      <ErrorMessage
        errors={errors}
        name={fieldName}
        render={({ message }) => (
          <small className="text-danger">{message}</small>
        )}
      />
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setProfile(await getProfileData());
        const applicationStatus = await axios.get(
          "/get-rto-application-status"
        );
        setCanSubmit(applicationStatus.data.can_submit);
      } catch (err) {}
    }
    fetchData();
  }, [deps]);

  return (
    <>
      <Navbar />

      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              <ProfileCard />
              {canSubmit !== null && (
                <div className="card card-shadow p-3">
                  <div className="card-body">
                    <h3 className="card-title text-center color-dark">
                      Rent To Own Application Form
                    </h3>

                    {profile && canSubmit && (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-3">
                          <h6 className="color-green">Personal Information</h6>
                          <div className="form-group">
                            <label className="text-muted">First Name</label>
                            <input
                              type="text"
                              className={`form-control border-0 bg-light ${
                                errors.fname && "invalid"
                              }`}
                              defaultValue={profile.fname}
                              {...register("fname", {
                                required: "First Name is required!",
                              })}
                            />
                            {showError("fname")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">Last Name</label>
                            <input
                              type="text"
                              className={`form-control border-0 bg-light ${
                                errors.lname && "invalid"
                              }`}
                              defaultValue={profile.lname}
                              {...register("lname", {
                                required: "Last Name is required!",
                              })}
                            />
                            {showError("lname")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">NIB Number</label>
                            <input
                              type="text"
                              className={`form-control border-0 bg-light ${
                                errors.nib_no && "invalid"
                              }`}
                              defaultValue={profile.nib}
                              {...register("nib_no", {
                                required: "NIB no. is required!",
                              })}
                            />
                            {showError("nib_no")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">Email Address</label>
                            <input
                              type="email"
                              className={`form-control border-0 bg-light ${
                                errors.email && "invalid"
                              }`}
                              defaultValue={profile.email}
                              {...register("email", {
                                required: "Email is required!",
                              })}
                            />
                            {showError("email")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">Date of Birth</label>
                            <input
                              type="date"
                              className={`form-control border-0 bg-light ${
                                errors.dob && "invalid"
                              }`}
                              defaultValue={profile.dob}
                              {...register("dob", {
                                required: "Date of birth is required!",
                              })}
                            />
                            {showError("dob")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">Gender</label>
                            <select
                              {...register("gender", {
                                required: "Gender is required!",
                              })}
                              defaultValue={profile.gender}
                              className={`form-control border-0 bg-light ${
                                errors.gender && "invalid"
                              }`}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                            {showError("gender")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Country of Birth
                            </label>

                            <select
                              {...register("country_of_birth", {
                                required: "Country of birth is required!",
                              })}
                              defaultValue={profile.country_of_birth}
                              className={`form-control border-0 bg-light ${
                                errors.country_of_birth && "invalid"
                              }`}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                            {showError("country_of_birth")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Island of Birth
                            </label>

                            <select
                              {...register("island_of_birth", {
                                required: "Islan of birth is required!",
                              })}
                              defaultValue={profile.island_of_birth}
                              className={`form-control border-0 bg-light ${
                                errors.island_of_birth && "invalid"
                              }`}
                            >
                              <option value="">Select Island</option>
                              {islands.map((island, index) => (
                                <option key={index} value={island}>
                                  {island}
                                </option>
                              ))}
                            </select>
                            {showError("island_of_birth")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Country of Citizenship
                            </label>

                            <select
                              {...register("country_of_citizenship", {
                                required: "Country of citizenship is required!",
                              })}
                              defaultValue={profile.country_of_citizenship}
                              className={`form-control border-0 bg-light ${
                                errors.country_of_citizenship && "invalid"
                              }`}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                            {showError("country_of_citizenship")}
                          </div>

                          <div className="form-group mt-3">
                            <label className="text-muted">Phone</label>
                            <input
                              {...register("phone", {
                                required: "Phone is required!",
                              })}
                              defaultValue={profile.phone}
                              className={`form-control border-0 bg-light ${
                                errors.phone && "invalid"
                              }`}
                              type="text"
                              placeholder="Type here..."
                            />
                            {showError("phone")}
                          </div>
                        </div>
                        <div className="p-3">
                          <h6 className="color-green">
                            Identification Information
                          </h6>
                          <div className="form-group mt-3">
                            <label className="text-muted">Passport</label>

                            <input
                              className={`custom-file-upload form-control bg-light border-0 ${
                                errors.passport_photo && "invalid"
                              }`}
                              type="file"
                              {...register("passport_photo", {
                                required: "Passport is required!",
                              })}
                            />
                            {showError("passport_photo")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">NIB Card</label>

                            <input
                              className={`custom-file-upload form-control bg-light border-0 ${
                                errors.nib_photo && "invalid"
                              }`}
                              type="file"
                              {...register("nib_photo", {
                                required: "NIB photo is required!",
                              })}
                            />
                            {showError("nib_photo")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Job Letter (Not older than 1 month)
                            </label>

                            <input
                              className={`custom-file-upload form-control bg-light border-0 ${
                                errors.job_letter_document && "invalid"
                              }`}
                              type="file"
                              {...register("job_letter_document", {
                                required: "Job letter is required!",
                              })}
                            />
                            {showError("nib_photo")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Paystub (Most recent paystub for the full month)
                            </label>

                            <input
                              className={`custom-file-upload form-control bg-light border-0 ${
                                errors.paystub_photo && "invalid"
                              }`}
                              type="file"
                              {...register("paystub_photo", {
                                required: "Paystub is required!",
                              })}
                            />
                            {showError("paystub_photo")}
                          </div>
                          <div className="form-group mt-3">
                            <label className="text-muted">
                              Print of existing external loans and credit
                              facilities
                            </label>

                            <input
                              className={`custom-file-upload form-control bg-light border-0 ${
                                errors.credit_facilities && "invalid"
                              }`}
                              type="file"
                              {...register("credit_facilities", {
                                required: "Document is required!",
                              })}
                            />
                            {showError("credit_facilities")}
                          </div>
                          <div className="d-flex mt-3">
                            <input
                              {...register("accept")}
                              className="me-3"
                              type="checkbox"
                            />
                            <small className="color-green">
                              Accept{" "}
                              <Link href="/tnc">
                                <a>
                                  <u>Terms and Conditions</u>
                                </a>
                              </Link>
                            </small>
                          </div>
                        </div>
                        <div className="text-center">
                          <input
                            disabled={submitting}
                            className="btn btn-green"
                            type="submit"
                            value={submitting ? "Submitting..." : "Submit"}
                          />
                        </div>
                      </form>
                    )}
                    {profile && !canSubmit && (
                      <p className="lead text-muted mt-3 text-center">
                        Application already submitted <br />
                        <Link href="/application-status">
                          <a>
                            <u>Click here to view application status</u>
                          </a>
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <RentToOwn />
              <br />
              <HousingModelCards count={2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(RTOApplication);
