import React, { useEffect } from "react";
import tech from "../../assets/images/tech.png";
import profilePic from "../../assets/images/profile.png";
// import profilePic from "../  ../assets/images/profile.png";
import { profileInfo } from "../../Utils/staticObj";
// import { profileInfo } from "../utils/staticObjects";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-between pt-3">
          <h3 style={{ color: "#ebe5e5b5" }}>Profile</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 card-app">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 ">
                <div className="container-fluid">
                  <div className="col-6 pt-4">
                    <h4>My BioData</h4>
                    <hr />
                  </div>

                  <div className="row" style={{ color: "white" }}>
                    {profileInfo.biodata.map((data) => (
                      <>
                        <div className="col-6 ">{data.title}</div>
                        <div className="col-6 ">: {data.value}</div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="container-fluid">
                  <div className="col-6 pt-3">
                    <h4>Project Information</h4>
                    <hr />
                  </div>

                  <div className="row" style={{ color: "white" }}>
                    {profileInfo.projectInfo.map((data) => (
                      <>
                        <div className="col-12 pt-4">
                          <h5 style={{ color: "#7f8719" }}>{data.name}</h5>
                        </div>
                        <div className="col-12  ">
                          <span style={{ color: "#1e79a4" }}>Information </span>: {data.info}
                        </div>
                        <div className="col-12 ">
                          <span style={{ color: "#1e79a4" }}>Technology </span>: {data.technology}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 card-app ">
                <div className="d-flex justify-content-center">
                  <img src={profilePic} height="60%" width="60%" />
                </div>
                <hr className="mt-2" />

                <div className="col-12">
                  <img src={tech} height="100%" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
