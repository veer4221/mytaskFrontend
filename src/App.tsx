import { BrowserRouter, Route, Outlet, Navigate, Routes } from "react-router-dom";
import "./App.css";
import AuthForms from "./pages/AuthForms";
import AuthOutlate from "./pages/AuthOutlate";
import TransactionForm from "./pages/TransactionForm";
import Home from "./pages/home/Home";
import { ToastContainer, toast } from "react-toastify";
import TaskStatus from "./pages/taskStatus";
import { DAD } from "./pages/DAD";
import TimeLine from "./pages/TaskInfo/tabs/TimeLine";
import MainTimeLine from "./pages/MainTimeLine";
import TaskInfo from "./pages/TaskInfo";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/en" element={<AuthOutlate />}>
            <Route path="TransactionForm" element={<TransactionForm />} />
            <Route path="MainTimeLine" element={<MainTimeLine />} />
            <Route path="TaskList" element={<TaskStatus />} />
            <Route path="Taskinfo" element={<TaskInfo />} />
            <Route path="ActiveTask" element={<DAD />} />
            <Route path="TimeLine" element={<TimeLine />} />
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/" element={true || localStorage.getItem("token") ? <Outlet /> : <Navigate to="/en" replace />}>
            <Route path="" element={<AuthForms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
