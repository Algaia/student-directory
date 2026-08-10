// src/components/StudentCard.jsx
import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const cardClassName = styles.card;

  return (
    <div className={cardClassName}>
      <h3>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      
      {/* We display the GWA with consistent white-on-green styling */}
      <p><strong>GWA:</strong> {student.gwa.toFixed(2)}</p>

      {/* Conditional Rendering: Dean's Lister Badge - Modern styling */}
      {student.gwa <= 1.75 && (
        <span className={`${styles.badge} ${styles.deansListBadge}`}>
          Dean's Lister
        </span>
      )}

      {/* Probation Warning - displayed as a special badge */}
      {student.status === 'On Probation' && (
        <span className={`${styles.badge} ${styles.probationBadge}`}>
          On Probation
        </span>
      )}
    </div>
  );
}