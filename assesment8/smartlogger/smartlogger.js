
function smartRepeatedLogger(message, interval, duration) {
  let intervalId;
  let timeLogged = 0;

  const startLogging = () => {
    intervalId = setInterval(() => {
      if (timeLogged >= duration) {
        clearInterval(intervalId);
      } else {
        console.log(message);
        timeLogged += interval;
      }
    }, interval);
  };

  startLogging();

  return {
    pause: () => clearInterval(intervalId),
    resume: () => {
      if (timeLogged < duration) startLogging();
    },
  };
}

const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3000); // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
// Logs "Logging..." every second for 10 seconds, with a 3-second pause starting at 3 seconds

