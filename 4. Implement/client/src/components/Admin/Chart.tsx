// ChartComponent.tsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent: React.FC = () => {
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => `${(i+1)*5}k`), // X-axis labels
    datasets: [
      {
        label: "Sales",
        data:[72, 93, 65, 78, 24, 84, 26, 4, 16, 51, 27, 96, 63, 29, 54, 74, 17, 76, 66, 38], 
        borderColor: "#3B82F6",
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#E5E7EB", // Light gray for X-axis labels
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#E5E7EB", // Light gray for Y-axis labels
        },
        grid: {
          color: "#374151", // Dark gray grid lines
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
