import React, { useContext } from 'react';

const HistoryList = ({ context }) => {
  const { history } = useContext(context);

  return (
    <div className="history-list">
      <h2>History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry.description} - {new Date(entry.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
