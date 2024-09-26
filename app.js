document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const form = document.getElementById('diningForm');
    const resultElement = document.getElementById('result');
    
    // Function to calculate days until the next key date
    function calculateDays() {
        const today = new Date();
        let targetDate;

        if (today.getMonth() + 1 < 12 || (today.getMonth() + 1 === 12 && today.getDate() <= 15)) {
            targetDate = new Date(today.getFullYear(), 11, 15);  // December 15
        } else {
            targetDate = new Date(today.getFullYear(), 4, 25);   // May 25
        }

        const timeDifference = targetDate - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        countdownElement.textContent = `There are ${daysLeft} days left until ${targetDate.toDateString()}.`;
        return daysLeft;
    }

    // Calculate and display days on load
    const daysLeft = calculateDays();

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const diningpoints = parseFloat(document.getElementById('diningpoints').value);
        
        if (isNaN(diningpoints) || diningpoints < 0) {
            resultElement.textContent = 'Please enter a valid amount of dining points.';
        } else {
            const pointsPerDay = (diningpoints / daysLeft).toFixed(2);
            resultElement.textContent = `You can spend $${pointsPerDay} per day for the rest of the semester.`;
        }
    });
});
