import React from "react";
import './PieRechart.css'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class PieRechart extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
   pieData = [
      {
         name: "Google",
         value: 54.85
      },
      {
         name: "Facebook",
         value: 47.91
      },
      {
         name: "Youtube",
         value: 16.85
      },
      {
         name: "Instagram",
         value: 16.14
      },
      {
         name: "Twitter",
         value: 10.25
      }
   ];
  
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "10px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            
         </div>
      );
   }
   return null;
};
render() {
   return (
      <div>
          
      <PieChart width={350} height={400} className='piechart-table'>
       
      <Pie
         data={this.pieData}
         color=""
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
       
         fill="#8884d8"
      >
         
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
     
      <Tooltip content={<this.CustomTooltip />} />
      <Legend/>
      </PieChart>
      
      </div>
      );
   }
}
export default PieRechart;