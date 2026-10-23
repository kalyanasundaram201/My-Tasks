// Topic: Temperature Range Generator
// 3. Create a weather simulator that generates a random temperature for a city between 15°C and 30°C.

function weatherSimulator() {
    const temperature = Math.floor(Math.random() * 16) + 15;

    console.log("temperatue", temperature);
}

weatherSimulator();
weatherSimulator();
weatherSimulator();