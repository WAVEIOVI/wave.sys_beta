import React from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';

export const CompanyValuesRadar = ({ data }) => {
  const defaultData = [
    { subject: 'Quality', value: 95, fullMark: 100 },
    { subject: 'Response', value: 88, fullMark: 100 },
    { subject: 'Expertise', value: 92, fullMark: 100 },
    { subject: 'Reliability', value: 90, fullMark: 100 },
    { subject: 'Innovation', value: 85, fullMark: 100 },
    { subject: 'Coverage', value: 94, fullMark: 100 },
  ];
  const chartData = data || defaultData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
          <PolarGrid stroke="#374151" strokeOpacity={0.3} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#64748b', fontSize: 10 }}
          />
          <Radar
            name="SS+ Performance"
            dataKey="value"
            stroke="#06B6D4"
            fill="#06B6D4"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export const AuthorityLimitsChart = ({ data }) => {
  const defaultData = [
    { name: 'Board', limit: 30000, color: '#EF4444' },
    { name: 'Manager', limit: 25000, color: '#F59E0B' },
    { name: 'Sales Resp', limit: 10000, color: '#06B6D4' },
    { name: 'Ops Resp', limit: 5000, color: '#10B981' },
    { name: 'Team Lead', limit: 1000, color: '#8B5CF6' },
  ];
  const chartData = data || defaultData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full h-[280px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30 }}>
          <XAxis
            type="number"
            tick={{ fill: '#64748b', fontSize: 10 }}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
            width={80}
          />
          <Tooltip
            formatter={(value) => [`${value.toLocaleString()} TND`, 'Limit']}
            contentStyle={{
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              color: '#fff',
            }}
          />
          <Bar dataKey="limit" radius={[0, 8, 8, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default { CompanyValuesRadar, AuthorityLimitsChart };
