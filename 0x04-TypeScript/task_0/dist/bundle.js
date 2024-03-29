/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = tbody.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
table.appendChild(tbody);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxhQUFhO0NBQ3hCLENBQUM7QUFFRixJQUFNLFlBQVksR0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVyRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87SUFDM0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3RDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRpbmcgYW4gaW50ZXJmYWNlIGZvciBhIHN0dWRlbnRcbmludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgYWdlOiAyMCxcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnSmFuZScsXG4gIGxhc3ROYW1lOiAnU21pdGgnLFxuICBhZ2U6IDIyLFxuICBsb2NhdGlvbjogJ0xvcyBBbmdlbGVzJyxcbn07XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbmNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgY29uc3Qgcm93ID0gdGJvZHkuaW5zZXJ0Um93KCk7XG4gIGNvbnN0IGNlbGwxID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjZWxsMS50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICBjZWxsMi50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG59KTtcblxudGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=