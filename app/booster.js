class Booster {
  constructor(name, multiplier, cost, timer) {
    this.activated = false;
    this.available = true;
    this.name = name;
    this.multiplier = multiplier;
    this.cost = cost;
    this.timer = timer;
  }

}
module.exports = Booster;
