import React, { Component } from 'react';

import { Chart } from "react-charts";

class BarChart extends Component {

	render(){
        const data = {
            axis: [1, 2, 3],
            lines: [
              { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
              { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
              { data: [{ value: 10 }, { value: 10 }, { value: 10 }] }
            ]
          };
        return(
          <div
          style={{
            width: "400px",
            height: "300px"
          }}
        >
          <Chart
            data={[
              {
                label: "Series 1",
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                label: "Series 2",
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
              }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
    );
}
}



export default BarChart;
