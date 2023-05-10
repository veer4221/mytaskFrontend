// @ts-nocheck
import { Scheduler } from "@aldabil/react-scheduler";
import React, { useEffect, useState } from "react";
import { EventRendererProps } from "@aldabil/react-scheduler/types";

const CalenderTab = (

) => {

    // console.log("EVENT", EVENT)
    // const [currentTask, setCurrentTask] = useState(JSON.parse(localStorage.getItem("currentTask") || "{}"));
    // const [EVENT, setEVENT] = useState([]);
    // const EVENTS = [
    // {
    //     event_id: 1,
    //     title: "Event 1",
    //     start: new Date(new Date("2023-05-03T21:30:00.000Z")),
    //     end: new Date(new Date("2023-05-04T21:59:00.000Z")),
    //     // start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    //     // end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    //     // disabled: true,
    // },
    //     {
    //         event_id: 2,
    //         title: "Event 2",
    //         start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    //         end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    //         admin_id: 2,
    //         color: "#50b500",
    //     },
    //     // {
    //     //   event_id: 3,
    //     //   title: "Event 3",
    //     //   start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    //     //   end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    //     //   admin_id: 1,
    //     //   editable: false,
    //     //   deletable: false
    //     // },
    //     // {
    //     //   event_id: 4,
    //     //   title: "Event 4",
    //     //   start: new Date(
    //     //     new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
    //     //       new Date().getDate() - 2
    //     //     )
    //     //   ),
    //     //   end: new Date(
    //     //     new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
    //     //       new Date().getDate() - 2
    //     //     )
    //     //   ),
    //     //   admin_id: 2,
    //     //   color: "#900000"
    //     // },
    //     // {
    //     //   event_id: 5,
    //     //   title: "Event 5",
    //     //   start: new Date(
    //     //     new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
    //     //       new Date().getDate() - 2
    //     //     )
    //     //   ),
    //     //   end: new Date(
    //     //     new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
    //     //       new Date().getDate() - 2
    //     //     )
    //     //   ),
    //     //   admin_id: 2,
    //     //   editable: true
    //     // },
    //     // {
    //     //   event_id: 6,
    //     //   title: "Event 6",
    //     //   start: new Date(
    //     //     new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
    //     //       new Date().getDate() - 4
    //     //     )
    //     //   ),
    //     //   end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
    //     //   admin_id: 2
    //     // }
    // ];

    // const arrMap = (arr) => {
    //     if (arr?.startDate && arr.endDate) {
    //         setEVENT([...EVENT, {
    //             event_id: arr?.slug,
    //             title: arr?.taskName,
    //             start: new Date(new Date(arr.startTime)),
    //             end: new Date(new Date(arr.endTime)),
    //         },])
    //     }
    //     if (currentTask.subTask.length === 0) return arr
    //     // arrMap(arr.subTask)

    // }
    // const arrMap = (obj) => {
    //     if (obj?.startTime && obj?.endTime && !array1.some(d => d?.event_id == obj?.slug)) {
    //         // setEVENT([...EVENT,
    //         // {
    //         //     event_id: obj?.slug,
    //         //     title: obj?.taskName,
    //         //     start: new Date(new Date(obj.startTime)),
    //         //     end: new Date(new Date(obj.endTime)),
    //         // }
    //         // ])
    //         array1.push({
    //             event_id: obj?.slug,
    //             title: obj?.taskName,
    //             start: new Date(obj.startTime),
    //             end: new Date(obj.endTime)
    //         })
    //     }
    //     if (obj?.subTask.length != 0) obj?.subTask.map(d1 => arrMap(d1))
    //     return obj



    // }
    // var array1 = [{
    //     event_id: 1,
    //     title: "Event 1",
    //     start: new Date("2023-05-03T21:30:00.000Z"),
    //     end: new Date("2023-05-04T21:59:00.000Z"),
    //     // start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    //     // end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    //     // disabled: true,
    // },]
    // useEffect(() => {
    //     console.log("EVENT", EVENT)
    // }, [EVENT])
    // useEffect(() => {
    //     // currentTask
    //     // if (currentTask?.startDate && currentTask.endDate && EVENT.length === 0) {
    //     //     setEVENT([
    //     //         {
    //     //             event_id: currentTask?.slug,
    //     //             title: "Event 1",
    //     //             start: new Date(new Date("2023-05-03T21:30:00.000Z")),
    //     //             end: new Date(new Date("2023-05-04T21:59:00.000Z")),
    //     //         },
    //     //     ]);
    //     // }
    //     // currentTask.subTask.map((d) => arrMap(d))
    //     console.log("currentTask", currentTask)
    //     currentTask.subTask.map((d) => arrMap(d))
    //     console.log("reslult", array1)
    //     setEVENT(array1)


    //     //     }
    //     // })
    // }, []);
    console.log("data::>",


        JSON.parse(localStorage.getItem("celenderData")).map((d) => {
            return {
                event_id: d.event_id,
                title: d.title,
                start: new Date(new Date(d.start)),
                end: new Date(new Date(d.end)),
                color: d?.color

            }
        })


    )
    return (
        <div className="p-1 calender-class">
            <div className="m-3">
                <Scheduler
                    // events={JSON.parse(localStorage.getItem("celenderData")).map((d) => {
                    //     return {
                    //         event_id: d.event_id,
                    //         title: d.title,
                    //         start: new Date(new Date(d.start)),
                    //         end: new Date(new Date(d.end)),

                    //     }
                    // }) || {
                    //     event_id: 1,
                    //     title: "Event 1",
                    //     start: new Date(new Date("2023-05-03T21:30:00.000Z")),
                    //     end: new Date(new Date("2023-05-04T21:59:00.000Z")),
                    //     // start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
                    //     // end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
                    //     // disabled: true,
                    // }}
                    events={JSON.parse(localStorage.getItem("celenderData")).map((d) => {
                        return {
                            event_id: d.event_id,
                            title: d.title,
                            start: new Date(d.start),
                            end: new Date(d.end),
                            color: d?.color

                        }
                    })}
                    eventRenderer={(event: EventRendererProps): any => {
                        console.log("event", event.event);
                    }}
                />
            </div>
        </div>
    );
};

export default CalenderTab;
