"use client"
import React from 'react';
import toast from 'react-hot-toast';

const ConfirmBookingBtn = () => {
    const handleSubmit = (e) => {
        toast("Booking Successful ✅");
    };


    return (

        <button
            onClick={handleSubmit}
            type="submit"
            className="w-full mt-4 bg-(--secondary) text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition duration-200 shadow-lg"
        >
            Confirm Booking
        </button>
    );
};

export default ConfirmBookingBtn;