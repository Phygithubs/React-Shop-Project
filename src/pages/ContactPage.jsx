import React from "react";

const ContactPage = () => {
  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb bg-light p-3 rounded">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-dark">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>

      {/* Page Heading */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-lg-4">
          <h1 className="text-uppercase fw-bold text-primary">Contact Us</h1>
        </div>
        <div className="col-12 col-lg-8">
          <hr className="mt-3 mb-0" style={{ border: "1px dashed #6c757d" }} />
        </div>
      </div>

      {/* Contact Section */}
      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-lg-7 col-md-12">
          <form className="bg-light p-4 rounded shadow">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 text-white fw-bold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details and Map */}
        <div className="col-lg-5 col-md-12">
          <div className="mb-4 rounded shadow overflow-hidden">
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
          <div className="bg-light p-4 rounded shadow">
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill text-primary me-3"></i>
                <span>123 Street, New York, USA</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill text-primary me-3"></i>
                <a
                  href="mailto:info@example.com"
                  className="text-decoration-none text-dark"
                >
                  info@example.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-telephone-fill text-primary me-3"></i>
                <a
                  href="tel:+01234567890"
                  className="text-decoration-none text-dark"
                >
                  +012 345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
