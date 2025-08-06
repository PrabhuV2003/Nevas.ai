import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from 'react-toastify';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({}); 
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be numeric and 7-15 digits";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await axios.post(`http://localhost:5001/api/contact`, formData);

        if (response.status === 200) {
          toast.success("Form submitted successfully!", {position: "top-left",});
          // Optionally reset
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
          onClose();
        } else {
          toast.error("Something went wrong. Please try again later.", {position: "top-left"});
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to submit form. Please try again later.", {position: "top-left",});
      }
    }
  };


  return (
    <motion.div
      initial={{ borderRadius: "50%", opacity: 0 }}
      animate={{ borderRadius: "0%", opacity: 1 }}
      exit={{ borderRadius: "50%", opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className='w-full h-full fixed bg-black/40 z-50 top-0'
    >
      <div className='w-[90%] sm:w-[50%] lg:w-[40%] h-fit absolute top-[10px] right-5 p-5 bg-neutral-300 rounded-2xl overflow-y-scroll'>
        <IoIosCloseCircle onClick={onClose} className='absolute top-3 right-3 text-2xl z-10 text-black cursor-pointer' />
        <div className='w-full h-[100px] bg-black rounded-xl relative overflow-hidden'>
          <img src="https://cdn.pixabay.com/photo/2024/03/26/07/24/wallpaper-8656113_1280.jpg" alt="" className='w-full h-full object-cover' />
          <h1 className='white-silver-animated-text font-bold font-DM-Sans text-4xl md:text-5xl lg:text-6xl text-center absolute top-1/2 -translate-y-1/2 left-3'>Say Hello!</h1>
        </div>
        <form onSubmit={handleSubmit} className='w-full h-fit mt-5'>
          <div className='flex justify-between gap-5 mb-8'>
            <div className='w-full'>
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Your Name'
                className='w-full border-b border-black outline-none p-2 placeholder:text-black text-black font-DM-Sans'
                required
              />
              {errors.name && <p className='text-red-600 text-sm'>{errors.name}</p>}
            </div>
            <div className='w-full'>
              <input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                className='w-full border-b border-black outline-none p-2 placeholder:text-black text-black font-DM-Sans'
                required 
              />
              {errors.email && <p className='text-red-600 text-sm'>{errors.email}</p>}
            </div>
          </div>
          <div className='flex justify-between gap-5 mb-8'>
            <div className='w-full'>
              <input
                type="tel"
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter Your Phone Number'
                className='w-full border-b border-black outline-none p-2 placeholder:text-black text-black font-DM-Sans'
                required 
              />
              {errors.phone && <p className='text-red-600 text-sm'>{errors.phone}</p>}
            </div>
            <div className='w-full'>
              <input
                type="text"
                name='company'
                value={formData.company}
                onChange={handleChange}
                placeholder='Enter Your Company'
                className='w-full border-b border-black outline-none p-2 placeholder:text-black text-black font-DM-Sans'
                required 
              />
            </div>
          </div>
          <div className='flex justify-between gap-5 mb-3'>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              className='w-full border h-[150px] border-black outline-none p-2 placeholder:text-black text-black font-DM-Sans rounded-xl'
              required 
            ></textarea>
          </div>
          {errors.message && <p className='text-red-600 text-sm mb-4'>{errors.message}</p>}
          <button
            className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-28 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
            type='submit'
          >
            <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-primay"></div>
            <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-secoundary"></div>
            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-primay"></div>
            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-secoundary"></div>
            <p className="z-10">Submit</p>
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactForm;
