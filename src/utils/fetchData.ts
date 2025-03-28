// import Papa from "papaparse";

// export const fetchCSVData = async (filePath: string) => {
//   return new Promise((resolve, reject) => {
//     fetch(filePath)
//       .then((response) => response.text())
//       .then((csvText) => {
//         Papa.parse(csvText, {
//           header: true, // Convert CSV rows to objects
//           dynamicTyping: true, // Convert numbers automatically
//           complete: (result) => resolve(result.data),
//           error: (error) => reject(error),
//         });
//       })
//       .catch((error) => reject(error));
//   });
// };


import Papa from "papaparse";

export const fetchCSVData = async (filePath: string) => {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // Ensure headers match column names
          dynamicTyping: true, // Convert numeric values automatically
          skipEmptyLines: true,
          complete: (result) => {
            const formattedData = result.data.map((row: any) => ({
              date: row["Order Date"], // Ensure correct column mapping
              revenue: parseFloat(row["Item Total"] || 0),
              transactions: row["Quantity"] ? parseInt(row["Quantity"]) : 1, 
            }));
            resolve(formattedData);
          },
          error: (error) => reject(error),
        });
      })
      .catch((error) => reject(error));
  });
};
