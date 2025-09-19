const display = document.getElementById("display");
let acceptInput = true;
function appendToDisplay(input)
{
    if (acceptInput)
    {
        display.value += input;
    }
}

function clearDisplay()
{
    display.value = ""
    acceptInput = true;
}

function calculate()
{
    try
    {
        display.value = eval(display.value)
    }
    catch(error)
    {
        display.value = "Error";
        acceptInput = false;
    }
}

  function backspace() {
    display.value = display.value.slice(0, -1);
  }