import dayjs from "dayjs";

// Define Data Types
export interface SalesRecord {
  date: string;
  revenue: number;
  transactions: number;
}

// Function to transform data
export const processSalesData = (data: SalesRecord[]) => {
  const dailySales: { [key: string]: number } = {};
  const dailyTransactions: { [key: string]: number } = {};
  const monthlySales: { [key: string]: number } = {};
  const monthlyTransactions: { [key: string]: number } = {};

  data.forEach((record) => {
    const date = dayjs(record.date, "MM-DD-YY").format("YYYY-MM-DD"); // Fixing Date Parsing
    const month = dayjs(record.date, "MM-DD-YY").format("YYYY-MM");

    const revenue = record.revenue || 0;
    const transactions = record.transactions || 0;

    dailySales[date] = (dailySales[date] || 0) + revenue;
    dailyTransactions[date] = (dailyTransactions[date] || 0) + transactions;

    monthlySales[month] = (monthlySales[month] || 0) + revenue;
    monthlyTransactions[month] = (monthlyTransactions[month] || 0) + transactions;
  });

  const dailyAOV: { [key: string]: number } = {};
  const monthlyAOV: { [key: string]: number } = {};

  Object.keys(dailySales).forEach((date) => {
    dailyAOV[date] = dailySales[date] / (dailyTransactions[date] || 1);
  });
  Object.keys(monthlySales).forEach((month) => {
    monthlyAOV[month] = monthlySales[month] / (monthlyTransactions[month] || 1);
  });

  return { dailySales, monthlySales, dailyTransactions, monthlyTransactions, dailyAOV, monthlyAOV };
};
