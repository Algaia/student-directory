import { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('1');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if name or course is empty
    if (!name.trim() || !course.trim() || !gwa) {
      alert('Please fill out all required fields.');
      return;
    }

    // Call parent handler passed via prop
    onAdd({
      name: name.trim(),
      course: course.trim(),
      yearLevel: Number(yearLevel),
      status,
      gwa: parseFloat(gwa),
    });

    // Reset local state fields
    setName('');
    setCourse('');
    setYearLevel('1');
    setStatus('Regular');
    setGwa('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3>Add New Student</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course (e.g. BSIT)"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <select value={yearLevel} onChange={(e) => setYearLevel(e.target.value)}>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Regular">Regular</option>
          <option value="Irregular">Irregular</option>
          <option value="On Probation">On Probation</option>
        </select>
        <input
          type="number"
          step="0.01"
          min="1.00"
          max="5.00"
          placeholder="GWA (e.g. 1.75)"
          value={gwa}
          onChange={(e) => setGwa(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Add Student
      </button>
    </form>
  );
}
