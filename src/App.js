import React from "react";

/* Import Links Routes */
import { Route, Routes } from "react-router-dom";

/* Import Layouts Components */
import MenuIcon from "./Layouts/MenuIcon/MenuIcon";

/* Import Layouts Components */
import Home from "./Pages/Home";
import ManagementLetters from "./Pages/ManagementLetters";
import PerformanceOverview from "./Pages/PerformanceOverview";
import StrategicReports from "./Pages/StrategicReports";
import ServicesSolutions from "./Pages/ServicesSolutions";
import OperationalPerformance from "./Pages/OperationalPerformance";
import SustainabilitySocial from "./Pages/SustainabilitySocial";
import FinancialPerformance from "./Pages/FinancialPerformance";
import DownloadCenter from "./Pages/DownloadCenter";

const App = () => {
  return (
    <>
      <MenuIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ManagementLetters" element={<ManagementLetters />} />
        <Route path="/PerformanceOverview" element={<PerformanceOverview />} />
        <Route path="/StrategicReports" element={<StrategicReports />} />
        <Route path="/ServicesSolutions" element={<ServicesSolutions />} />
        <Route
          path="/OperationalPerformance"
          element={<OperationalPerformance />}
        />
        <Route
          path="/SustainabilitySocial"
          element={<SustainabilitySocial />}
        />
        <Route
          path="/FinancialPerformance"
          element={<FinancialPerformance />}
        />
        <Route path="/DownloadCenter" element={<DownloadCenter />} />
      </Routes>
    </>
  );
};

export default App;
