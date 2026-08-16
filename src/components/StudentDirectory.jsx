import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  if (!students || students.length === 0) {
    return (
      <p style={{ fontStyle: 'italic', color: '#666', marginTop: '20px' }}>
        No students found matching your criteria.
      </p>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
        marginTop: '20px',
      }}
    >
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
