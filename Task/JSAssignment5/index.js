function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}


delayedMessage('Hello, after 2 seconds!', 2000);


function countdown(number) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

countdown(5);


function countdown(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, 1000);
}


countdown(5, () => console.log('Countdown completed!'));

function wait(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}


wait(2000).then(() => console.log('Resolved after 2 seconds!'));


function countdownPromise(number) {
    return new Promise(resolve => {
        function nextCount() {
            if (number < 0) {
                resolve();
            } else {
                console.log(number);
                number--;
                wait(1000).then(nextCount);
            }
        }
        nextCount();
    });
}


countdownPromise(5).then(() => console.log('Countdown completed!'));

function delayedLogSequence(messages) {
    let promise = Promise.resolve();

    messages.forEach(({ message, delay }) => {
        promise = promise.then(() => wait(delay).then(() => console.log(message)));
    });
}


delayedLogSequence([
    { message: 'First message', delay: 1000 },
    { message: 'Second message', delay: 2000 },
    { message: 'Third message', delay: 1500 }
]);

async function delayedLogSequenceAsync(messages) {
    for (const { message, delay } of messages) {
        await wait(delay);
        console.log(message);
    }
}


delayedLogSequenceAsync([
    { message: 'First message', delay: 1000 },
    { message: 'Second message', delay: 2000 },
    { message: 'Third message', delay: 1500 }
]);

function randomDelayMessage(message) {
    const delay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 and 5 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}


randomDelayMessage('Random message after a random delay!');

function repeatAction(action, interval, duration) {
    return new Promise(resolve => {
        const intervalId = setInterval(action, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}


repeatAction(() => console.log('Action repeated!'), 1000, 5000)
    .then(() => console.log('Action stopped after 5 seconds.'));
