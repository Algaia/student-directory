// src/components/StudentDirectory.jsx
import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '24px', 
    maxWidth: '1200px', 
    margin: '40px auto', 
    padding: '0 20px',
  };

  return (
    <div>
      <h2>Student Directory</h2>
      {/* Grid container */}
      <div style={gridStyle}>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}