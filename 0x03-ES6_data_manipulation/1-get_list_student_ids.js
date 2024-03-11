export default function getListStudentIds(list) {
  let array = [];

  if (Array.isArray(list)) {
    array = list.map((student) => ('id' in student ? student.id : null)).filter((id) => id !== null);
  }

  return array;
}
