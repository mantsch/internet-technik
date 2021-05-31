// Get todays weekday
const today = whatDay();

// Call our Todo function
const myTodo = todo(today);

// Log our todo
console.log(myTodo);

// todo function based on weekday
function todo(today) {
  let weekday = today;

  if (weekday === 'friday' || weekday === 'saturday') {
    return 'drink beer';
  } else if (weekday === 'sunday') {
    return 'chill';
  } else {
    return 'work';
  }
}

// get the name of today
function whatDay() {
  // The getDay() method returns the day of the week (from 0 to 6) for the specified date
  let currentDate = new Date();
  let currentWeekday = currentDate.getDay();
  console.log(currentWeekday);

  // Get the weekday name our array
  const weeklist = ['sunday', 'monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  let currentWeekdayString = weeklist[currentWeekday];
  console.log(currentWeekdayString);

  // return todays string name
  return currentWeekdayString;
}
