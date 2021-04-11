const CounterPlugin = function ({
    rootSelector,
    counterValue = 0, 
    step = 1,
} = {}){
   this._value = counterValue;
   this._step = step;

   this._refs = this._getRefs(rootSelector);

   this._bindEvents();
   this.updateCounterValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action = increment]');
  refs.decrementBtn = refs.container.querySelector('[data-action = decrement]');
  refs.value = refs.container.querySelector('span');

  return refs;
};

CounterPlugin.prototype._bindEvents = function(){
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateCounterValueUI();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateCounterValueUI();
    })
};

CounterPlugin.prototype.updateCounterValueUI = function(){
    this._refs.value.textContent = this._value;  
};

CounterPlugin.prototype.increment = function(){
   this._value += this._step;
};

CounterPlugin.prototype.decrement = function(){
    this._value -= this._step;
 };

const counterValue = new CounterPlugin({ rootSelector: '#counter', step: 1 });

