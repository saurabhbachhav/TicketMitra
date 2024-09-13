import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <span className="font-semibold">BitBots</span>!
      </p>
      <p className="text-lg mb-4">
        At BitBots, we are passionate about transforming your museum visit into
        a seamless and enjoyable experience. Our mission is to simplify the
        process of booking museum tickets, allowing you to focus on the wonders
        and discoveries that await you.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
      <p className="text-lg mb-4">
        We are a team of dedicated professionals committed to leveraging
        technology to enhance cultural experiences. With our expertise in
        creating innovative solutions, we’ve developed an online ticket booking
        system designed to streamline your visit planning.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="text-lg mb-4">
        Our vision is to revolutionize how you interact with museums by
        providing an intuitive, user-friendly platform. We believe that
        exploring cultural treasures should be straightforward and accessible,
        and we strive to make this a reality through our cutting-edge booking
        system.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">
          Easy Booking: Secure your tickets effortlessly with our streamlined
          online system.
        </li>
        <li className="text-lg">
          Real-Time Updates: Stay informed with the latest availability and
          museum information.
        </li>
        <li className="text-lg">
          User-Friendly Interface: Enjoy a hassle-free experience with our
          intuitive design.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
      <p className="text-lg mb-4">
        We are committed to delivering excellence and ensuring that every aspect
        of your museum visit is handled with care. Your satisfaction is our top
        priority, and we continually seek to improve our services based on your
        feedback.
      </p>
      <p className="text-lg">
        Thank you for choosing <span className="font-semibold">BitBots</span>.
        We look forward to enhancing your museum experience!
      </p>
    </div>
  );
};

export default AboutUs;
