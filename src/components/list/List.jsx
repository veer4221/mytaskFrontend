import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineNoteAdd, MdOutlineRemoveCircle } from "react-icons/md";
import "./list.css";
import { useNavigate } from "react-router-dom";
import { baseURLProj } from "../../Utils/staticObj";
const List = ({ listObj, index, indexObj, setMainField }) => {
  const navigate = useNavigate();
  let newArr = indexObj;

  const arrMap = (arr, index, e, key) => {
    if (index !== newArr[0]) return arr;
    newArr = newArr?.filter((d, i) => i !== 0);
    if (newArr.length !== 0) {
      arr.subTask = arr?.subTask?.map((data, ind) => arrMap(data, ind, e, key));
      return arr;
    }
    // debugger;
    // if ("isCheck" === key && e === true) {
    //   alert;
    //   let data = JSON.parse(localStorage.getItem("tasks"));
    //   localStorage.setItem("tasks", JSON.stringify(data.filter((d) => d?.name !== arr?.taskName)));
    // }
    if (key === "removeTask")
      return {
        ...arr,
        subTask: [],
      };
    else if (key === "modifyTask")
      return {
        ...JSON.parse(localStorage.getItem("currentTask")),
      };
    else if (key !== "subTask")
      return {
        ...arr,
        [key]: e,
      };
    else
      return {
        ...arr,
        subTask: [...arr.subTask, e],
      };
  };

  const onTaskCheck = (e) => setMainField((prev) => prev.map((dtt, index) => arrMap(dtt, index, e?.target.checked, "isCheck")));

  const onToggleFunc = () => setMainField((prev) => prev.map((dtt, index) => arrMap(dtt, index, !listObj.isRander, "isRander")));
  // `${`[${index}]`} ${e}`;
  const onAddTask = () => {
    let data = prompt("enter task Name::>");

    if (data)
      setMainField((prev) =>
        prev.map((dtt, index) =>
          arrMap(
            dtt,
            index,
            {
              taskName: data || `${`[${index}]`} ${data}`,
              slug:
                data.split(" ").join("-") +
                "-" +
                `${[...Array(20)].map((_) => (Math.random() * 10) | 0).join`` + ((1 + Math.random() * 9) | 0)}`,
              TaskStatus: "TODO",
              Priority: "",
              startTime: "",
              endTime: "",
              DESC: {
                titel: "",
                notes: "",
              },
              Comment: [
                {
                  Date: "2/5/2023 12:14:9",
                  image: baseURLProj + "/image/TaskImage/task1682502613970.png",
                  text: "this is comment....this is comment....this is comment....this is comment....this is comment....this is comment....this is comment....this is comment....this is comment....this is comment...",
                },
              ],
              taskSubTimeLine: [],
              isCheck: false,
              subTask: [],
              isRander: true,
              timeLine: localStorage.getItem("timelineNow"),
            },
            "subTask"
          )
        )
      );
  };
  const removeTask = () => setMainField((prev) => prev.map((dtt, index) => arrMap(dtt, index, listObj?.taskName, "removeTask")));
  const ModifyTask = () => setMainField((prev) => prev.map((dtt, index) => arrMap(dtt, index, listObj?.taskName, "modifyTask")));

  return (
    <>
      <ol style={{ listStyleType: "none" }}>
        <li style={{ minWidth: "350px" }}>
          <div>
            <div className="">
              {listObj?.subTask.length !== 0 ? (
                !listObj?.isRander ? (
                  <FaAngleDown onClick={onToggleFunc} size={20} color="white" />
                ) : (
                  <FaAngleUp onClick={onToggleFunc} size={20} color="white" />
                )
              ) : (
                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
              )}
              <MdOutlineNoteAdd size={20} color="#17d5005e" onClick={onAddTask} />
              <MdOutlineRemoveCircle size={20} color="#ff0000a8" onClick={removeTask} />
              <input
                type="checkbox"
                className="larger"
                id="vehicle1"
                checked={listObj?.isCheck}
                name="vehicle1"
                value="Bike"
                style={{
                  width: "50px",
                }}
                onChange={onTaskCheck}
              />

              <span
                style={{ color: "white" }}
                onClick={() => {
                  // alert();
                  localStorage.setItem("currentTask", JSON.stringify(listObj));
                  navigate(`/en/taskinfo`);
                  console.log("listObj");
                }}
              >
                {" "}
                {listObj?.taskName}
              </span>
            </div>
          </div>
        </li>

        <li>
          {!listObj?.isRander &&
            listObj?.subTask?.map((sub, i) => {
              return <List listObj={sub} index={i} indexObj={[...indexObj, i]} ModifyTask={ModifyTask} setMainField={setMainField} />;
            })}
        </li>
      </ol>
    </>
  );
};

export default List;
