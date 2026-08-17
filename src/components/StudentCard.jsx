import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isOnProbation = student.status === 'On Probation';

  // Apply base card class plus probation modifier if on probation
  const cardClassName = `${styles.card} ${
    isOnProbation ? styles.probationCard : ''
  }`;

  return (
    <div className={cardClassName}>
      <h3>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p><strong>GWA:</strong> {student.gwa.toFixed(2)}</p>

      {/* Dean's Lister Badge */}
      {isDeansLister && (
        <span className={`${styles.badge} ${styles.deansListBadge}`}>
          Dean's Lister
        </span>
      )}

      {/* Probation Badge */}
      {isOnProbation && (
        <span className={`${styles.badge} ${styles.probationBadge}`}>
          On Probation
        </span>
      )}
    </div>
  );
}
