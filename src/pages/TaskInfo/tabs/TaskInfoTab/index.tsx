import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { AiFillFileAdd, AiFillSave, AiOutlineEdit } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { convertBase64 } from "../../../../Utils/ImageConverter";
import { IMAGEUPLOAD } from "../../../../Utils/networkManger/api";
import { MdFileUpload } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSyncAlt } from "react-icons/fa";

// import { FcSynchronize } from "react-icons/fa";
// import { IoSyncOutline } from "react-icons/io"

const TaskinfoTab = () => {
    var currentdate: any = new Date();
    const [isDescChange, setIsDescChange] = useState(false);
    const [dataobj, setdataobj] = useState(JSON.parse(localStorage.getItem("currentTask") || "{}"));

    const [field, setField] = useState(JSON.parse(localStorage.getItem("timelines") || '[]').find((d: any) => d.TimelineName
        === localStorage.getItem("timelineNow")));
    const [comment, setComment] = useState({
        text: "",
        Date: "",
        image: "",
    });
    const [DESC, setDESC] = useState({
        notes: "",
        titel: "",
    });
    // const dataobj = JSON.parse(localStorage.getItem("currentTask") || "{}");
    const timelinesData = JSON.parse(localStorage.getItem("timelines") || "[]");
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const imgUploadRef = useRef<HTMLInputElement>(null);

    var [a, seta] = useState(true)
    // const ModifyTask = () => setMainField((prev) => prev.map((dtt, index) => arrMap(dtt, index, listObj?.taskName, "modifyTask")));
    useEffect(
        () => {

            console.log("result", dataobj)
        }
        , [dataobj]
    )

    //  [JSON.parse(localStorage.getItem("currentTask") || "{}")]);


    const mapArry = (arr: any) => {
        if (arr?.slug === dataobj?.slug) return dataobj
        if (arr.subTask.length === 0) return arr
        arr.subTask = arr.subTask.map((d1: any) => mapArry(d1))
        return arr
    }

    const syncData = () => {

        // const res = field.MainField.map((d: any) => {
        //     if (d.slug === dataobj.slug)
        //         return dataobj
        //     if (d.subTask.length === 0) return d
        //     if (d.subTask.length !== 0) {
        //         d.subTask = d.subTask.map((d1: any) => mapArry(d1))
        //         return d
        //     }
        // })
        localStorage.setItem("timelines", JSON.stringify(
            JSON.parse(localStorage.getItem("timelines") || '[]').map((d: any) => {
                if (d.TimelineName === localStorage.getItem("timelineNow")) {
                    d.MainField = field.MainField.map((d: any) => {
                        if (d.slug === dataobj.slug)
                            return dataobj
                        if (d.subTask.length === 0) return d
                        if (d.subTask.length !== 0) {
                            d.subTask = d.subTask.map((d1: any) => mapArry(d1))
                            return d
                        }
                    })
                }
                return d
            })
        ))

        toast.success("data synced successfully")
    }


    console.log("dataobj", dataobj)
    return (
        <span style={{ color: "white" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <table>
                            <tr>
                                <td width={"30%"} >Task Name</td>
                                <td>: {dataobj?.taskName}</td>
                            </tr>
                            <tr>
                                <td width={"30%"} onClick={() => seta(!a)}>Task Status</td>
                                <td className="d-flex justify-content-between">
                                    <span className="mr-2">:&nbsp;</span>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={dataobj?.TaskStatus}
                                        onChange={(e) => {
                                            // dataobj.TaskStatus = e.target.value;
                                            setdataobj({ ...dataobj, TaskStatus: e.target.value })
                                            localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                        }}
                                    >
                                        <option value="TODO" selected>
                                            TODO
                                        </option>
                                        <option value="IN-ROGRESS">IN-ROGRESS</option>
                                        <option value="READY-TO-CHECK">READY-TO-CHECK</option>
                                        <option value="BLOCK">BLOCK</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td width={"30%"}>Priority</td>
                                <td className="d-flex justify-content-between">
                                    {" "}
                                    <span className="mr-2">:&nbsp;</span>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={dataobj?.Priority}
                                        onChange={(e) => {
                                            // dataobj.Priority = e.target.value;
                                            setdataobj({ ...dataobj, Priority: e.target.value })
                                            localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                        }}
                                    >
                                        <option selected>Active Task</option>
                                        <option value="LOW_PRIORITY">LOW_PRIORITY</option>
                                        <option value="MEDIUM_PRIORITY">MEDIUM PRIORITY</option>
                                        <option value="HIGH_PRIORITY">HIGH PRIORITY</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td width={"30%"}>TIME </td>
                                <td className="d-flex ">
                                    {!isDescChange ? <>
                                        START:{" "}
                                        {JSON.stringify(dataobj?.startTime || "")}
                                        <br />
                                        END &nbsp;&nbsp;&nbsp;:
                                        {JSON.stringify(dataobj?.endTime || "")}
                                    </> :

                                        <>
                                            {/* START: */}
                                            <input type="date" onChange={(e) => {
                                                setdataobj({ ...dataobj, startTime: e.target.value })
                                            }} />
                                            <input type="time"
                                                onChange={(e) => {
                                                    setdataobj({ ...dataobj, sTime: e.target.value })
                                                }} />
                                            <input type="date" onChange={(e) => {
                                                setdataobj({ ...dataobj, endTime: e.target.value })
                                            }} />
                                            <input type="time" onChange={(e) => {
                                                setdataobj({ ...dataobj, eTime: e.target.value })
                                            }} />
                                            {/* <LocalizationProvider size="small" dateAdapter={AdapterDayjs}>
                                                <MobileDateTimePicker
                                                    sx={{ color: "white" }}
                                                    // value={Date.parse("2023-05-02T19:35:00.000Z")}
                                                    // value={currentdate}
                                                    onChange={(e: any) => {
                                                        // dataobj.startTime = e;
                                                        console.log("e", e)
                                                        setdataobj({ ...dataobj, startTime: e })

                                                        localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                                    }}
                                                />
                                                <span className="vertical-center">END:</span>
                                            </LocalizationProvider> */}


                                            {/* <LocalizationProvider size="small" dateAdapter={AdapterDayjs}>
                                                <MobileDateTimePicker
                                                    sx={{ color: "white" }}
                                                    onChange={(e: any) => {
                                                        dataobj.endTime = e;
                                                        setdataobj({ ...dataobj, endTime: e })

                                                        localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                                    }}
                                                />
                                            </LocalizationProvider> */}
                                        </>
                                    }

                                </td>
                            </tr>
                            {/* <tr>
                                <td width={"30%"}>END TIME </td>
                                <td className="d-flex ">    <LocalizationProvider size="small" dateAdapter={AdapterDayjs}>
                                    <MobileDateTimePicker sx={{ color: 'white' }} />
                                </LocalizationProvider>

                                </td>
                            </tr> */}
                            <tr>
                                <td width={"30%"}>
                                    DESC{" "}
                                    {!isDescChange ? (
                                        <AiOutlineEdit onClick={() => setIsDescChange(true)} />
                                    ) : (
                                        <AiFillSave onClick={() => setIsDescChange(false)} />
                                    )}{" "}
                                </td>
                                <td>
                                    {isDescChange ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => {
                                                // dataobj.DESC.titel = e.target.value;
                                                setdataobj({ ...dataobj, DESC: { ...dataobj.DESC, titel: e.target.value } })

                                                localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                            }}
                                            value={dataobj?.DESC?.titel}
                                        />
                                    ) : (
                                        `${JSON.stringify(dataobj?.DESC?.titel)}`
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td width={"30%"}></td>
                                <td>
                                    <p>
                                        {isDescChange ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                // value={dataobj.DESC.notes}
                                                value={dataobj?.DESC?.notes}
                                                onChange={(e) => {
                                                    // dataobj.DESC.notes = e.target.value;
                                                    setdataobj({ ...dataobj, DESC: { ...dataobj.DESC, notes: e.target.value } })
                                                    localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                                }}
                                            />
                                        ) : (
                                            `${`=>`} ${dataobj?.DESC?.notes}`
                                        )}
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-4 d-flex ">

                        {/* <button>SYNC</button> */}

                        <div className="justify-content-center">

                            <img src={dataobj.image ? `http://localhost:5000${dataobj.image}` : `http://localhost:5000/image/TaskImage/task1683175039380.png`} width={"300px"} height={"300px"} onClick={() => imgUploadRef.current?.click()} />
                        </div>


                        <input
                            type="file"
                            onChange={() => { }}
                            hidden
                            ref={imgUploadRef}
                            onChangeCapture={async (event) => {

                                const imageObj = await IMAGEUPLOAD({ image: await convertBase64(event?.currentTarget?.files && event?.currentTarget?.files[0]) })
                                setdataobj({ ...dataobj, image: imageObj.data })

                                // dataobj.image = imageObj.data
                                localStorage.setItem("currentTask", JSON.stringify(dataobj));
                            }}
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <FaSyncAlt color="white" size={30} onClick={syncData} />
                        {/* <MdFileUpload color="white" size={30} onClick={syncData} /> */}
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <input
                            type="text"
                            className="form-control"
                            style={{ background: "black", color: "white" }}
                            value={comment.text}
                            onChange={(e) => {
                                setComment({ ...comment, text: e.target.value });
                            }}
                        />
                        <input
                            type="file"
                            onChange={() => { }}
                            hidden
                            ref={fileUploadRef}
                            onChangeCapture={async (event) => {

                                const imageObj = await IMAGEUPLOAD({ image: await convertBase64(event?.currentTarget?.files && event?.currentTarget?.files[0]) })

                                setComment({ ...comment, image: imageObj.data });
                            }}
                        />
                        <AiFillFileAdd size={50} onClick={() => fileUploadRef.current?.click()} />

                        <button
                            className="btn btn-info"
                            onClick={() => {
                                // setComment({
                                //     ...comment,
                                //     Date:
                                //         currentdate.getDate() +
                                //         "/" +
                                //         (currentdate.getMonth() + 1) +
                                //         "/" +
                                //         currentdate.getFullYear() +
                                //         " " +
                                //         currentdate.getHours() +
                                //         ":" +
                                //         currentdate.getMinutes() +
                                //         ":" +
                                //         currentdate.getSeconds(),
                                // });
                                setdataobj({
                                    ...dataobj, Comment:

                                        [...dataobj.Comment, {
                                            ...comment,
                                            Date:
                                                currentdate.getDate() +
                                                "/" +
                                                (currentdate.getMonth() + 1) +
                                                "/" +
                                                currentdate.getFullYear() +
                                                " " +
                                                currentdate.getHours() +
                                                ":" +
                                                currentdate.getMinutes() +
                                                ":" +
                                                currentdate.getSeconds(),
                                        }]
                                })
                                localStorage.setItem("currentTask", JSON.stringify(dataobj));
                                setComment({
                                    text: "",
                                    Date: "",
                                    image: "",
                                })
                            }}
                        >
                            Upload
                        </button>
                    </div>

                    {dataobj.Comment.map((d: any, i: any) => (
                        <div className="row mt-1">
                            <div className="col-1 mt-1">
                                <img src={`http://localhost:5000${d.image}`} width={80} height={50} />
                            </div>
                            <div className="col-11">
                                <>
                                    <h5 style={{ color: "#00ff089c" }}>
                                        {d.Date}
                                        {/* {currentdate.getDate() +
                                            "/" +
                                            (currentdate.getMonth() + 1) +
                                            "/" +
                                            currentdate.getFullYear() +
                                            " " +
                                            currentdate.getHours() +
                                            ":" +
                                            currentdate.getMinutes() +
                                            ":" +
                                            currentdate.getSeconds()} */}
                                    </h5>
                                </>
                                {""}
                                <p>{d.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </span>
    );
};

export default TaskinfoTab;
