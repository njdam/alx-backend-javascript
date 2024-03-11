// Filter - A function that returns an array of objects
// who are located in a specific city
export default function getStudentsByLocation(studentsInfo, myLocation) {
  if (!Array.isArray(studentsInfo) || !myLocation) {
    return [];
  }
  return studentsInfo.filter((student) => student.location === myLocation);
}
