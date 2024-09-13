import React from "react";

const Home = () => {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <header className="bg-primary text-sky-950 text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to the Museum Experience
          </h1>
          <p className="text-lg mb-6">
            Discover art, history, and culture with ease. Explore our exhibits
            and book your tickets online.
          </p>
          <a
            href="/Booking"
            className="bg-secondary text-blue-700 py-3 px-8 rounded-lg font-semibold hover:bg-accent transition duration-300"
          >
            Book Tickets
          </a>
        </div>
      </header>
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Seamless Booking
              </h3>
              <p className="text-text">
                Enjoy a smooth and straightforward ticket booking process, all
                from the comfort of your home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Real-Time Availability
              </h3>
              <p className="text-text">
                Stay updated with the latest information on exhibit availability
                and ticket options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                User-Friendly Interface
              </h3>
              <p className="text-text">
                Navigate our website effortlessly with our intuitive design and
                responsive layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibits Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Upcoming Exhibits
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Example Exhibit Cards */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Exhibit Title 1
                </h3>
                <p className="text-text mb-4">
                  Brief description of the exhibit.
                </p>
                <a
                  href="/exhibit/1"
                  className="text-secondary font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Exhibit Title 2
                </h3>
                <p className="text-text mb-4">
                  Brief description of the exhibit.
                </p>
                <a
                  href="/exhibit/2"
                  className="text-secondary font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Exhibit Title 3
                </h3>
                <p className="text-text mb-4">
                  Brief description of the exhibit.
                </p>
                <a
                  href="/exhibit/3"
                  className="text-secondary font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-slate-950 text-center py-8">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} BitBots. All rights reserved.</p>
          <div className="mt-4">
            <a href="/contact" className="text-slate-950 hover:underline">
              Contact Us
            </a>{" "}
            |
            <a href="/about" className="text-slate-950 hover:underline ml-4">
              About Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
