// src/pages/HistoryPage.jsx
import React, { useEffect, useState } from 'react';
import { getHistory } from '../services/historyService';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getHistory();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <h1>History</h1>
      <ul>
        {history.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
