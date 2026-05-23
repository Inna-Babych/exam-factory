import { TransportFactory } from "../src/creational/factory/index";

function runDemo() {
    console.log("--- Запуск демонстрації патерну Factory ---\n");

    const car = TransportFactory.createTransport("car");
    console.log(`[Car]: ${car.deliver()}`);

    const bike = TransportFactory.createTransport("bike");
    console.log(`[Bike]: ${bike.deliver()}`);
}

runDemo();
