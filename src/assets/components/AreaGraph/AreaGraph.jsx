import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const AreaGraph = () => {
    const data = [
  {
    name: 'January',
    sleep: 210,
    study: 85,
    play: 30,
    computer: 90,
    mobile: 100,
    prayer: 28, // daily 5×12 mins = 60 mins → 30 days = ~30 hrs
  },
  {
    name: 'February',
    sleep: 200,
    study: 95,
    play: 25,
    computer: 80,
    mobile: 110,
    prayer: 26,
  },
  {
    name: 'March',
    sleep: 215,
    study: 100,
    play: 28,
    computer: 85,
    mobile: 108,
    prayer: 30,
  },
  {
    name: 'April',
    sleep: 205,
    study: 80,
    play: 35,
    computer: 95,
    mobile: 105,
    prayer: 29,
  },
  {
    name: 'May',
    sleep: 220,
    study: 110,
    play: 40,
    computer: 100,
    mobile: 115,
    prayer: 31,
  },
  {
    name: 'June',
    sleep: 210,
    study: 90,
    play: 50,
    computer: 110,
    mobile: 120,
    prayer: 28,
  },
  {
    name: 'July',
    sleep: 225,
    study: 95,
    play: 60,
    computer: 105,
    mobile: 125,
    prayer: 30,
  },
];



    return (
        <div >
            <h2 className='text-2xl mb-5'>Area Graph</h2>
            <div className='bg-white rounded-3xl px-10 py-16'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="purple" />
                        <Bar dataKey="prayer" fill="blue"/>
                        <Tooltip />
                        <Bar dataKey="sleep" fill="green" />
                        <Bar dataKey="study" fill="orange" />
                        <Bar dataKey="play" fill="skyblue" />
                        <Bar dataKey="computer" fill="red" />
                        <Bar dataKey="mobile" fill="pink" />
                       
                        <YAxis stroke="purple" />
                    </BarChart>
                    
                </ResponsiveContainer>  
            </div>
           
        </div>
    );
};

export default AreaGraph;