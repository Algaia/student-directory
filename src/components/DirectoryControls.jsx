export default function DirectoryControls({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search student by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: '8px', fontSize: '14px', width: '250px' }}
      />

      {/* Filter Buttons */}
      <div>
        <button
          onClick={() => onStatusFilterChange('all')}
          style={{
            padding: '8px 12px',
            marginRight: '5px',
            backgroundColor: statusFilter === 'all' ? '#007bff' : '#f0f0f0',
            color: statusFilter === 'all' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          All
        </button>

        <button
          onClick={() => onStatusFilterChange('deansLister')}
          style={{
            padding: '8px 12px',
            marginRight: '5px',
            backgroundColor: statusFilter === 'deansLister' ? '#007bff' : '#f0f0f0',
            color: statusFilter === 'deansLister' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Dean's Listers
        </button>

        <button
          onClick={() => onStatusFilterChange('probation')}
          style={{
            padding: '8px 12px',
            backgroundColor: statusFilter === 'probation' ? '#007bff' : '#f0f0f0',
            color: statusFilter === 'probation' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          On Probation
        </button>
      </div>
    </div>
  );
}
