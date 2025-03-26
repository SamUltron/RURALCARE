import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import TopRural from "../components/TopRural";

function NewPatientPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    name: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    address: "",
    contact: "",
    email: "",
    emergencyContact: "",
    bloodType: "",
    allergies: "",
    currentMedications: "",
    medicalHistory: "",
    occupation: "",
    notes: "",
    lastVisit: "",
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = `${form.firstName} ${form.lastName}`;

    const updatedForm = {
      ...form,
      name, // Update name field dynamically
    };
    setIsSubmitting(true);

    setTimeout(() => {
      fetch(`http://localhost:4000/patient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedForm),
      }).then(() => {
        setIsSubmitting(false);
        navigate("/dash/patient");
      });
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      <TopRural />
      <div className="flex items-center gap-2">
        <Link to="/dash/patient">
          <button>
            <ArrowLeft className="h-4 w-4" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">
          New Patient Registration
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border p-4 rounded-md h-fit">
            <div className="mb-3">
              <h3 className="text-3xl font-semibold tracking-tight mb-1">
                Personal Information
              </h3>
              <p className="text-sm text-gray-500">
                Enter the patient's personal details
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block font-semibold">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    required
                    onChange={handleForm}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block font-semibold">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    required
                    onChange={handleForm}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="dateOfBirth" className="block font-semibold">
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    required
                    onChange={handleForm}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="age" className="block font-semibold">
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    required
                    onChange={handleForm}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gender" className="block font-semibold">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    placeholder="Select gender"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={handleForm}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block font-semibold">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Patient's address"
                  className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                  onChange={handleForm}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-semibold">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="contact"
                    placeholder="Phone number"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-semibold">
                    Email (Optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="emergencyContact"
                  className="block font-semibold"
                >
                  Emergency Contact
                </label>
                <input
                  id="emergencyContact"
                  name="emergencyContact"
                  placeholder="Name and phone number"
                  className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                  onChange={handleForm}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastVisit" className="block font-semibold">
                  Your Last Visit
                </label>
                <input
                  id="lastVisit"
                  name="lastVisit"
                  placeholder="When last were you here?"
                  className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                  onChange={handleForm}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border p-4 rounded-md">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight mb-1">
                  Medical Information
                </h3>
                <p className="text-sm text-gray-500">
                  Enter the patient's medical details
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="bloodType" className="block font-semibold">
                    Blood Type
                  </label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    placeholder="Select blood type"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={handleForm}
                  >
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="allergies" className="block font-semibold">
                    Allergies
                  </label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    placeholder="List any allergies"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="currentMedications"
                    className="block font-semibold"
                  >
                    Current Medications
                  </label>
                  <textarea
                    id="currentMedications"
                    name="currentMedications"
                    placeholder="List current medications"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="medicalHistory"
                    className="block font-semibold"
                  >
                    Medical History
                  </label>
                  <textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    placeholder="Relevant medical history"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                  />
                </div>
              </div>
            </div>

            <div className="border p-4 rounded-md">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight mb-1">
                  Additional Information
                </h3>
                <p className="text-sm text-gray-500">Other relevant details</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="occupation" className="block font-semibold">
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    placeholder="Patient's occupation"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="block font-semibold">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Additional notes"
                    className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    onChange={handleForm}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Link to="/dash/patient">
                  <button className="flex items-center justify-center border py-2 px-3 gap-2 font-medium rounded-md">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors ease-in-out"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Patient
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPatientPage;
