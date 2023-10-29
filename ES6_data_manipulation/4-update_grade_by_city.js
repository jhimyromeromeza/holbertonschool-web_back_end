export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter((student) => student.location === city)
    .map((student) => {
      const gradeobj = newGrades.find((grade) => grade.studentId === student.id)
      if (gradeobj) {
        return { ...student, grade: gradeobj.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    })
}