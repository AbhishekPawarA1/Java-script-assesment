async function delayedMultiGreeting(messages) {
    messages.forEach((msg) => {
      setTimeout(() => {
        console.log(msg.message);
      }, msg.delay);
    });
}


const messages = [
  { message: "Hello, world!", delay: 2000 },
  { message: "How are you?", delay: 3000 },
  { message: "Goodbye!", delay: 6000 },
];


delayedMultiGreeting(messages);
// Logs "Hello, world!" after 2 seconds, "How are you?" after 3 seconds, "Goodbye!" after 6 seconds

