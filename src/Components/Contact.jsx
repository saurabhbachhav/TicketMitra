import React from "react";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#E6F0FF] via-[#99CCFF] to-[#0066CC] min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-[#003366] mb-4">Contact Us</h1>
        <p className="text-lg text-[#003366] mb-6">
          Hello! We are <span className="font-semibold">BitBots</span>, the
          creators of this online museum ticket booking system. Our goal is to
          make planning your museum visit as smooth and effortless as possible.
        </p>
        <p className="text-lg text-[#003366] mb-6">
          For any inquiries or assistance, feel free to reach out:
        </p>
        <div className="text-left">
          <p className="text-[#0066CC] font-semibold">Phone:</p>
          <p className="mb-4 text-[#003366]">+91 9371******</p>
          <p className="text-[#0066CC] font-semibold">Email:</p>
          <p className="mb-4 text-[#003366]">saurabh@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
