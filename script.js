const input = document.getElementById("input");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const multiplicacion = document.getElementById("*");
const division = document.getElementById("/");
const potencia = document.getElementById("%");
const result = document.getElementById("=");
const decimal = document.getElementById(".");

const insertValues = (value) => {
  if (input.value.length === 1) {
    const inputVal = parseInt(input.value);
    if (inputVal === 0) {
      input.value = "";
    }
  }
  input.value += value;
};
const checkOperator = (value) => {
  let operator = "";

  for (let i = 0; i < input.value.length; i++) {
    if (
      input.value[i] === "%" ||
      input.value[i] === "/" ||
      input.value[i] === "*" ||
      input.value[i] === "-" ||
      input.value[i] === "+"
    ) {
      operator = input.value[i];
      let inputS = input.value.split(operator);
      if (inputS.length === 2 && inputS[1] !== "") {
        const cant1 = parseInt(inputS[0]);
        const cant2 = parseInt(inputS[1]);
        switch (operator) {
          case "+":
            input.value = cant1 + cant2;
            break;
          case "-":
            input.value = cant1 - cant2;
            break;
          case "*":
            input.value = cant1 * cant2;
            break;
          case "/":
            if (cant2 === 0) {
              alert("Error: Division por cero");
              input.value = "0";
              return;
            }
            input.value = cant1 / cant2;
            break;
          case "%":
            input.value = cant1 % cant2;
            break;
        }
        return false;
      }
      input.value = input.value.replace(operator, value);
      return true;
    }
  }
  return false;
};
result.addEventListener("click", () => {
  console.log("entra");
  let operator;
  for (let i = 0; i < input.value.length; i++) {
    if (
      input.value[i] === "%" ||
      input.value[i] === "/" ||
      input.value[i] === "*" ||
      input.value[i] === "-" ||
      input.value[i] === "+"
    ) {
      operator = input.value[i];
      console.log("entra aqui");
      const inputS = input.value.split(operator);
      if (inputS.length === 2) {
        console.log("entra aqui de nuevo");
        const cant1 = parseInt(inputS[0]);
        const cant2 = parseInt(inputS[1]);
        switch (operator) {
          case "+":
            input.value = cant1 + cant2;
            break;
          case "-":
            input.value = cant1 - cant2;
            break;
          case "*":
            input.value = cant1 * cant2;
            break;
          case "/":
            if (cant2 === 0) {
              alert("Error: Division por cero");
              input.value = "0";
              return;
            }
            input.value = cant1 / cant2;
            break;
          case "%":
            input.value = cant1 % cant2;
            break;
        }
        return false;
      }
    }
  }
});
suma.addEventListener("click", () => {
  let isFoundOperation = checkOperator("+");
  if (!isFoundOperation) input.value += "+";
});
resta.addEventListener("click", () => {
  let isFoundOperation = checkOperator("-");
  if (!isFoundOperation) input.value += "-";
});
multiplicacion.addEventListener("click", () => {
  let isFoundOperation = checkOperator("*");
  if (!isFoundOperation) input.value += "*";
});
division.addEventListener("click", () => {
  let isFoundOperation = checkOperator("/");
  if (!isFoundOperation) input.value += "/";
});
potencia.addEventListener("click", () => {
  //falta colocar logica
});
clear.addEventListener("click", () => {
  input.value = "0";
});
del.addEventListener("click", () => {
  if (input.value.length === 1) {
    return (input.value = "0");
  }
  input.value = input.value.slice(0, -1);
});
num1.addEventListener("click", () => {
  insertValues(1);
});

num2.addEventListener("click", () => {
  insertValues(2);
});

num3.addEventListener("click", () => {
  insertValues(3);
});

num4.addEventListener("click", () => {
  insertValues(4);
});

num5.addEventListener("click", () => {
  insertValues(5);
});

num6.addEventListener("click", () => {
  insertValues(6);
});

num7.addEventListener("click", () => {
  insertValues(7);
});

num8.addEventListener("click", () => {
  insertValues(8);
});

num9.addEventListener("click", () => {
  insertValues(9);
});

num0.addEventListener("click", () => {
  insertValues(0);
});
