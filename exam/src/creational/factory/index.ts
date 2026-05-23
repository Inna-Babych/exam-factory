// 1. Інтерфейс транспорту
export interface Transport {
    deliver(): string;
}

// 2. Конкретні продукти
export class Car implements Transport {
    deliver(): string { return "Доставка вантажу автомобілем по дорозі."; }
}

export class Bike implements Transport {
    deliver(): string { return "Швидка доставка кур'єром на мотоциклі."; }
}

// 3. Клас Фабрики
export class TransportFactory {
    public static createTransport(type: "car" | "bike"): Transport {
        if (type === "car") return new Car();
        if (type === "bike") return new Bike();
        throw new Error("Невідомий тип транспорту");
    }
}
