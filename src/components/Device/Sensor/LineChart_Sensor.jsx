import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryLegend } from 'victory';
import { Temperaturedata, Humiditydata, CO2data, Pressuredata, Luxdata } from './DummyData';

const data = [
  { name: "温度", symbol: { type: "square", fill: "red" } },
  { name: "湿度", symbol: { type: "square", fill: "blue" } },
  { name: "CO₂濃度", symbol: { type: "circle", fill: "green" } },
  { name: "気圧", symbol: { type: "square", fill: "purple" } },
  { name: "照度 ", symbol: { type: "square", fill: "orange" } }
];

function LineChart_Sensor({ value }) {
  const [showTemperature, showHumidity, showCO2, showPressure, showLux] = value;

  return (
    <VictoryChart theme={VictoryTheme.material.dark}>
      <VictoryLegend x={50} y={0}
        orientation="horizontal"
        gutter={30}
        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
        data={data}
      />
      <VictoryAxis style={{
        axis: { stroke: 'black', strokeWidth: 2 },
        tickLabels: { fontSize: 13, fontFamily: 'Arial', padding: 5 }
      }}
        label="時間"
        tickFormat={['7', '9', '11', '13', '15', '17', '19', '21', '23', '24']}
      />
      <VictoryAxis style={{
        axis: { stroke: 'black', strokeWidth: 2 },
        tickLabels: { fontSize: 13, fontFamily: 'Arial', padding: 5 }
      }}
        orientation="left"
        dependentAxis />

      {showTemperature &&
        <VictoryLine data={Temperaturedata} style={{ data: { stroke: "red" } }} />
      }
      {showHumidity &&
        <VictoryLine data={Humiditydata} style={{ data: { stroke: "blue" } }} />
      }
      {showCO2 &&
        <VictoryLine data={CO2data} style={{ data: { stroke: "green" } }} />
      }
      {showPressure &&
        <VictoryLine data={Pressuredata} style={{ data: { stroke: "purple" } }} />
      }
      {showLux &&
        <VictoryLine data={Luxdata} style={{ data: { stroke: "orange" } }} />
      }

    </VictoryChart>
  );
}

export default LineChart_Sensor;
