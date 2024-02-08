import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title
);

const labels = [
    "04/06 00:00",
    "04/06 00:15",
    "04/06 00:30",
    "04/06 00:45",
    "04/06 01:00",
    "04/06 01:15",
    "04/06 01:30",
    "04/06 01:45",
    "04/06 02:00",
    "04/06 02:15",
    "04/06 02:30",
    "04/06 02:45",
    "04/06 03:00",
    "04/06 03:15",
    "04/06 03:30",
    "04/06 03:45",
    "04/06 04:00",
    "04/06 04:15",
    "04/06 04:30",
    "04/06 04:45",
    "04/06 05:00",
    "04/06 05:15",
    "04/06 05:30",
    "04/06 05:45",
    "04/06 06:00",
    "04/06 06:15",
    "04/06 06:30",
    "04/06 06:45",
    "04/06 07:00",
    "04/06 07:15",
    "04/06 07:30",
    "04/06 07:45",
    "04/06 08:00",
    "04/06 08:15",
    "04/06 08:30",
    "04/06 08:45",
    "04/06 09:00",
    "04/06 09:15",
    "04/06 09:30",
    "04/06 09:45",
    "04/06 10:00",
    "04/06 10:15",
    "04/06 10:30",
    "04/06 10:45",
    "04/06 11:00",
    "04/06 11:15",
    "04/06 11:30",
    "04/06 11:45",
    "04/06 12:00",
    "04/06 12:15",
    "04/06 12:30",
    "04/06 12:45",
    "04/06 13:00",
    "04/06 13:15",
    "04/06 13:30",
    "04/06 13:45",
    "04/06 14:00",
    "04/06 14:15",
    "04/06 14:30",
    "04/06 14:45",
    "04/06 15:00",
    "04/06 15:15",
    "04/06 15:30",
    "04/06 15:45",
    "04/06 16:00",
    "04/06 16:15",
    "04/06 16:30",
    "04/06 16:45",
    "04/06 17:00",
    "04/06 17:15",
    "04/06 17:30",
    "04/06 17:45",
    "04/06 18:00",
    "04/06 18:15",
    "04/06 18:30",
    "04/06 18:45",
    "04/06 19:00",
    "04/06 19:15",
    "04/06 19:30",
    "04/06 19:45",
    "04/06 20:00",
    "04/06 20:15",
    "04/06 20:30",
    "04/06 20:45",
    "04/06 21:00",
    "04/06 21:15",
    "04/06 21:30",
    "04/06 21:45",
    "04/06 22:00",
    "04/06 22:15",
    "04/06 22:30",
    "04/06 22:45",
    "04/06 23:00",
    "04/06 23:15",
    "04/06 23:30",
    "04/06 23:45",
    "04/06 24:00"
];

const data = {
    labels,
    datasets: [
        {
            type: "line", // 折れ線
            label: "総流量",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            fill: false,
            data: [4792227.0, 4792280.8, 4792759.5, 4793331.1, 4793902.9, 4794419.9, 4794419.9],
            yAxisID: "y1" // optionsで設定したIDを割り振ってY軸を設定する
        },
        {
            type: "bar", // 棒グラフ
            label: "流量",
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "white",
            borderWidth: 2,
            data: [0.0, 273.0, 590.4, 588.0, 588.7, 315.5, 0, 0],
            yAxisID: "y" // Y軸の設定
        }
    ]
};

const options = {
    plugins: {
        title: {
            display: true,
            text: " Hello Natsuki !"
        },
        legend: { // 凡例の設定
            position: "bottom" // 下に配置 // top
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: false
        },
        y: { // Y軸が複数あるのでyとy1のように軸にIDを付ける
            stacked: false,
            max: 700,
            min: 0
        },
        y1: {
            stacked: false,
            position: "right",
            max: 4800000,
            min: 4790000
        }
    }
};

function DeviceList_Valve() {
    return (
        <div className="">
            <Chart type={"bar"} data={data} options={options} />
        </div>
    )
}

export default DeviceList_Valve