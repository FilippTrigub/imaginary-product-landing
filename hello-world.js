const greeting = 'Hello, World!';

const printGreeting = (message) => {
  if (typeof message !== 'string') {
    throw new TypeError('Greeting must be a string.');
  }

  console.log(message);
};

printGreeting(greeting);
