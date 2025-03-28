import React, { useEffect, useState } from "react";
import { fetchCSVData } from "./utils/fetchData";
import { processSalesData, SalesRecord } from "./utils/processData";
import SalesChart from "./components/SalesChart";
import { DateFilter } from "./components/DateFilter";

function App() {
  const [processedData, setProcessedData] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    fetchCSVData("/data/sales_data.csv")
      .then((parsedData) => {
        const transformedData = processSalesData(parsedData as SalesRecord[]);
        setProcessedData(transformedData);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const filterData = (dataObject: Record<string, number>) => {
    const dataArray = Object.entries(dataObject).map(([date, value]) => ({
      date,
      value,
    }));

    if (!startDate || !endDate) return dataArray;

    return dataArray.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">E-commerce Dashboard</h1>

      <DateFilter
        startDate={startDate}
        endDate={endDate}
        onChange={([start, end]) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />

      {processedData && (
        <>
          {/* Daily & Monthly Sales */}
          <SalesChart
            data={filterData(processedData.dailySales)}
            title="Daily Sales"
            color="#8884d8"
          />
          <SalesChart
            data={filterData(processedData.monthlySales)}
            title="Monthly Sales"
            color="#82ca9d"
          />

          {/* Number of Transactions */}
          <SalesChart
            data={filterData(processedData.dailyTransactions)}
            title="Daily Transactions"
            color="#ff7300"
          />
          <SalesChart
            data={filterData(processedData.monthlyTransactions)}
            title="Monthly Transactions"
            color="#ffcc00"
          />

          {/* Revenue Trends */}
          <SalesChart
            data={filterData(processedData.dailyAOV)}
            title="Daily Revenue"
            color="#8884d8"
          />
        </>
      )}
    </div>
  );

}

export default App;
