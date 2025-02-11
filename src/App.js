import React from "react";
import DataActivityGraph from "./DataActivityGraph";
import DataSourcesInfo from "./DataSourcesInfo";
import AdditionalDataChart from "./AdditionalDataChart";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <DataActivityGraph />
      <DataSourcesInfo />
      <AdditionalDataChart />
    </div>
  );
}

export default App;
