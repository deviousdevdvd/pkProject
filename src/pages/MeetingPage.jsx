// src/pages/MeetingPage.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import { getMeetings, getMeetingById } from '../services/meetingService';
import MeetingList from '../components/Meeting/MeetingList';
import MeetingForm from '../components/Meeting/MeetingForm';
import MeetingDetail from '../components/Meeting/MeetingDetail';
import { useUser } from '../hooks/useUser';
import { Routes } from 'react-router-dom/dist';

const MeetingPage = () => {
  const [meetings, setMeetings] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchMeetings = async () => {
      const data = await getMeetings();
      setMeetings(data);
    };

    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    const data = await getMeetings();
    setMeetings(data);
  };


  const handleSuccess = () => {
    
    fetchMeetings()
  };

  return (
    <Router>
      <div className="meeting-page">
        <h1>Réunions : </h1>
        <Routes>
          <Route path="/meetings/:meetingId">
            <MeetingDetailWrapper />
          </Route>
          <Route path="/">
            <MeetingList meetings={meetings} />
            {user && user.role === 'admin' && (
              <div>
                <h2>Ajouter une réunion</h2>
                <MeetingForm onSuccess={handleSuccess} />
              </div>
            )}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const MeetingDetailWrapper = () => {
  const { meetingId } = useParams();
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    const fetchMeeting = async () => {
      const data = await getMeetingById(meetingId);
      setMeeting(data);
    };

    fetchMeeting();
  }, [meetingId]);

  if (!meeting) return <div>Loading...</div>;

  return <MeetingDetail meeting={meeting} />;
};

export default MeetingPage;
