import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Apr', Revenue: 2.1 },
  { month: 'May', Revenue: 2.2 },
  { month: 'Jun', Revenue: 2.3 },
  { month: 'Jul', Revenue: 2.2 },
  { month: 'Aug', Revenue: 2.3 },
  { month: 'Sep', Revenue: 2.4 },
  { month: 'Oct', Revenue: 2.4 },
];

const BAR_COLOR = '#d1a963'; 

function RevenuePerformanceChart () {

   return(
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={revenueData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
      
      <XAxis dataKey="month" />
      
      <YAxis 
        domain={[0, 2.4]} 
        tickFormatter={(value) => `${value.toFixed(1)}`} 
        interval="preserveStartEnd"
      />
      
      <Tooltip formatter={(value: number) => [value.toFixed(1), 'Revenue (M EGP)']} />
      <Legend verticalAlign="bottom" align="center" />
      
      <Bar 
        dataKey="Revenue" 
        fill={BAR_COLOR} 
        name="Revenue (M EGP)" 
      />
    </BarChart>
  </ResponsiveContainer>
   )
};

export default RevenuePerformanceChart;