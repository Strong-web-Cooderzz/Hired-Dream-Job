import React, { PureComponent, useState ,useEffect} from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



const data02 = [
  { name: 'Group A', value: 2400, color:'#aaafff' },
  { name: 'Group B', value: 4567, color:'#aaafff' },
  { name: 'Group C', value: 1398, color:'#dddfff' },
  { name: 'Group D', value: 9800, color:'#ffffff' },
  { name: 'Group E', value: 3908, color:'#ffffff' },
  { name: 'Group F', value: 4800, color:'#ffffff' },
];

export default class PieCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie dataKey="value" data={data02} innerRadius={40} outerRadius={80} fill='#ddd' />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
