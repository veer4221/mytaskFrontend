// @ts-nocheck

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Scheduler } from "@aldabil/react-scheduler";
import { EventRendererProps } from "@aldabil/react-scheduler/types";
import { PriorityTab } from "./ptiorityTab";
import TimeLine from "./TimeLine";
import { Table } from "react-bootstrap";
import TaskinfoTab from "./TaskInfoTab";
import CalenderTab from "./calender";
import { COLUMN_NAMES } from "../../../Utils/staticObj";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TaskTabs() {
  const [value, setValue] = React.useState(0);
  const [currentTask, setCurrentTask] = React.useState(JSON.parse(localStorage.getItem("currentTask") || "{}"));
  const [EVENT, setEVENT] = React.useState([]);
  var array1 = []
  var array2 = []
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getColor = (priority) => {
    console.log("priority", priority)
    switch (priority) {
      case "LOW_PRIORITY":
        return "#41E614"
      case "MEDIUM_PRIORITY":
        return "#E6B514"
      case "HIGH_PRIORITY":
        return "#E62214"
      default:
        return "#50b500"
    }
  }
  const getPriorityOBJ = (obj) => {
    switch (obj) {
      case "LOW_PRIORITY":
        return COLUMN_NAMES.LOW_PRIORITY
      case "MEDIUM_PRIORITY":
        return COLUMN_NAMES.MEDIUM_PRIORITY
      case "HIGH_PRIORITY":
        return COLUMN_NAMES.HIGH_PRIORITY_TASK
      default:
        return COLUMN_NAMES.ACTIVE_TASK
    }
  }
  // { id: element?.taskName, name: element?.taskName, column: COLUMN_NAMES.ACTIVE_TASK }
  const mappARR = (data: any) => {
    console.log("dt:>", data)
    localStorage.setItem("count", JSON.parse(localStorage.getItem("count")) + 1)

    if (data.startTime && data.endTime && !array1.some((d) => data?.slug === d?.event_id)) {

      array1.push({ start: data.startTime + " " + data?.sTime || "00:00", end: data.endTime + " " + data?.eTime || "00:00", event_id: data?.slug, title: data?.taskName, color: getColor(data?.Priority) })
      array2.push({
        id: data?.slug,
        name: data?.taskName,
        column: getPriorityOBJ(data?.Priority)
      })
    }
    if (data?.subTask.length !== 0) data?.subTask.forEach((d) => mappARR(d))

  }

  React.useEffect(() => {
    localStorage.setItem("count", JSON.stringify(0))
    const data = JSON.parse(localStorage.getItem("currentTask"));
    console.log("data", data);
    if (data.startTime && data.endTime && !array1.some((d) => data?.slug === d?.event_id)) {
      localStorage.setItem("count", JSON.stringify(1))
      array1.push({ start: data.startTime + " " + data?.sTime || "00:00", end: data.endTime + " " + data?.eTime || "00:00", event_id: data?.slug, title: data?.taskName, color: getColor(data?.Priority) })
      // Priority
      array2.push({
        id: data?.slug,
        name: data?.taskName,
        column: getPriorityOBJ(data?.Priority)
      })

    }
    if (data?.subTask.length !== 0) data?.subTask.forEach((d) => mappARR(d))
    localStorage.setItem("celenderData", JSON.stringify(array1));
    localStorage.setItem("priorityData", JSON.stringify(array2));

    //  {
    //   event_id: 1,
    //   title: "Event 1",
    //   start: new Date(new Date("2023-05-03T21:30:00.000Z")),
    //   end: new Date(new Date("2023-05-04T21:59:00.000Z"))
    // }
  }, []);
  React.useEffect(() => {
    console.log("EVENT::>", array1);
    // localStorage.setItem("celenderData", JSON.stringify(array1));
  }, [array1]);

  return (
    <Box sx={{ width: "100%", background: "#0f0f0f" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Task Info" sx={{ color: "white" }} {...a11yProps(0)} />
          <Tab label="calender" sx={{ color: "white" }} {...a11yProps(1)} />
          <Tab label="Task priority" sx={{ color: "white" }} {...a11yProps(2)} />
          <Tab label="task timeline" sx={{ color: "white" }} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TaskinfoTab />
      </TabPanel>
      <TabPanel value={value} index={3} sx={{ margin: "0" }}>
        {/* <div className="p-5" style={{ padding: "100px", maxHeight: "70vh", overflowX: "auto", overflowY: "auto" }}> */}

        <TimeLine />

        {/* </div> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CalenderTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ overflow: "auto" }} className="d-flex justify-content-center">
          <PriorityTab />
        </div>
      </TabPanel>
    </Box>
  );
}
