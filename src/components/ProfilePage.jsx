import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">Welcome to My Profile</h1>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-7 col-md-12">
          <div className="bg-light p-4 rounded shadow-1 mt-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Profile Image, Map, and Contact Details */}
        <div className="col-lg-5 col-md-12">
          <div className="text-center mb-4">
            <img
              src="/image/luffy.jpg"
              alt="Profile"
              className="rounded-circle border border-primary mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h2 className="fw-bold">Is Me not U🤷</h2>
            <p className="text-muted">Full Stack Developer | Tech Enthusiast</p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/johndoe" className="text-primary fs-4">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-primary fs-4">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/johndoe" className="text-primary fs-4">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mb-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d-122.42067968468124!3d37.7749297797589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a8a76d%3A0xe86f0648703ad9df!2s123%20Street%2C%20New%20York%2C%20USA!5e0!3m2!1sen!2s!4v1618243777983!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="text-center bg-light">
            <h5 className="text-muted">Contact Details</h5>
            <p className="text-muted">Phone: +111 234 567 890</p>
            <p className="text-muted">Email: johndoe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
