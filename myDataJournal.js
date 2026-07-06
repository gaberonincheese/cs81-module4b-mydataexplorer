// GitHub link: https://github.com/gaberonincheese/cs81-module4b-mydataexplorer

let weekData = [
    { day: "Sunday", sleepHours: 8, screenTime: 9, mood: "Excited", caffeineIntake: 0, focusLevel: 4},
    { day: "Monday", sleepHours: 9, screenTime: 10, mood: "Intrigued", caffeineIntake: 0, focusLevel: 7},
    { day: "Tuesday", sleepHours: 8, screenTime: 6, mood: "Happy", caffeineIntake: 0, focusLevel: 8},
    { day: "Wednesday", sleepHours: 7, screenTime: 8, mood: "Happy", caffeineIntake: 1, focusLevel: 6},
    { day: "Thursday", sleepHours: 6, screenTime: 5, mood: "Exhausted", caffeineIntake: 0, focusLevel: 5},
    { day: "Friday", sleepHours: 9, screenTime: 12, mood: "Anxious", caffeineIntake: 0, focusLevel: 4},
    { day: "Saturday", sleepHours: 8, screenTime: 5, mood: "Bored", caffeineIntake: 0, focusLevel: 6},
]

/** Predictions
 *  Friday was the day that had the most screen time.
 *  Wednesday was my best focus day.
 *  I don't drink enough caffeine to say whether or not it affects my focus.
*/

//FUNCTION: DAY WITH HIGHEST SCREEN TIME
function findHighestScreenTime(dataDays) {
    let highestScreenTime = 0;
    let dayWithHighestScreenTime = "";

    for (let individualDay of dataDays) {
        if (individualDay.screenTime > highestScreenTime) {
            highestScreenTime = individualDay.screenTime;
            dayWithHighestScreenTime = individualDay.day;
        } 
    } 
    
    return dayWithHighestScreenTime;
}

//FUNCTION: AVERAGE SLEEP HOURS
function averageSleepHours(dataDays) {
    let totalSleepHours = 0;

    for (let individualDay of dataDays) {
        totalSleepHours += individualDay.sleepHours;
    }

    return totalSleepHours / dataDays.length;
}

//FUNCTION: MOST FREQUENT MOOD
function mostFrequentMood(dataDays) {
    let moodCount = {};

    for (let individualDay of dataDays) {
        let mood = individualDay.mood;

        if (!moodCount[mood]) {
            moodCount[mood] = 1;
        } else {
            moodCount[mood]++;
        }
    }

    let mostFrequentMood = "";
    let highestMoodCount = 0;

    for (let moodType in moodCount) {
        if (moodCount[moodType] > highestMoodCount) {
            highestMoodCount = moodCount[moodType];
            mostFrequentMood = moodType;
        }
    }

    return mostFrequentMood;
}

//FUNCTION: DAY WITH LEAST SLEEP
function dayWithLeastSleep(dataDays) {
    let leastSleepHours = 20;
    let dayWithLeastSleep = ""; 

    for (let individualDay of dataDays) {
        if (individualDay.sleepHours < leastSleepHours) {
            leastSleepHours = individualDay.sleepHours;
            dayWithLeastSleep = individualDay.day;
        }
    }
     
    return dayWithLeastSleep;
}

// User passes in a day, function will return a message based on screen time.
function screenTimeMessages() {

    let dayWithHighestScreenTime = findHighestScreenTime(weekData);

    for (let individualDay of dataDays) {
        if (dayWithHighestScreenTime === individualDay.day) {
            if (individualDay.screenTime >= 10) {
                console.log("You're going way overboard with the screen time. Touch grass!");
            } else if (individualDay.screenTime >= 5) {
                console.log("Not bad. But you should try to do some other work without a screen.");
            } else {
                console.log("Nice work. Let's capitalize on this and do something outside the house!");
            }
        } else {
            continue;
        }                   
    }
}

console.log("---Gabi's Weekly Data Journal---");
console.log("Your highest day of screen time was: " + findHighestScreenTime(weekData));
console.log(screenTimeMessages());
console.log("The most frequent mood you had this week was: " + mostFrequentMood(weekData));
console.log("Your average sleep hours this week was: " + averageSleepHours(weekData));