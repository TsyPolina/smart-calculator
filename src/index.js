class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue
  }

  add(value) {
    this.result += `+${value}`
    return this
  }

  subtract(value) {
    this.result += `-${value}`
    return this
  }

  multiply(value) {
    this.result += `*${value}`
    return this
  }

  devide(value) {
    this.result += `/${value}`
    return this
  }

  pow(value) {
    this.result += `**${value}`
    return this
  }

  valueOf() {
    return eval(this.result)
  }
}

module.exports = SmartCalculator;