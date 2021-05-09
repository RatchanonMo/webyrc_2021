import React from "react";
import Carousel from "../components/Carousel";
import Opendata from "../components/Opendata";
import fame from "../data/fame";
import opendatas from "../data/opendatas";

export default function index() {
  const openDataElements = opendatas.map((data, index) => {
    return <Opendata key={index} data={data} />;
  });

  const hallOfFameElements = fame.map((person, index) => {
    return <Carousel key={index} person={person} />;
  });

  return (
    <>
      <div
        className="col-xl-12 "
        style={{
          backgroundColor: "#FFCCDE",
          paddingTop: "80px",
          paddingBottom: "60px",
        }}
      >
        <div className="container align-items-center">
          <h3 align="center" style={{ color: "#C81451" }}>
            YRC Open Data Integrity and Transparency Assessment : OIT
          </h3>
          <h4 align="center">การเปิดเผยข้อมูลสาธารณะ โรงเรียนยุพราชวิทยาลัย</h4>

          <div className="container" style={{ maxWidth: "600px" }}>
            <div className="">
              <input
                type="text"
                className="form-control search mt-3"
                placeholder="ค้นหา"
              />
            </div>
          </div>

          <div className="container" style={{ maxWidth: "850px" }}>
            <div className="row mt-5">{openDataElements}</div>
          </div>
        </div>
      </div>

      <section className="testimonials-two" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="block-title-two text-center">
            <p>YRC Hall of fame</p>
            <h3>คนเก่งยุพราชวิทยาลัย</h3>
          </div>
          {/* /.block-title-two */}
          <div
            className="testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme"
            data-options='{"loop": false, "margin": 30, "stagePadding": 0, "items": 3, "smartSpeed": 700, "autoplay": true, "autoplayTimeout": 7000, "nav": false, "dots": true, "responsive": { "0": { "items": 1, "stagePadding": 0 }, "1199": { "items": 2 }, "1200": { "items": 3 } }}'
          >
            {hallOfFameElements}
          </div>
          {/* /.testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme */}
        </div>
        {/* /.container */}
      </section>
      {/* /.testimonials-two */}
    </>
  );
}
