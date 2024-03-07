// Let's make some classrooms
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const class1 = new ClassRoom(19);
  array.push(class1);
  const class2 = new ClassRoom(20);
  array.push(class2);
  const class3 = new ClassRoom(34);
  array.push(class3);

  return array;
}
