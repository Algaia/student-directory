import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'deansLister' | 'probation'

  // TODO 1: Add new student immutably with a unique ID
  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now()
    };
    setStudents((prevStudents) => [...prevStudents, studentWithId]);
  };

  // TODO 2: Derived visibleStudents fresh on every render
  const visibleStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (statusFilter === 'deansLister') {
      return student.gwa <= 1.75;
    }
    if (statusFilter === 'probation') {
      return student.status === 'On Probation';
    }

    return true; // 'all'
  });

  return (
    <div>
      <h1>Student Directory</h1>
      {/* TODO 3: Pass handleAddStudent */}
      <StudentForm onAdd={handleAddStudent} />
      
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      
      {/* TODO 4: Pass visibleStudents */}
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}
