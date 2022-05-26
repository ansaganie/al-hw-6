const Car = require('./car');

describe('Check setting and getting of private values', () => {
  let car = new Car();

  beforeEach(() => {
    car = new Car();
  });

  it('should correctly set valid brand', () => {
    const brand = 'Mercedes';
    car.brand = brand;

    expect(car.brand).toBe(brand);
  });

  it('should throw type error if brand has invalid length', () => {
    expect(() => {
      car.brand = 'This is very long brand name that is not valid length';
    }).toThrow();

    expect(() => {
      car.brand = '';
    }).toThrow();

    expect(() => {
      car.brand = 45656;
    }).toThrow();

    expect(() => {
      car.brand = true;
    }).toThrow();

    expect(() => {
      car.brand = {};
    }).toThrow();

    expect(() => {
      car.brand = () => undefined;
    }).toThrow();
  });

  it('should correctly set valid model', () => {
    const model = 'Vesta';
    car.model = model;

    expect(car.model).toBe(model);
  });

  it('should throw type error if model is invalid type', () => {
    expect(() => {
      car.brand = 'This is very long model name that is not valid length';
    }).toThrow();

    expect(() => {
      car.brand = '';
    }).toThrow();

    expect(() => {
      car.model = 464654;
    }).toThrow();

    expect(() => {
      car.model = false;
    }).toThrow();

    expect(() => {
      car.brand = {};
    }).toThrow();

    expect(() => {
      car.model = () => undefined;
    }).toThrow();
  });

  it('should correctly set valid year of manufacturing', () => {
    const year = 1950;
    car.yearOfManufacturing = year;

    expect(car.yearOfManufacturing).toBe(year);
  });

  it('should throw type error if year of manufacturing is invalid type', () => {
    expect(() => {
      car.yearOfManufacturing = 2023;
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = false;
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = Infinity;
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = '1899';
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = {};
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = () => undefined;
    }).toThrow();

    expect(() => {
      car.yearOfManufacturing = 1899;
    }).toThrow();
  });

  it('should correctly set valid max speed', () => {
    car.maxSpeed = 100;
    expect(car.maxSpeed).toBe(100);

    car.maxSpeed = 150;
    expect(car.maxSpeed).toBe(150);

    car.maxSpeed = 299;
    expect(car.maxSpeed).toBe(299);
  });

  it('should throw type error if max speed is invalid type', () => {
    expect(() => {
      car.maxSpeed = 300;
    }).toThrow();

    expect(() => {
      car.maxSpeed = false;
    }).toThrow();

    expect(() => {
      car.maxSpeed = Infinity;
    }).toThrow();

    expect(() => {
      car.maxSpeed = () => undefined;
    }).toThrow();

    expect(() => {
      car.maxSpeed = 99;
    }).toThrow();
  });

  it('should correctly set valid max fuel volume', () => {
    car.maxFuelVolume = 5;
    expect(car.maxFuelVolume).toBe(5);

    car.maxFuelVolume = 15;
    expect(car.maxFuelVolume).toBe(15);

    car.maxFuelVolume = 19;
    expect(car.maxFuelVolume).toBe(19);
  });

  it('should throw type error if max fuel volume is invalid type', () => {
    expect(() => {
      car.maxFuelVolume = 4;
    }).toThrow();

    expect(() => {
      car.maxFuelVolume = false;
    }).toThrow();

    expect(() => {
      car.maxFuelVolume = Infinity;
    }).toThrow();

    expect(() => {
      car.maxFuelVolume = () => undefined;
    }).toThrow();

    expect(() => {
      car.maxFuelVolume = 20;
    }).toThrow();
  });

  it('should correctly set valid fuel consumption', () => {
    car.fuelConsumption = 0;
    expect(car.fuelConsumption).toBe(0);

    car.fuelConsumption = 1000;
    expect(car.fuelConsumption).toBe(1000);

    car.fuelConsumption = 5000;
    expect(car.fuelConsumption).toBe(5000);
  });

  it('should throw type error if fuel consumption is invalid type', () => {
    expect(() => {
      car.fuelConsumption = '4';
    }).toThrow();

    expect(() => {
      car.fuelConsumption = false;
    }).toThrow();

    expect(() => {
      car.fuelConsumption = Infinity;
    }).toThrow();

    expect(() => {
      car.fuelConsumption = () => undefined;
    }).toThrow();
  });

  it('should return default value for current fuel volume', () => {
    expect(car.currentFuelVolume).toBe(0);
  });

  it('should not have setter for current fuel volume', () => {
    const proto = Object.getPrototypeOf(car);
    const descriptors = Object.getOwnPropertyDescriptor(proto, 'currentFuelVolume');

    expect(descriptors.set).toBeUndefined();
  });

  it('should return default value for isStarted', () => {
    expect(car.isStarted).toBe(false);
  });

  it('should not have setter for isStarted', () => {
    const proto = Object.getPrototypeOf(car);
    const descriptors = Object.getOwnPropertyDescriptor(proto, 'isStarted');

    expect(descriptors.set).toBeUndefined();
  });

  it('should return default value for mileage', () => {
    expect(car.mileage).toBe(0);
  });

  it('should not have setter for mileage', () => {
    const proto = Object.getPrototypeOf(car);
    const descriptors = Object.getOwnPropertyDescriptor(proto, 'mileage');

    expect(descriptors.set).toBeUndefined();
  });
});

describe('Check "start" method of the car', () => {
  let car = new Car();

  beforeEach(() => {
    car = new Car();
  });

  it('should start car if car was not started yet', () => {
    expect(car.isStarted).toBe(false);

    car.start();

    expect(car.isStarted).toBe(true);
  });

  it('should throw an error when car is already started', () => {
    car.start();
    expect(car.isStarted).toBe(true);

    expect(() => {
      car.start();
    }).toThrow('Машина уже заведена');
  });
});

describe('Check "shutDownEngine" method of the car', () => {
  let car = new Car();

  beforeEach(() => {
    car = new Car();
  });

  it('should shut down the car if car is started', () => {
    expect(car.isStarted).toBe(false);

    car.start();

    expect(car.isStarted).toBe(true);

    car.shutDownEngine();

    expect(car.isStarted).toBe(false);
  });

  it('should throw an error when car is not started yet', () => {
    expect(() => {
      car.shutDownEngine();
    }).toThrow('Машина ещё не заведена');
  });
});

describe('Check "fillUpGasTank" method of the car', () => {
  let car = new Car();

  beforeEach(() => {
    car = new Car();
  });

  it('should throw an error when volume is invalid type', () => {
    const errorMessage = 'Неверное количество топлива для заправки';

    expect(() => car.fillUpGasTank('10')).toThrow(TypeError);
    expect(() => car.fillUpGasTank('10')).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(Infinity)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(false)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank({})).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(() => undefined)).toThrow(errorMessage);
  });

  it('should throw an error when volume is 0 or negative number', () => {
    const errorMessage = 'Неверное количество топлива для заправки';

    expect(() => car.fillUpGasTank(0)).toThrow(TypeError);
    expect(() => car.fillUpGasTank(0)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(-5)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(-100)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(-1000)).toThrow(errorMessage);
  });

  it('should throw an error when fuel tank is fill', () => {
    const errorMessage = 'Топливный бак переполнен';

    car.maxFuelVolume = 19;

    expect(() => car.fillUpGasTank(20)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(30)).toThrow(errorMessage);
    expect(() => car.fillUpGasTank(10)).not.toThrow(errorMessage);
    expect(() => car.fillUpGasTank(10)).toThrow(errorMessage);
  });

  it('should correctly fill up fuel when volume is valid', () => {
    car.maxFuelVolume = 19;
    car.fillUpGasTank(10);

    expect(car.currentFuelVolume).toBe(10);

    car.fillUpGasTank(5);

    expect(car.currentFuelVolume).toBe(15);
  });
});

describe('Check "drive" method of the car', () => {
  let car = new Car();

  beforeEach(() => {
    car = new Car();
  });

  it('should throw an error when speed is invalid type', () => {
    const errorMessage = 'Неверная скорость';

    expect(() => car.drive(0)).toThrow(TypeError);
    expect(() => car.drive(0)).toThrow(errorMessage);
    expect(() => car.drive(-5)).toThrow(errorMessage);
    expect(() => car.drive(Infinity)).toThrow(errorMessage);
    expect(() => car.drive('150')).toThrow(errorMessage);
    expect(() => car.drive(false)).toThrow(errorMessage);
    expect(() => car.drive({})).toThrow(errorMessage);
    expect(() => car.drive(() => undefined)).toThrow(errorMessage);
  });

  it('should throw an error when hours is invalid type', () => {
    const errorMessage = 'Неверное количество часов';
    const speed = 150;

    expect(() => car.drive(speed, 0)).toThrow(TypeError);
    expect(() => car.drive(speed, 0)).toThrow(errorMessage);
    expect(() => car.drive(speed, -5)).toThrow(errorMessage);
    expect(() => car.drive(speed, Infinity)).toThrow(errorMessage);
    expect(() => car.drive(speed, '150')).toThrow(errorMessage);
    expect(() => car.drive(speed, false)).toThrow(errorMessage);
    expect(() => car.drive(speed, {})).toThrow(errorMessage);
    expect(() => car.drive(speed, () => undefined)).toThrow(errorMessage);
  });

  it('should throw an error when speed is more than max speed', () => {
    const errorMessage = 'Машина не может ехать так быстро';

    car.maxSpeed = 150;

    expect(() => car.drive(151, 1)).toThrow(errorMessage);
    expect(() => car.drive(200, 1)).toThrow(errorMessage);
  });

  it('should throw an error if car is not started', () => {
    const errorMessage = 'Машина должна быть заведена, чтобы ехать';

    car.maxSpeed = 150;

    expect(car.isStarted).toBe(false);
    expect(() => car.drive(110, 1)).toThrow(errorMessage);
  });

  it('should throw an error if fuel is not enough for trip', () => {
    const errorMessage = 'Недостаточно топлива';

    car.maxSpeed = 150;
    car.fuelConsumption = 1;
    car.start();

    expect(car.isStarted).toBe(true);
    expect(() => car.drive(110, 1)).toThrow(errorMessage);

    car.fuelConsumption = 11;
    car.fillUpGasTank(10);

    expect(car.isStarted).toBe(true);
    expect(() => car.drive(110, 2)).toThrow(errorMessage);
  });

  it('should correctly update mileage and current fuel volume', () => {
    const maxSpeed = 250;
    const maxFuelVolume = 19;
    const fuelConsumption = 5;
    const speed = 150;
    const hours = 2;
    const totalDistance = speed * hours;
    const totalConsumption = (totalDistance / 100) * fuelConsumption;
    const fuelLeft = maxFuelVolume - totalConsumption;

    car.maxSpeed = maxSpeed;
    car.maxFuelVolume = maxFuelVolume;
    car.fuelConsumption = fuelConsumption;

    car.fillUpGasTank(maxFuelVolume);
    car.start();

    expect(car.isStarted).toBe(true);
    expect(car.currentFuelVolume).toBe(maxFuelVolume);
    expect(car.mileage).toBe(0);

    car.drive(speed, hours);

    expect(car.currentFuelVolume).toBe(fuelLeft);
    expect(car.mileage).toBe(totalDistance);

    car.fillUpGasTank(15);

    car.drive(speed, hours);

    const newTotalDistance = totalDistance * 2;
    const newFuelLeft = fuelLeft + 15 - totalConsumption;

    expect(car.currentFuelVolume).toBe(newFuelLeft);
    expect(car.mileage).toBe(newTotalDistance);
  });
});
