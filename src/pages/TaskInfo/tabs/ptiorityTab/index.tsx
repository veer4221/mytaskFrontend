// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// import { tasks } from "./tasks";

import "./style.css";
import { MdOutlineClose, MdSync } from "react-icons/md";
import { COLUMN_NAMES } from "../../../../Utils/staticObj";
// import { COLUMN_NAMES } from "../../Utils/staticObj";

// let tasks = [];
let tasks = [
    { id: 1, name: "Item 1", column: COLUMN_NAMES.ACTIVE_TASK },
    { id: 2, name: "Item 2", column: COLUMN_NAMES.ACTIVE_TASK },
    { id: 3, name: "Item 3", column: COLUMN_NAMES.ACTIVE_TASK },
    { id: 4, name: "Item 4", column: COLUMN_NAMES.ACTIVE_TASK },
];

const MovableItem = ({ name, index, currentColumnName, moveCardHandler, setItems }) => {
    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {
            return prevState.map((e) => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column,
                };
            });
        });
    };

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: "Our first type",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCardHandler(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { index, name, currentColumnName, type: "Our first type" },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const { name } = dropResult;
                const { ACTIVE_TASK, HIGH_PRIORITY_TASK, MEDIUM_PRIORITY, LOW_PRIORITY } = COLUMN_NAMES;
                switch (name) {
                    case HIGH_PRIORITY_TASK:
                        changeItemColumn(item, HIGH_PRIORITY_TASK);
                        break;
                    case MEDIUM_PRIORITY:
                        changeItemColumn(item, MEDIUM_PRIORITY);
                        break;
                    case LOW_PRIORITY:
                        changeItemColumn(item, LOW_PRIORITY);
                        break;
                    case ACTIVE_TASK:
                        changeItemColumn(item, ACTIVE_TASK);
                        break;
                    default:
                        break;
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    drag(drop(ref));

    return (
        <div ref={ref} className="movable-item" style={{ opacity }}>
            {name}
        </div>
    );
};

const Column = ({ children, className, title }) => {
    // #5091ff42
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "Our first type",
        drop: () => ({ name: title }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        // Override monitor.canDrop() function
        canDrop: (item) => {
            const { ACTIVE_TASK, HIGH_PRIORITY_TASK, MEDIUM_PRIORITY, LOW_PRIORITY } = COLUMN_NAMES;
            const { currentColumnName } = item;
            return (
                true ||
                currentColumnName === title ||
                (currentColumnName === ACTIVE_TASK && title === HIGH_PRIORITY_TASK) ||
                (currentColumnName === HIGH_PRIORITY_TASK && (title === ACTIVE_TASK || title === MEDIUM_PRIORITY)) ||
                (currentColumnName === MEDIUM_PRIORITY && (title === HIGH_PRIORITY_TASK || title === LOW_PRIORITY)) ||
                (currentColumnName === LOW_PRIORITY && title === MEDIUM_PRIORITY)
            );
        },
    });

    const getBackgroundColor = () => {
        if (isOver) {
            if (canDrop) {
                return "#5b76bc4a";
            } else if (!canDrop) {
                return "#5b76bc4a";
            }
        } else {
            return "";
        }
    };

    return (
        <div ref={drop} className={className} style={{ backgroundColor: getBackgroundColor() }}>
            <p style={{ color: "white" }}>{title}</p>
            {children}
        </div>
    );
};

export const PriorityTab = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("priorityData")) || []);
    const [isDisplay, setisDisplay] = useState(false);
    let syncObject = [];

    const mappingDataFunc = (localData) =>
        localData?.forEach((element) => {
            if (!element?.isCheck) syncObject.push({ id: element?.taskName, name: element?.taskName, column: COLUMN_NAMES.ACTIVE_TASK });
            if (element?.subTask.length > 0) mappingDataFunc(element?.subTask);
        });
    const SyncTask = async () => {
        syncObject = [];
        const localData = JSON.parse(localStorage.getItem("MainField"));
        const tasksItem = JSON.parse(localStorage.getItem("tasks"));
        await mappingDataFunc(localData)
        if (items.length === 0 && tasksItem.length == 0) setItems(syncObject)
        console.log(
            "data::>>>"
            ,
            syncObject?.filter(d => !tasksItem.some(item => item.name === d.name))

        )
        setItems([...items, ...syncObject?.filter(d => !tasksItem.some(item => item.name === d.name))])
        console.log("localData", syncObject);
        // if (items.length)
    };
    // setInterval(function () { SyncTask() }, 10000);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(items));
        // SyncTask()
    }, [items]);
    const moveCardHandler = (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];

        if (dragItem) {
            setItems((prevState) => {
                const coppiedStateArray = [...prevState];

                // remove item by "hoverIndex" and put "dragItem" instead
                const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

                // remove item by "dragIndex" and put "prevItem" instead
                coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

                return coppiedStateArray;
            });
        }
    };

    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item, index) => (
                <MovableItem
                    key={item.id}
                    name={item.name}
                    currentColumnName={item.column}
                    setItems={setItems}
                    index={index}
                    moveCardHandler={moveCardHandler}
                />
            ));
    };
    useEffect(() => {
        setisDisplay(false)
        setTimeout(() => {
            setisDisplay(true)
        }, 1);
    }, [items])
    const { ACTIVE_TASK, HIGH_PRIORITY_TASK, MEDIUM_PRIORITY, LOW_PRIORITY } = COLUMN_NAMES;

    return (
        <div className="m-2 " style={{ background: "#0807078f", minHeight: "70vh", maxWidth: "85vw" }}>
            <div className="d-flex justify-content-between">
                <h1 style={{ color: "#30789e" }}>Task Priority</h1>
                <div>
                    <MdSync color="green" size={40} onClick={SyncTask} />
                </div>
            </div>
            <div className="container1">
                {/* <DndProvider backend={HTML5Backend}> */}
                <Column title={ACTIVE_TASK} className="column do-it-column">
                    {returnItemsForColumn(ACTIVE_TASK)}
                </Column>
                <Column title={HIGH_PRIORITY_TASK} className="column in-progress-column">
                    {returnItemsForColumn(HIGH_PRIORITY_TASK)}
                </Column>
                <Column title={MEDIUM_PRIORITY} className="column awaiting-review-column">
                    {returnItemsForColumn(MEDIUM_PRIORITY)}
                </Column>
                <Column title={LOW_PRIORITY} className="column LOW_PRIORITY-column">
                    {returnItemsForColumn(LOW_PRIORITY)}
                </Column>
                {/* </DndProvider> */}
            </div>
        </div>
    );
};
