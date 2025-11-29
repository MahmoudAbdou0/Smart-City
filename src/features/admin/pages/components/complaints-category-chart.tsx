import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,PieLabelRenderProps } from 'recharts';

const data = [
    { name: 'Infrastructure', value: 35 }, // Top section
    { name: 'Utilities', value: 28 }, // Left section
    { name: 'Environment', value: 22 }, // Bottom section
    { name: 'Transportation', value: 15 }, // Small right section
  ];
  
  // Custom colors derived from your screenshot
  const COLORS = [
      '#d1a963', // Infrastructure 
      '#ac4143', // Utilities 
      '#3b82f6', // Environment
      '#22c55e', // Transportation 
  ];
// ---  Custom Label Function ---
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: PieLabelRenderProps) => {
    // Destructure required props
    const { cx, cy, midAngle, outerRadius, index } = props;
    
    // Safety checks for required properties
    if (cx == null || cy == null || midAngle == null || outerRadius == null || index == null) {
      return null;
    }
    // Start at the outer edge (outerRadius) and add an offset (e.g., 30)
    const offset = 30; 
    const finalRadius = outerRadius + offset;

    // --- FIX 2: Correct X and Y coordinate calculation ---
    // X calculation uses cx, Y calculation uses cy
    const x = cx + finalRadius * Math.cos(-midAngle * RADIAN);
    const y = cy + finalRadius * Math.sin(-midAngle * RADIAN);
    
    const entry = data[index];
    const labelColor = COLORS[index % COLORS.length];
    const labelText = `${entry.name} ${entry.value}%`;

    // Determine the text anchor to prevent the label from overlapping the chart center
    const textAnchor = x > cx ? 'start' : 'end'; 
    
    return (
        <text 
              x={x} 
              y={y} 
              fill={labelColor} 
              textAnchor={textAnchor} 
              dominantBaseline="central"
              fontSize={14}
              fontWeight="medium" 
            >
              {labelText}
          </text>
    );
  };
  
const ComplaintsByCategoryChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Tooltip formatter={(value) => `${value}%`} /> 
      
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%" 
        cy="50%" 
        innerRadius={0} 
        outerRadius={100} 
        fill="#8884d8"
        // --- Apply Custom Label and Line ---
        labelLine={false} // Custom component/function for the line
        label ={renderCustomizedLabel}  // Custom component/function for the text label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default ComplaintsByCategoryChart;