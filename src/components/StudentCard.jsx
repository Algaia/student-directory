// src/components/StudentCard.jsx
import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  // Combine .card with .probation class if student status is 'On Probation'
  const cardClassName = student.status === 'On Probation'
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClassName}>
      <h3>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> Year {student.yearLevel}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p><strong>GWA:</strong> {student.gwa.toFixed(2)}</p>

      {/* Conditional Rendering: Dean's Lister Badge */}
      {student.gwa <= 1.75 && (
        <span className={styles.badge}>Dean's Lister</span>
      )}
    </div>
  );
}