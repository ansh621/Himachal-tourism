import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../Footer';

// Districts of Himachal Pradesh
const districts = [
  'Bilaspur',
  'Chamba',
  'Hamirpur',
  'Kangra',
  'Kinnaur',
  'Kullu',
  'Lahaul and Spiti',
  'Mandi',
  'Shimla',
  'Sirmaur',
  'Solan',
  'Una'
];

const WannaList = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    accommodationName: '',
    accommodationType: '',
    ownerName: '',
    ownerContact: '',
    ownerEmail: '',
    roomRent: '',
    district: '',
    place: ''
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('accommodationName', formData.accommodationName);
    formDataToSend.append('accommodationType', formData.accommodationType);
    formDataToSend.append('ownerName', formData.ownerName);
    formDataToSend.append('ownerContact', formData.ownerContact);
    formDataToSend.append('ownerEmail', formData.ownerEmail);
    formDataToSend.append('roomRent', formData.roomRent);
    formDataToSend.append('district', formData.district);
    formDataToSend.append('place', formData.place);
    if (file) formDataToSend.append('accommodationPhoto', file);

    try {
      const response = await fetch('http://localhost:3000/storeStay', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      navigate('/Accomodation')

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='h-[2050px] w-full bg-gradient-to-b from-white to-[#252525]'>
      {/* Header Section */}
      <div>
        <img
          className="h-[616px] w-full border-black object-cover object-bottom"
          src="taj-theog-facade-image.jpg"
          alt="theog hotel"
        />
        <p className="dancing-script absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity text-[#ffffff] text-[64px] tracking-[5.12px] font-bold text-center z-10">
          Accommodation
        </p>
      </div>

      {/* Form Section */}
      <div className="w-[1478px] h-[1308px] bg-[#ecebeb] rounded-[94px] overflow-auto shadow mx-8 mt-10 border-2 border-zinc-300 mb-10">
        <div className="w-[901px] h-[74px] text-black text-[45px] font-medium font-['Raleway'] tracking-normal ml-20 mt-10">
          Accommodation Listing
        </div>

        {/* Form Container */}
        <div className="w-[1344px] bg-[#d9d9d9]/40 rounded-[38px] shadow ml-16 mt-10 p-8 border border-zinc-400">
          <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            {/* Name of Accommodation */}
            <div>
              <label htmlFor="accommodationName" className="block text-lg font-medium text-gray-700">Name of the accommodation</label>
              <input
                type="text"
                id="accommodationName"
                name="accommodationName"
                value={formData.accommodationName}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Type of Accommodation */}
            <div>
              <label htmlFor="accommodationType" className="block text-lg font-medium text-gray-700">Type of the accommodation</label>
              <select
                id="accommodationType"
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option value="">Select type</option>
                <option value="hotel">Hotel</option>
                <option value="homestay">Homestay</option>
                <option value="resort">Resort</option>
                <option value="hostel">Hostel</option>
              </select>
            </div>

            {/* District */}
            <div>
              <label htmlFor="district" className="block text-lg font-medium text-gray-700">District</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option value="">Select district</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>

            {/* Place */}
            <div>
              <label htmlFor="place" className="block text-lg font-medium text-gray-700">Place</label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Owner's Name */}
            <div>
              <label htmlFor="ownerName" className="block text-lg font-medium text-gray-700">Owner's Name</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Owner's Contact */}
            <div>
              <label htmlFor="ownerContact" className="block text-lg font-medium text-gray-700">Contact of the Owner</label>
              <input
                type="text"
                id="ownerContact"
                name="ownerContact"
                value={formData.ownerContact}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Owner's Email */}
            <div>
              <label htmlFor="ownerEmail" className="block text-lg font-medium text-gray-700">Email of the Owner</label>
              <input
                type="email"
                id="ownerEmail"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Room Rent */}
            <div>
              <label htmlFor="roomRent" className="block text-lg font-medium text-gray-700">Room Rent</label>
              <input
                type="text"
                id="roomRent"
                name="roomRent"
                value={formData.roomRent}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label htmlFor="accommodationPhoto" className="block text-lg font-medium text-gray-700">Accommodation's Photo</label>
              <input
                type="file"
                id="accommodationPhoto"
                name="accommodationPhoto"
                onChange={handleFileChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WannaList;
