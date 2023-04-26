import { Box, Typography } from '@mui/material';
import React from 'react'
import { Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineChart1({ title, data, xTitle, yTitle }) {
    const sortedData = [...data].sort((a, b) => b[yTitle] - a[yTitle]);

    return (
        <Box display='flex' flexDirection='column'>
            <Typography variant="h3">
                {title}
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={sortedData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 'dataMax']}>
                        <Label value={xTitle} offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey={yTitle} type="category" >
                        <Label value={yTitle} offset={0} position="insideLeft" angle={-90} />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    {/* <Line dataKey="temp" stroke="#8884d8" /> */}
                    <Line dataKey={xTitle} stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
}

export default LineChart1