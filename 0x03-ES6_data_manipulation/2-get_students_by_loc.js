export default function getStudentsByLocation(studentsInfo, myLocation) {
  if (!Array.isArray(studentsInfo) || !myLocation) {
    return [];
  }
  return studentsInfo.filter((student) => student.location === myLocation);
}
