import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const complaintsData = [
    { name: 'Apr', Total: 156, Resolved: 124 },
    { name: 'May', Total: 178, Resolved: 156 },
    { name: 'Jun', Total: 192, Resolved: 171 }, 
    { name: 'Jul', Total: 156, Resolved: 145 },
    { name: 'Aug', Total: 143, Resolved: 138 },
    { name: 'Sep', Total: 138, Resolved: 132 },
    { name: 'Oct', Total: 142, Resolved: 124 },
];

function ComplaintsOverviewChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={complaintsData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* Total Complaints Area - Red color */}
                <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#ac4143"
                    fill="#ac4143"
                    fillOpacity={0.2}
                />
                {/* Resolved Complaints Area - Green color */}
                <Area
                    type="monotone"
                    dataKey="Resolved"
                    stroke="#22c55e"
                    fill="#22c55e" 
                    fillOpacity={0.2}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ComplaintsOverviewChart;