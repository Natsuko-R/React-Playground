import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { Labels, Temperaturedata, Humiditydata, CO2data, Pressuredata, Luxdata, SoilPHdata, SoilECdata, WinSpeeddata, RainDetectiondata, CO2FlowRatedata, AirFlowRatedata, IrrigationRatedata, PHLiquidFlowRatedata, ECLiquidFlowRatedata, LEDStatedata, SwitchStatedata, AirconStatedata, WindowStatedata } from './data';
import zoomPlugin from "chartjs-plugin-zoom";
import { useEffect } from 'react';

function LineChart(props) {
  // Chart.register(zoomPlugin);
  const chartRef = React.useRef(null);
  const [
    showTemperature,
    showHumidity,
    showCO2,
    showPressure,
    showLux,
    showSoilPH,
    showSoilEC,
    showWinSpeed,
    showRainDetection,
    showCO2FlowRate,
    showAirFlowRate,
    showIrrigationRate,
    showPHLiquidFlowRate,
    showECLiquidFlowRate,
    showLEDState,
    showSwitchState,
    showAirconState,
    showWindowState,
  ] = props.value;

  const data = {
    labels: Labels,
    datasets: []
  };

  if (showTemperature) {
    data.datasets.push({
      label: '気温(°C)',
      data: Temperaturedata.map((datum) => datum.y),
      borderColor: 'red',
      backgroundColor: 'red',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'temperatureYAxis'
    });
  }

  if (showHumidity) {
    data.datasets.push({
      label: '湿度(%)',
      data: Humiditydata.map((datum) => datum.y),
      borderColor: 'blue',
      backgroundColor: 'blue',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'humidityYAxis'
    });
  }

  if (showCO2) {
    data.datasets.push({
      label: 'CO₂濃度(ppm)',
      data: CO2data.map((datum) => datum.y),
      borderColor: 'green',
      backgroundColor: 'green',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'co2YAxis'
    });
  }

  if (showPressure) {
    data.datasets.push({
      label: '気圧(hpa)',
      data: Pressuredata.map((datum) => datum.y),
      borderColor: 'purple',
      backgroundColor: 'purple',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'pressureYAxis'
    });
  }

  if (showLux) {
    data.datasets.push({
      label: '照度(klx)',
      data: Luxdata.map((datum) => datum.y),
      borderColor: 'orange',
      backgroundColor: 'orange',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'luxYAxis'
    });
  }

  if (showSoilPH) {
    data.datasets.push({
      label: '土壌pH',
      data: SoilPHdata.map((datum) => datum.y),
      borderColor: 'teal',
      backgroundColor: 'teal',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'soilPHYAxis'
    });
  }

  if (showSoilEC) {
    data.datasets.push({
      label: '土壌EC（電気伝導度）',
      data: SoilECdata.map((datum) => datum.y),
      borderColor: 'concrete',
      backgroundColor: 'concrete',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'soilECYAxis'
    });
  }

  if (showWinSpeed) {
    data.datasets.push({
      label: '風速・最大瞬間風速',
      data: WinSpeeddata.map((datum) => datum.y),
      borderColor: 'brown',
      backgroundColor: 'brown',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'windSpYAxis'
    });
  }

  if (showRainDetection) {
    data.datasets.push({
      label: '雨検知',
      data: RainDetectiondata.map((datum) => datum.y),
      backgroundColor: 'cyan',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RainDetectionYAxis',
      type: 'bar'
    });
  }

  if (showCO2FlowRate) {
    data.datasets.push({
      label: '炭酸ガス流量',
      data: CO2FlowRatedata.map((datum) => datum.y),
      backgroundColor: 'darkgoldenrod',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'AirFlowRateYAxis',
      type: 'bar'
    });
  }

  if (showAirFlowRate) {
    data.datasets.push({
      label: 'Air流量',
      data: AirFlowRatedata.map((datum) => datum.y),
      backgroundColor: 'darkmagenta',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'AirFlowRateYAxis',
      type: 'bar'
    });
  }

  if (showIrrigationRate) {
    data.datasets.push({
      label: '潅水流量',
      data: IrrigationRatedata.map((datum) => datum.y),
      backgroundColor: 'darksalmon',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RateYAxis',
      type: 'bar'
    });
  }

  if (showPHLiquidFlowRate) {
    data.datasets.push({
      label: 'pH液流量',
      data: PHLiquidFlowRatedata.map((datum) => datum.y),
      backgroundColor: 'darkgreen',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RateYAxis',
      type: 'bar'
    });
  }

  if (showECLiquidFlowRate) {
    data.datasets.push({
      label: 'EC液流量',
      data: ECLiquidFlowRatedata.map((datum) => datum.y),
      backgroundColor: 'hotpink',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RateYAxis',
      type: 'bar'
    });
  }

  if (showLEDState) {
    data.datasets.push({
      label: 'LED状態',
      data: LEDStatedata.map((datum) => datum.y),
      backgroundColor: 'lightgreen',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RainDetectionYAxis',
      type: 'bar'
    });
  }

  if (showSwitchState) {
    data.datasets.push({
      label: '汎用スイッチ状態',
      data: SwitchStatedata.map((datum) => datum.y),
      backgroundColor: 'lightseagreen',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RainDetectionYAxis',
      type: 'bar'
    });
  }

  if (showAirconState) {
    data.datasets.push({
      label: '空調機状態',
      data: AirconStatedata.map((datum) => datum.y),
      backgroundColor: 'midnightblue',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'RainDetectionYAxis',
      type: 'bar'
    });
  }

  if (showWindowState) {
    data.datasets.push({
      label: '窓・カーテン開放度(%)',
      data: WindowStatedata.map((datum) => datum.y),
      backgroundColor: 'orchid',
      borderWidth: 0.5,
      radius: 0,
      yAxisID: 'windowYAxis',
      type: 'bar'
    });
  }

  // const zoomOptions = {
  //   pan: {
  //     enabled: true,
  //     mode: 'x',
  //     modifierKey: 'ctrl',
  //   },
  //   zoom: {
  //     mode: 'x',
  //     drag: true,
  //     speed: 0.1,
  //     threshold: 2,
  //     drag: {
  //       enabled: true
  //     }
  //   }
  // };
  // const zoomStatus = () => zoomOptions.zoom.drag.enabled ? 'enabled' : 'disabled';

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false // Remove x-axis grid lines
        }
      },
      ...(showTemperature && {
        temperatureYAxis: {
          max: 35,
          min: 10,
          position: 'left',
          /*ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return value + '°C';
            }
        },*/
          title: {
            display: true,
            text: '温度 (°C)',
            align: 'end'
          },
          ticks: {
            stepSize: 5, // Sets the step size between each tick
          }
        }
      }),
      ...(showHumidity && {
        humidityYAxis: {
          max: 125,
          min: 0,
          position: 'right',
          title: {
            display: true,
            text: '湿度 (%)',
            align: 'end'
          },
          ticks: {
            stepSize: 25, // Sets the step size between each tick
          }
        }
      }),
      ...(showCO2 && {
        co2YAxis: {
          max: 900,
          min: 400,
          position: 'left',
          title: {
            display: true,
            text: 'CO₂濃度(ppm)',
            align: 'end'
          },
          ticks: {
            stepSize: 100, // Sets the step size between each tick
          }
        }
      }),
      ...(showPressure && {
        pressureYAxis: {
          max: 1200,
          min: 700,
          position: 'right',
          title: {
            display: true,
            text: '気圧(hpa)',
            align: 'end'
          },
          ticks: {
            stepSize: 100, // Sets the step size between each tick
          }
        }
      }),
      ...(showLux && {
        luxYAxis: {
          max: 100,
          min: 0,
          position: 'left',
          title: {
            display: true,
            text: '照度(klx)',
            align: 'end'
          },
          ticks: {
            stepSize: 20, // Sets the step size between each tick
          }
        }
      }),
      ...(showSoilPH && {
        soilPHYAxis: {
          max: 6.5,
          min: 6.0,
          position: 'right',
          ticks: {
            stepSize: 0.1, // Sets the step size between each tick
          }
        }
      }),
      ...(showSoilEC && {
        soilECYAxis: {
          max: 2.0,
          min: 0.5,
          position: 'left',
          ticks: {
            stepSize: 0.3, // Sets the step size between each tick
          }
        }
      }),
      ...(showWinSpeed && {
        windSpYAxis: {
          max: 10,
          min: 0,
          position: 'right',
          ticks: {
            stepSize: 2, // Sets the step size between each tick
          }
        }
      }),
      ...((showRainDetection || showLEDState || showSwitchState || showAirconState) && {
        RainDetectionYAxis: {
          max: 1,
          min: 0,
          position: 'left',
          ticks: {
            stepSize: 1, // Sets the step size between each tick
          }
        }
      }),
      ...((showAirFlowRate || showCO2FlowRate) && {
        AirFlowRateYAxis: {
          max: 75,
          min: 0,
          position: 'right',
          ticks: {
            stepSize: 15, // Sets the step size between each tick
          }
        }
      }),
      ...((showIrrigationRate || showPHLiquidFlowRate || showECLiquidFlowRate) && {
        RateYAxis: {
          max: 50,
          min: 0,
          position: 'left',
          ticks: {
            stepSize: 10, // Sets the step size between each tick
          }
        }
      }),
      ...(showWindowState && {
        windowYAxis: {
          max: 100,
          min: 0,
          position: 'right',
          ticks: {
            stepSize: 20, // Sets the step size between each tick
          }
        }
      })
    },
    // plugins: {
    //   zoom: zoomOptions,
    //   title: {
    //     display: true,
    //     position: 'bottom',
    //     text: (ctx) => 'Zoom: ' + zoomStatus()
    //   },
    //   action: {
    //     name: 'Reset zoom',
    //     handler(chart) {
    //       chart.resetZoom();
    //     }
    //   },
    //   legend: { // 凡例の設定
    //     position: "bottom" // 下に配置
    //   },
    //   customCanvasBackgroundColor: {
    //     color: 'red',
    //   },
    // },
  };

  const resetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  useEffect(() => {

  }, [

  ])

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
      {/* <button className='ml-5 p-1 text-xs text-center text-white rounded-md bg-lime-500' onClick={resetZoom}>Reset Zoom</button> */}
    </div>
  );
}

export default LineChart;
