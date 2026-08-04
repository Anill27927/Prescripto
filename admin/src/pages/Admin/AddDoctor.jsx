import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border border-gray-100 rounded w-full msx-w-4xl max-h-[80vh] overflow-scroll ">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={assets.upload_area}
              alt=""
            />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 text-gray-600">
          {/* Left Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p>Doctor Name</p>
              <input type="text" placeholder="Name" required />
            </div>

            <div className="flex flex-col gap-1">
              <p>Doctor Email</p>
              <input type="email" placeholder="Email" required />
            </div>

            <div className="flex flex-col gap-1">
              <p>Doctor Password</p>
              <input type="password" placeholder="Password" required />
            </div>

            <div className="flex flex-col gap-1">
              <p>Experience</p>
              <select>
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
                <option>4 Year</option>
                <option>5 Year</option>
                <option>6 Year</option>
                <option>7 Year</option>
                <option>8 Year</option>
                <option>9 Year</option>
                <option>10 Year</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p>Fees</p>
              <input type="number" placeholder="Fees" required />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p>Speciality</p>
              <select>
                <option>General physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Pediatricians</option>
                <option>Neurologist</option>
                <option>Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p>Education</p>
              <input type="text" placeholder="Education" required />
            </div>

            <div className="flex flex-col gap-1">
              <p>Address</p>
              <input
                className="border border-gray-100 rounded px-3 py-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                className="border border-gray-100 rounded px-3 py-2"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p>About Doctor</p>
          <textarea
            className="w-full px-4 pt-2 border border-gray-100 rounded"
            placeholder="write about doctor"
          >
            write about doctor
          </textarea>
        </div>
        <button className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
