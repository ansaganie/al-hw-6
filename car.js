import { isValidNumber, validateNumber, validateString } from './utils';

export default class Car {
  #brand;

  #model;

  #yearOfManufacturing;

  #maxSpeed;

  #maxFuelVolume;

  #fuelConsumption;

  #currentFuelVolume;

  #isStarted;

  #mileage;

  constructor() {
    this.#currentFuelVolume = 0;
    this.#isStarted = false;
    this.#mileage = 0;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    if (!validateString(brand, 1, 50)) {
      throw TypeError('Бренд должен быть строкой от 1 до 50 символов включительно');
    }

    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    if (!validateString(model, 1, 50)) {
      throw TypeError('Модель должна быть строкой от 1 до 50 символов включительно');
    }

    this.#model = model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    const isValidYearOfManufacturing = validateNumber(year, 1900, new Date().getFullYear(), true);

    if (!isValidYearOfManufacturing) {
      throw TypeError('Год производства должна быть числом от 1900 до текущего года');
    }

    this.#yearOfManufacturing = year;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(maxSpeed) {
    const isValidMaxSpeed = validateNumber(maxSpeed, 100, 300);

    if (!isValidMaxSpeed) {
      throw TypeError('Максимальная скорость должна быть числом от 100 до 300 км/ч');
    }

    this.#maxSpeed = maxSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(maxFuelVolume) {
    const isValidMaxFuelVolume = validateNumber(maxFuelVolume, 5, 20);

    if (!isValidMaxFuelVolume) {
      throw TypeError('Максимальный объем топлива должен быть числом в литрах от 5 до 20');
    }

    this.#maxFuelVolume = maxFuelVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(fuelConsumption) {
    if (!isValidNumber(fuelConsumption)) {
      throw TypeError('Расход должен быть числом в л/100км');
    }

    this.#fuelConsumption = fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(volume) {
    const isValidVolumeNumber = isValidNumber(volume) && volume > 0;

    if (!isValidVolumeNumber) {
      throw new TypeError('Неверное количество топлива для заправки');
    }

    const newVolume = this.#currentFuelVolume + volume;

    if (newVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume = newVolume;
  }

  drive(speed, hours) {
    const isValidSpeed = isValidNumber(speed) && speed > 0;
    const isValidHours = isValidNumber(hours) && hours > 0;

    if (!isValidSpeed) {
      throw new TypeError('Неверная скорость');
    }

    if (!isValidHours) {
      throw new TypeError('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    if (this.#currentFuelVolume === 0) {
      throw new Error('Недостаточно топлива');
    }

    const distance = speed * hours;
    const consumptionVolume = (distance / 100) * this.#fuelConsumption;

    this.#mileage += distance;
    this.#currentFuelVolume -= consumptionVolume;
  }
}
