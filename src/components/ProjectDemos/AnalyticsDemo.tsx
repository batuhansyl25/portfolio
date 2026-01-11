import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DemoStyles.css';

export function AnalyticsDemo() {
  const [activeUsers, setActiveUsers] = useState(8234);
  const [revenue, setRevenue] = useState(45678);
  const [conversionRate, setConversionRate] = useState(3.2);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 20) - 10);
      setRevenue(prev => prev + Math.floor(Math.random() * 200) - 100);
      setConversionRate(prev => Math.max(0, Math.min(10, prev + (Math.random() * 0.4) - 0.2)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartData = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 78 },
    { label: 'Wed', value: 72 },
    { label: 'Thu', value: 85 },
    { label: 'Fri', value: 92 },
    { label: 'Sat', value: 58 },
    { label: 'Sun', value: 48 },
  ];

  return (
    <div className="demo-container analytics-demo">
      <div className="demo-header">
        <h3>📊 Analytics Dashboard - Live Demo</h3>
        <p>Real-time data visualization with live updates</p>
      </div>

      <div className="analytics-grid">
        <motion.div 
          className="metric-card glass"
          key={activeUsers}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          <div className="metric-icon">👥</div>
          <div className="metric-value">{activeUsers.toLocaleString()}</div>
          <div className="metric-label">Active Users</div>
          <div className="metric-trend positive">+12.5%</div>
        </motion.div>

        <motion.div 
          className="metric-card glass"
          key={revenue}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          <div className="metric-icon">💰</div>
          <div className="metric-value">${revenue.toLocaleString()}</div>
          <div className="metric-label">Revenue</div>
          <div className="metric-trend positive">+8.3%</div>
        </motion.div>

        <motion.div 
          className="metric-card glass"
          key={conversionRate.toFixed(1)}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
        >
          <div className="metric-icon">📈</div>
          <div className="metric-value">{conversionRate.toFixed(1)}%</div>
          <div className="metric-label">Conversion Rate</div>
          <div className="metric-trend positive">+0.7%</div>
        </motion.div>

        <div className="chart-card glass">
          <h4>Weekly Performance</h4>
          <div className="bar-chart">
            {chartData.map((item, index) => (
              <div
                key={item.label}
                className="bar-container"
              >
                <motion.div
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.value}%` }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                />
                <span className="bar-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
