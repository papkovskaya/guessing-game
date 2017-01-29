class GuessingGame {
    constructor() {
        this.left = this.right = this.middle = null;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.middle = Math.round((this.left + this.right) / 2);
        return this.middle;
    }

    lower() {
        this.right = this.middle;
    }

    greater() {
        this.left = this.middle;
    }
}

module.exports = GuessingGame;
