import React, { useEffect } from "react";
import tech from "../../assets/images/tech.png";
import profilePic from "../../assets/images/profile.png";
// import profilePic from "../  ../assets/images/profile.png";
import { profileInfo } from "../../Utils/staticObj";
import { GrAdd } from "react-icons/gr";
import PopUPForm from "./PopUp";
import { useNavigate } from "react-router-dom";

// import { profileInfo } from "../utils/staticObjects";
const MainTimeLine = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [TIMELINES, setTIMELINES] = React.useState([]);
    useEffect(() => {
        setTIMELINES(JSON.parse(localStorage.getItem("timelines") || '[]'))
    }, [localStorage.getItem("timelines")])


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-between pt-3" style={{ color: "#ebe5e5b5" }}>
                    <h3 style={{ color: "#ebe5e5b5" }}>MainTimeLine</h3>
                    <button className="btn" onClick={() => setOpen(true)}><span style={{ fontSize: "40px", color: "white" }}>+</span></button>
                </div>
            </div>
            <PopUPForm setOpen={setOpen} open={open} />
            <div className="row">
                <div className="col-12 ">
                    <div className="container-fluid">
                        <div className="row ">
                            {Array.isArray(TIMELINES) && TIMELINES.map((d: any, i: number) => <div className="col-4  mt-2 ">
                                <div className="container-fluid card-app ">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <img className="mt-2" src={`http://localhost:5000${d?.IMAGE}`} width={"140px"} height={"140px"} />
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-12 ">
                                            <h3 className="text-center" style={{ color: "#c6a800" }}>{d?.TimelineName}</h3>
                                            <p>{d?.DESC}</p>
                                            <div className="d-flex justify-content-center pb-3">

                                                <button className="btn btn-info" onClick={() => {
                                                    localStorage.setItem("timelineNow", d.TimelineName)
                                                    return navigate('/en/TaskList')
                                                }}>Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-6 pt-4">
                                        <h4>My BioData</h4>
                                        <hr />
                                    </div> */}

                                    {/* <div className="row" style={{ color: "white" }}>
                                        {profileInfo.biodata.map((data) => (
                                            <>
                                                <div className="col-6 ">{data.title}</div>
                                                <div className="col-6 ">: {data.value}</div>
                                            </>
                                        ))}
                                    </div> */}
                                </div>
                            </div>)}
                        </div>
                        asdasdas
                    </div>
                </div>
                {/* <div className="col-4">
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
                </div> */}
            </div>
        </div>
    );
};

export default MainTimeLine;
