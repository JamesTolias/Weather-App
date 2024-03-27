// components/MyLineChart.tsx
"use client";
import Weather from "../api/weatherAPI.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

const WeatherLineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "10-11",
            "11-11",
            "12-11",
            "13-11",
            "14-11",
            "15-11",
            "16-11",
          ],
          datasets: [
            {
              data: [
                Math.round(Weather.daily[0].temp.day),
                Math.round(Weather.daily[1].temp.day),
                Math.round(Weather.daily[2].temp.day),
                Math.round(Weather.daily[3].temp.day),
                Math.round(Weather.daily[4].temp.day),
                Math.round(Weather.daily[5].temp.day),
                Math.round(Weather.daily[6].temp.day),
              ],
              backgroundColor: "#63FD69",
              borderColor: "lightgreen",
              pointStyle: "circle",
              pointRadius: 10,
              pointHoverRadius: 15,
              label: "Weather Temperature",
            },
          ],
        }}
      />
    </div>
  );
};
export default WeatherLineChart;
