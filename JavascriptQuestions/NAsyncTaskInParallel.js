// Implement N async task in parallel 

// How -> using Promise.all

const asyncTask1 = () => new Promise(res => setTimeout(() => {
    console.log('Task1 completed!');
    res();
}, 1000));

const asyncTask2 = () => new Promise(res => setTimeout(() => {
    console.log('Task2 completed!');
    res();
}, 1000));

const asyncTask3 = () => new Promise(res => setTimeout(() => {
    console.log('Task3 completed!');
    res('Task3 completed!');
}, 2000));

const asyncTaskInParallel = async (tasks) => {
    await Promise.all(tasks.map(task => task()));
}

asyncTaskInParallel([asyncTask1, asyncTask2, asyncTask3]);