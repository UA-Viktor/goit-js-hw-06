const CounterPlugin = function ({} = {}) {

    this._value = 0;
    this._step = 1;
    this._refs = this._getRefs();

    this._bindEvents();
    this.updateValueUI();
}

CounterPlugin.prototype._getRefs = function () {

    const refs = {};
    refs.container = document.querySelector('#counter');
    refs.incrementBtn = refs.container.querySelector("button[data-action='increment']");
    refs.decrementBtn = refs.container.querySelector("button[data-action='decrement']");
    refs.value = refs.container.querySelector('#value');

    return refs;
};

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    });
};


CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;
}

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
}

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
}

const conuter = new CounterPlugin({});