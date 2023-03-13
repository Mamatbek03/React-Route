import React from "react";

function Contacts() {
  return (
    <div bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <div className="text-center text-md-start mt-5">
          <div className="d-flex justify-content-between mt-3">
            <div md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <div icon="gem" className="me-3" />
                Makers bootcamp
              </h6>
              <p>
                Here you can use rows and columns to <br /> organize your footer
                content. Lorem ipsum dolor sit amet, <br /> consectetur
                adipisicing elit.
              </p>
            </div>

            <div md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Animes</h6>
              <p>
                <a href="#!" className="text-reset">
                  Demon Slayers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Naruto
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Attack on Titan
                </a>
              </p>
            </div>

            {/* <div md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div> */}

            <div md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <div icon="home" className="me-2" />
                Bishkek, KGZ
              </p>
              <p>
                <div icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <div icon="phone" className="me-3" /> +996 343 12 34 56
              </p>
              <p>
                <div icon="print" className="me-3" /> +996 343 12 34 56
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Makers.com
        </a>
      </div>
    </div>
  );
}
export default Contacts;
