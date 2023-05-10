import React, { useEffect } from "react";
import tech from "../../assets/images/tech.png";
import profilePic from "../../assets/images/profile.png";
// import profilePic from "../  ../assets/images/profile.png";
import { profileInfo } from "../../Utils/staticObj";
import TaskTabs from "./tabs";

// import { profileInfo } from "../utils/staticObjects";
const TaskInfo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-between pt-3">
                    <h3 style={{ color: "#ebe5e5b5" }}>{JSON.parse(localStorage.getItem("currentTask") || `{}`)?.taskName
                    }</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ">
                    <TaskTabs />
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

export default TaskInfo;
