// src/components/Meeting/MeetingList.jsx
import React from 'react';

const MeetingList = ({ meetings }) => {
  return (
    <div className="meeting-list">
      <h2>Liste des Réunions</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <h3>{meeting.title}</h3>
            <p>{meeting.description}</p>
            <p>Date: {new Date(meeting.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
