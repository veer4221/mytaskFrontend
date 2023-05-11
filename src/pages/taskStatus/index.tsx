// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
// import "./App.css";
import List from "../../components/list/List";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiExport, BiImport } from "react-icons/bi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
// import { DAD } from "./components/DAD";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { COLUMN_NAMES } from "../../Utils/staticObj";
import { AiOutlineRollback } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";


// import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

function TaskStatus() {
    const navigate = useNavigate();
    console.log("first", JSON.parse(localStorage.getItem("timelines")).find(d => d.TimelineName === localStorage.getItem("timelineNow")).MainField)
    const [MainField, setMainField] = useState(
        JSON.parse(localStorage.getItem("timelines")).find(d => d.TimelineName === localStorage.getItem("timelineNow")).MainField === undefined
            ? [
                {
                    taskName: "TASK PROGRESS REPORT",
                    isCheck: false,
                    timeLine: localStorage.getItem("timelineNow"),
                    subTask: [
                        {
                            taskName: "Your TaskList",
                            isCheck: false,
                            subTask: [],
                            timeLine: localStorage.getItem("timelineNow")
                        },
                    ],
                },
            ]
            : JSON.parse(localStorage.getItem("timelines")).find(d => d.TimelineName === localStorage.getItem("timelineNow")).MainField || "[]")

    const fileRef = useRef<any>();

    const exportJSON = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            localStorage.getItem("MainField") || '[]'
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `TaskListBackup${new Date()}.json`;
        link.click();
    };
    let tasks: any[] = []
    function makeTaskObj(fields: any) {
        console.log("fields", fields);
        let taskFromLocal = JSON.parse(localStorage.getItem("tasks") || `[]`)
        fields?.forEach((element: any) => {
            if (!element?.isCheck && !tasks.some((d) => d?.name === element?.taskName))
                tasks.push({ id: element?.taskName, name: element?.taskName, column: taskFromLocal?.find((d: any) => element?.taskName === d?.name)?.column || COLUMN_NAMES.ACTIVE_TASK });

            if (element?.subTask.length > 0) makeTaskObj(element?.subTask);
        });
    }
    useEffect(() => {
        let TimelineData = JSON.parse(localStorage.getItem("timelines"))
        console.log("TimelineData", typeof TimelineData, typeof JSON.parse(localStorage.getItem("timelines")))
        TimelineData = TimelineData.map(d => {
            if (d.TimelineName === localStorage.getItem("timelineNow")) {
                return { ...d, MainField }
            }
            return d
        })
        localStorage.setItem("timelines", JSON.stringify(TimelineData));
        // localStorage.setItem("MainField", JSON.stringify(MainField));
        makeTaskObj(MainField)
        console.log("task", tasks)
    }, [MainField]);

    const onChangeFile = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const updatedJSON = e.target.files[0];

            let reader: any = new FileReader();

            reader.readAsText(updatedJSON);

            reader.onload = function () {
                localStorage.clear();
                localStorage.setItem("MainField", reader.result);
                console.log("reader.result", reader.result);
                window.location.reload();
            };
        }
    };
    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-12 m-2" style={{ color: "white" }}>
                        <div onClick={() => navigate("/en/MainTimeLine")}><MdArrowBackIos color="white" size={20} />MainTimeline</div>
                    </div>
                </div>
            </div>
            <div className="m-2" style={{ background: "#0807078f", minHeight: "70vh", overflowX: "scroll" }} >
                <Container fluid>
                    <Row>
                        <Col
                            md={6}
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <h1 style={{ color: "#267ba7" }}>TaskList OF {localStorage.getItem("timelineNow")}</h1>

                        </Col>
                        <Col
                            md={6}
                            style={{ display: "flex", justifyContent: "end" }}
                        >
                            <div>
                                <BiImport
                                    size={50}
                                    color="#16600594"
                                    onClick={() => fileRef.current.click()}
                                />
                                <BiExport size={50} color="#ed050594" onClick={exportJSON} />
                                <BsFillFileEarmarkPdfFill
                                    size={40}
                                    color="#ff0000a8"
                                    onClick={() => window.print()}
                                />
                                <input
                                    type="file"
                                    id="input_json"
                                    onChange={onChangeFile}
                                    style={{ display: "none" }}
                                    ref={fileRef}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            md={12}
                            style={{ display: "flex", justifyContent: "start" }}
                        >
                            {MainField?.map((d: any, index: number) => (
                                <List
                                    listObj={d}
                                    index={index}
                                    indexObj={[index]}
                                    setMainField={setMainField}
                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
                {/* <DragDropContextProvider>

          <DAD />
        </DragDropContextProvider> */}


            </div>
            {/* </DndProvider > */}

        </>
    );
}

export default TaskStatus;
