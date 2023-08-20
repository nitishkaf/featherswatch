const convertArrayToCSV = (array: any[]) => {
  const csvRows = [];
  const headers = Object.keys(array[0]);
  csvRows.push(headers.join(","));

  for (const item of array) {
    const values = headers.map((header) => item[header]);
    csvRows.push(values.join(","));
  }
  return csvRows.join("\n");
};

export { convertArrayToCSV };
