const counterValue = 1;

const CounterPlugin = function({initialValue = 0, step = 1} = {}){
   this._value = initialValue;
};

const counter = new CounterPlugin();

// increment 
// decrement 

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */