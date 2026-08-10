// src/components/StudentDirectory.jsx
import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Student Directory</h2>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}