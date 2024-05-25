// src/components/Meeting/MeetingDetail.jsx
import React from 'react';

const MeetingDetail = ({ meeting }) => {
  return (
    <div className="meeting-detail">
      <h1>{meeting.subject}</h1>
      <p>Date: {new Date(meeting.date).toLocaleDateString()}</p>
      <h2>Membres présents</h2>
      <ul>
        {meeting.attendees.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{meeting.debriefs[member.id]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingDetail;
