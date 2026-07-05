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
function findHighestScreenTime(dayData) {
    let highestScreenTime = 0;
    let dayWithHighestScreenTime = "";

    for (let individualDay of dayData) {
        if (individualDay.screenTime > highestScreenTime) {
            highestScreenTime = individualDay.screenTime;
            dayWithHighestScreenTime = individualDay.day;
        } 
    } 
    
    return dayWithHighestScreenTime;
}

//FUNCTION: AVERAGE SLEEP HOURS
function averageSleepHours(dayData) {
    let totalSleepHours = 0;

    for (let individualDay of dayData) {
        totalSleepHours += individualDay.sleepHours;
    }

    return totalSleepHours / dayData.length;
}

//FUNCTION: MOST FREQUENT MOOD
function mostFrequentMood(dayData) {
    let moodCount = {};

    for (let individualDay of dayData) {
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
function dayWithLeastSleep(dayData) {
    let leastSleepHours = 20;
    let dayWithLeastSleep = ""; 

    for (let individualDay of dayData) {
        if (individualDay.sleepHours < leastSleepHours) {
            leastSleepHours = individualDay.sleepHours;
            dayWithLeastSleep = individualDay.day;
        }
    }
     
    return dayWithLeastSleep;
}

console.log("The day with the highest screen time is: " + findHighestScreenTime(weekData));
console.log("The average sleep hours for the week is: " + averageSleepHours(weekData));
console.log("The day with the least sleep hours is: " + dayWithLeastSleep(weekData));
console.log("The most frequent mood for the week is: " + mostFrequentMood(weekData));
