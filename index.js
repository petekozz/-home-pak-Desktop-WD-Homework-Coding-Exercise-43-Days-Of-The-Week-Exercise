// DEFINE YOUR FUNCTION BELOW:

function returnDay(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num-1];
    }
}