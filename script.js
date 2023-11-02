// Function to calculate the day of the week
function calculateDayOfWeek(cc, yy, mm, dd) {
    const dayOfWeek = (Math.floor(((cc / 4) - 2 * cc - 1 )+ ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    return dayOfWeek;
}

// Function to get the Akan name based on day of the week and gender
function getAkanName(dayOfWeek, gender) {
    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    if (gender === "male") {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }
}

// Function to check if the date is valid
function isValidDate(dd, mm) {
    return dd >= 1 && dd <= 31 && mm >= 1 && mm <= 12;
}

// Function to calculate the Akan name and display it to the user
function calculateAkanName() {
    // Get user input
    const cc = parseInt(document.getElementById("cc").value);
    const yy = parseInt(document.getElementById("yy").value);
    const mm = parseInt(document.getElementById("mm").value);
    const dd = parseInt(document.getElementById("dd").value);
    const gender = document.getElementById("gender").value;

    // Calculate day of the week and Akan name
    const resultElement = document.getElementById("result");
    if (isValidDate(dd, mm)) {
        const dayOfWeek = calculateDayOfWeek(cc, yy, mm, dd);
        const akanName = getAkanName(dayOfWeek, gender);
        resultElement.textContent = `Your Akan name is ${akanName}`;
    } else {
        resultElement.textContent = "Please enter a valid date.";
    }
}


