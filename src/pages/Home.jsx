import React from "react";
import { IoCall, } from "react-icons/io5";
import SwiperSlideEffect from "../components/SwiperSlideEffect";
import { FaExchangeAlt, FaShippingFast } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Card from "../components/Cart";

function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="container py-5">
        <div className="row m-0 justify-content-between">
          <div
            style={{ height: 500 }}
            className="col-lg-8 p-0 py-lg-4 pe-lg-4 overflow-hidden"
          >
            <div className="w-100 h-100">
              <SwiperSlideEffect />
            </div>
          </div>

          <div
            style={{ height: 500 }}
            className="col-lg-4 p-0 py-lg-4 overflow-hidden"
          >
            <div className="col-12 h-50 p-2 position-relative overflow-hidden container-fluid ">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
                <p className="fs-6 m-0 save-text">Save 20%</p>
                <h4 className="fw-medium">Special offer</h4>
                <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                  Shop Now
                </button>
              </div>
              <img
                style={{ filter: "brightness(65%)" }}
                src="/image/offer-1.jpg"
                alt="Special Offer"
                className="w-100 h-100 object-fit-cover transition hover-scale"
              />
            </div>

            <div className="col-12 mt-2 p-2 position-relative overflow-hidden h-50">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
                <p className="fs-6 m-0 save-text">Save 20%</p>
                <h4 className="fw-medium">Special offer</h4>
                <button className="btn btn-outline-light rounded-0 px-4 mt-3">
                  Shop Now
                </button>
              </div>
              <img
                style={{ filter: "brightness(65%)" }}
                src="/image/offer-2.jpg"
                alt="Special Offer"
                className="w-100 h-100 object-fit-cover transition hover-scale"
              />
            </div>
          </div>
        </div>

        <div className="row m-0 py-lg-8 g-3 font-poppins">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <TiTick style={{ fontSize: "50px" }} className="text-blue-700" />
              <h1 className="fs-5 ms-2 mb-0">Quality Product</h1>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <FaShippingFast style={{ fontSize: "50px" }} className="text-blue-700" />
              <h1 className="fs-5 ms-2 mb-0">Fast Delivery</h1>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-3">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <FaExchangeAlt style={{ fontSize: "50px" }} className="text-blue-700" />
              <h1 className="fs-5 ms-2 mb-0">14-Day Return</h1>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 py-lg-3 pe-lg-0">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <IoCall style={{ fontSize: "50px" }} className="text-blue-700" />
              <h1 className="fs-5 ms-2 mb-0">24 / Support</h1>
            </div>
          </div>
        </div>
        {/* categories */}
        <div className="row align-items-center p-0" style={{marginTop:50}}>
          <div className="col-12 col-lg-3">
            <h1 className="m-0">CATEGROIES</h1>
          </div>
          <div className="col-12 col-lg-9 grey">
            <hr style={{border:'1px dashed grey'}} />
          </div>
        </div>

        <div className="row justify-content-center m-0 py-4 py-lg-8 font-poppins">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-2.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-3.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-1.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 px-lg-0">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
              <img src="/image/cat-4.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-0 py-4 py-lg-8 font-poppins">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-1.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-2.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-4.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 px-lg-0">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-1.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-0 py-4 py-lg-8 font-poppins">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-4.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-1.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
                <img src="/image/cat-3.jpg"
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 px-lg-0">
            <div className="d-flex align-items-center justify-content-between shadow bg-hover transition">
              <div className="col-4 bg-success overflow-hidden" style={{height:100}}>
              <img src="/image/cat-2.jpg" 
                    alt="" className="w-100 h-100 object-fit-cover hover-scale transition"/>
              </div>
              <div className="col-8 ps-2">
                <h1 className="m-0 fs-6">Category Name</h1>
                <p className="m-0">100 products</p>
              </div>
            </div>
          </div>
        </div>
          {/* <div className="row align-items-center p-0" style={{marginTop:50}}>
            <div className="col-12 col-lg-3">
              <h3 className="m-0">FEATURED PRODUCTS</h3>
            </div>
            <div className="col-12 col-lg-9 grey">
              <hr style={{border:'1px dashed grey'}} />
            </div>
          </div> */}
          <Card/>
      </div>
    </div>
  );
}

export default Home;
