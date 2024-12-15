enum Operación {
  MULTI = 'multi',
  SUMA = 'suma',
  RESTA = 'resta',
  DIVISION = 'division'
}

const calculadora = (a: number, b: number, op: Operación): number => {
  if (!Object.values(Operación).includes(op as Operación)) {
    throw new Error("La operación No es valida");
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Un valor no es un numero");
  }

  switch (op) {
    case Operación.SUMA:
      return a + b;
    case Operación.MULTI:
      return a * b;
    case Operación.RESTA:
      return a - b;
    case Operación.DIVISION:
      if (b == 0) {
        throw new Error("No se puede dividir por 0");
      }
      return a / b;
  }
}