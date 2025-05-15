import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { name: 'Q1', uv: 40000, pv: 24000 },
    { name: 'Q2', uv: 30000, pv: 13980 },
    { name: 'Q3', uv: 20000, pv: 9800 },
    { name: 'Q4', uv: 27800, pv: 39080 },
  ];
  
  export default function MainGraph() {
    return (
      <div className="flex flex-col max-w-screen md:flex-row gap-4 mt-6">
        
        {/* Analytic chart */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Analytic</h2>
            <span className="text-sm text-gray-400">Sales Estimation</span>
          </div>
  
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="pv" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Session by Country */}
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-[30%]">
          <h2 className="text-lg font-semibold mb-4">Session by Country</h2>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'United States', value: 85, color: 'bg-purple-500', flag: '🇺🇸' },
              { name: 'Japan', value: 70, color: 'bg-purple-400', flag: '🇯🇵' },
              { name: 'Indonesia', value: 65, color: 'bg-purple-300', flag: '🇮🇩' },
              { name: 'Venezuela', value: 45, color: 'bg-purple-200', flag: '🇻🇪' },
              { name: 'South Korea', value: 35, color: 'bg-purple-100', flag: '🇰🇷' },
            ].map((country) => (
              <li key={country.name} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </div>
                <div className="w-[50%] bg-gray-100 rounded-full h-2 ml-2">
                  <div className={`h-2 rounded-full ${country.color}`} style={{ width: `${country.value}%` }}></div>
                </div>
                <span className="ml-2">{country.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  