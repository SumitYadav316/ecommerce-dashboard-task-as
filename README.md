Overview

This project is an interactive e-commerce dashboard that visualizes key performance indicators (KPIs) such as daily sales, monthly sales, number of transactions, revenue trends, and average order value (AOV). It uses React.js and Recharts for data visualization.

Approach

1. Data Handling & Filtering

The application processes raw sales data and categorizes it into daily and monthly sales.

It filters data based on user-selected date ranges.

Data is structured to support multiple KPIs.

2. Visualization with Recharts

Daily Sales Chart: Displays total daily sales over a selected period.

Monthly Sales Chart: Aggregates daily sales into monthly trends.

Transactions Chart: Shows the number of transactions per day and per month.

Revenue Trends Chart: Visualizes total revenue trends.

Average Order Value (AOV) Chart: Calculates and displays the AOV.

3. Components & Structure

SalesChart.tsx: Reusable chart component for displaying various KPIs.

DateFilter.tsx: Allows users to filter data by selecting a date range.

Dashboard.tsx: The main dashboard component that integrates all visualizations.

Installation & Setup

1. Clone the Repository

cd ecommerce-dashboard

2. Install Dependencies

npm install

This will install all required dependencies listed in package.json.

3. Run the Application

npm run dev

This will start the development server. Open http://localhost:5173/ in your browser.

How to Use

Select a date range using the date filter.

View KPIs such as sales, transactions, revenue, and AOV.

Hover over charts to see exact values.

Technologies Used

React.js - Frontend framework

Recharts - Data visualization

TypeScript - Type safety


