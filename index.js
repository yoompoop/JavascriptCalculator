const display = document.getElementById("display");
let acceptInput = true;
let expression="";
let justCalculated = false;
function AppendToDisplay(input, show=null, cont=false)
{

    if (!acceptInput)
    {
        ClearDisplay();
    }
    if(justCalculated && !cont)
    {
        expression = input;
        display.textContent = show ?? input;
    }
    else
    {
        expression += input;
        display.textContent += show ?? input;
    }
    justCalculated = false;
}

function CalculateAnswer()
{
    justCalculated = true;
    try
    {
        display.textContent=eval(expression);
    }
    catch(error)
    {
        display.textContent="Error";
        expression = "";
        acceptInput = false;
    }
}

function ClearDisplay()
{
    justCalculated = false;

    display.textContent="";
    expression="";
    acceptInput = true;
}

function Backspace()
{
    display.textContent = display.textContent.slice(0, -1);
}
