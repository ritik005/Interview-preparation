// Implement N asynchronous task in series 

//Async Tasks
const asyncTask1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task1 Completed!');
        resolve();
    }, 1000)
});

const asyncTask2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task2 Completed!');
        resolve();
    }, 3000)
});

const asyncTask3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task3 Completed');
        resolve();
    }, 2000)
});

async function seriesTask(tasks) {
    for(const task of tasks) {
        await task();
    }
}

seriesTask([asyncTask1, asyncTask2, asyncTask3])
.then(() => console.log('All task Completed!'))
.catch(err => console.log(err));