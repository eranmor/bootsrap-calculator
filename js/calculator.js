// Determines button clicked via id
function input(id) {
  document.calc.result.value+=id;
}

// Clears screen
function clear() {
  document.calc.result.value="";
}

// Calculates values
function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Error";
    }
}
