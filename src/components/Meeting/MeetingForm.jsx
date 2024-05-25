// src/components/Meeting/MeetingForm.jsx
import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import { createMeeting } from '../services/meetingService';
import Button from '../components/Common/Button';
import DateInput from '../components/Common/DateInput';
import Modal from '../components/Common/Modal';
import TextArea from '../components/Common/TextArea';
import TextInput from '../components/Common/TextInput';

const MeetingForm = ({ onSuccess }) => {
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState({});
  const [debriefs, setDebriefs] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      const data = await getUsers();
      setMembers(data);
    };

    fetchMembers();
  }, []);

  const handleMemberChange = (memberId) => {
    setSelectedMembers((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }));
  };

  const handleDebriefChange = (memberId, value) => {
    setDebriefs((prev) => ({
      ...prev,
      [memberId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm) {
      const meetingData = {
        date,
        subject,
        attendees: Object.keys(selectedMembers).filter((id) => selectedMembers[id]),
        debriefs: debriefs,
      };

      try {
        await createMeeting(meetingData);
        onSuccess();
      } catch (error) {
        console.error('Failed to create meeting', error);
      }
    } else {
      setShowConfirmModal(true);
    }
  };

  const handleConfirm = () => {
    setConfirm(true);
    setShowConfirmModal(false);
    handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date de la réunion:</label>
        <DateInput
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Objet de la réunion:</label>
        <TextInput
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <h3>Membres présents</h3>
        {members.map((member) => (
          <div key={member.id}>
            <label>
              <input
                type="checkbox"
                checked={!!selectedMembers[member.id]}
                onChange={() => handleMemberChange(member.id)}
              />
              {member.name}
            </label>
            {selectedMembers[member.id] && (
              <TextArea
                placeholder={`Debrief pour ${member.name}`}
                value={debriefs[member.id] || ''}
                onChange={(e) => handleDebriefChange(member.id, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
          />
          Confirmer la réunion
        </label>
      </div>
      <Button type="submit" label="Valider" />
      {showConfirmModal && (
        <Modal onClose={() => setShowConfirmModal(false)}>
          <h2>Confirmer la réunion</h2>
          <p>Êtes-vous sûr de vouloir sauvegarder cette réunion ?</p>
          <Button onClick={handleConfirm} label="Confirmer" />
          <Button onClick={() => setShowConfirmModal(false)} label="Annuler" />
        </Modal>
      )}
    </form>
  );
};

export default MeetingForm;
