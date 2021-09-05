/*
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
*/

const meetingMerger = (array: Array<{ [key: string]: number }>) => {
  const sortedMeetings = array.sort((a, b) => a.startTime - b.startTime);

  const finalMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const nextMeeting = finalMeetings[finalMeetings.length - 1];

    if (currentMeeting.startTime <= nextMeeting.endTime) {
      nextMeeting.endTime = Math.max(
        currentMeeting.endTime,
        nextMeeting.endTime
      );
    } else {
      finalMeetings.push(currentMeeting);
    }
  }

  return finalMeetings;
};

const times = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

console.log(meetingMerger(times)); // =>   [{ startTime: 0, endTime: 1 }, { startTime: 3, endTime: 8 }, { startTime: 9, endTime: 12 }]
