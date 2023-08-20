// This route is only used for testing components!
// Remove once the project is done!

import { convertArrayToCSV } from "@/utils/arrayToCsv";
import { Button } from "@chakra-ui/react";

const mockArray: any = [
  {
    id: 1,
    eventName: "Sample Event 1",
    ticketsSold: 50,
    revenue: 1000,
  },
  {
    id: 2,
    eventName: "Sample Event 2",
    ticketsSold: 75,
    revenue: 1500,
  },
  {
    id: 3,
    eventName: "Sample Event 3",
    ticketsSold: 30,
    revenue: 600,
  },
];

const TestRoute = () => {
  const handleDownload = () => {
    const csvContent = convertArrayToCSV(mockArray);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mock-download.csv";
    link.click();
  };
  return <Button onClick={handleDownload}>Download</Button>;
};

export default TestRoute;
