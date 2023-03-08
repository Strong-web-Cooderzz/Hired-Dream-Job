import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, AreaChart, Area, ResponsiveContainer, } from 'recharts';


const data = [
    {
      name: 'January',
      user: 4000,
      jobs: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      user: 3000,
      jobs: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      user: 2000,
      jobs: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      user: 2780,
      jobs: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      user: 1890,
      jobs: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      user: 2390,
      jobs: 3800,
      amt: 2500,
    },
  ];
  
  

export default class Chart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

    render() {
      return (
        <div className='text-xs' style={{ width: '100%' }}> 
          <ResponsiveContainer width="100%" height={200}>
            <LineChart className='mt-[10px] mr-[30px], ml-0 mb-0'
              width={500}
              height={200}
              data={data}
              syncId="anyId"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis  dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="jobs" stroke="#82ca9d" fill="#82ca9d" />
              <Line type="monotone" dataKey="user" stroke="#82ca9d" fill="#82ca9d" />
              
            </LineChart>
          </ResponsiveContainer>
  
        </div>
      );
    }
  }
  
