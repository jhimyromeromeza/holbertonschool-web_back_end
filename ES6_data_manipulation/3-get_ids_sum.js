export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.reduce((acumulador, student) => acumulador + student.id, 0);
}
