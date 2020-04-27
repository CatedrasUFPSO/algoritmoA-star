/**
 * Función que inicializa la ejecución. Se autoejecuta al momento que el script es cargado en el HTML
 */
(() => {
  // prettier-ignore
  const STAGE_MATRIX = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0],
    [0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1],
    [1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1],
    [1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1],
    [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1],
    [1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1],
    [1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1]
  ];

  const TOTAL_ROWS = STAGE_MATRIX.length;
  const TOTAL_COLS = STAGE_MATRIX[0].length;

  const CANVAS = document.getElementById('stage');
  const CTX = CANVAS.getContext('2d');
  const SQUARE_SIZE = CANVAS.width / TOTAL_COLS;

  drawGrid(CTX, SQUARE_SIZE, STAGE_MATRIX, TOTAL_ROWS, TOTAL_COLS);

  aStar(STAGE_MATRIX, CTX, SQUARE_SIZE, TOTAL_ROWS, TOTAL_COLS);
})();

/**
 * Función aStar - Evalúa y define la ruta más corta entre dos puntos (si existe)
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos)
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} totalRows - Cantidad de filas del escenario
 * @param {*} totalCols - Cantidad de columnas del escenario
 */
function aStar(stageMatrix, ctx, squareSize, totalRows, totalCols) {
  // Creo los objetos con las propiedades de cada casilla
  const STAGE_OBJECTS = makeStageObjects(stageMatrix, totalRows, totalCols);

  // Constantes que definen la casilla de inicio y de destino final
  const START_POINT = STAGE_OBJECTS[0][0];
  const END_POINT = STAGE_OBJECTS[24][21];

  // Array donde se van almacenando las casillas candidatas a ser visitadas
  let openSet = [];
  // Array donde se almacenan las casillas ya visitadas
  let closedSet = [];
  // Array para almacenar las casillas que se deben recorrer para llegar del punto A al B (solución)
  let pathArray = [];
  // Variable de control para identificar si ya se ha encontrado una solución
  let pathFound = false;

  // Se añade la casilla de inicio que permite comenzar la búsqueda del camino
  openSet.push(START_POINT);

  while (!pathFound) {
    if (openSet.length > 0) {
      let smallerCostSquare = openSet[0];

      // De las posibles casillas a visitar se escoge la de menor coste
      openSet.forEach((square) => {
        if (square.f < smallerCostSquare.f) {
          smallerCostSquare = square;
        }
      });

      let currentSquare = smallerCostSquare;

      // Si la casilla actual es la de destino, se genera el array con el camino y se termina el ciclo
      if (currentSquare === END_POINT) {
        let tempSquare = currentSquare;
        pathArray.push(tempSquare);

        while (tempSquare.father != null) {
          tempSquare = tempSquare.father;
          pathArray.push(tempSquare);
        }

        drawPath(ctx, squareSize, pathArray);
        console.log('Ruta encontrada!!! ' + pathArray.length);
        pathFound = true;
        break;
      }

      // Se elimina la casilla actual del array de candidatas a visitar y se añade al array de las ya visitadas
      deleteSquare(openSet, currentSquare);
      closedSet.push(currentSquare);

      // Se añaden los vecinos de la casilla actual
      if (currentSquare.neighbours.length == 0) {
        currentSquare.neighbours = addNeighbours(
          STAGE_OBJECTS,
          currentSquare,
          totalRows,
          totalCols
        );
      }

      // Se revisan los vecinos de la casilla actual
      currentSquare.neighbours.forEach((neighbour) => {
        // Si el vecino no ha sido visitado y no es un muro, se calculan sus propiedades
        if (!closedSet.includes(neighbour) && neighbour.type != 1) {
          // Se precalculan los pasos del siguiente movimiento
          let nextG = currentSquare.g + 1;

          // Si el vecino es candidato a visitarse y su cantidad de pasos es mayor al del precálculo, se actualiza
          if (openSet.includes(neighbour)) {
            if (nextG < neighbour.g) {
              neighbour.g = nextG;
            }
          } else {
            // Se añade al vecino como candidato a visitarse
            neighbour.g = nextG;
            openSet.push(neighbour);
          }

          // Se realizan los cálculos de las demás propiedades
          neighbour.h = calculateHeuristic(neighbour, END_POINT);
          neighbour.f = neighbour.g + neighbour.h;
          neighbour.father = currentSquare;
        }
      });
    } else {
      // Si no existen posibles casillas a visitar se termina el ciclo
      console.log('Camino imposible!');
      pathFound = true;
    }
  }
}

/**
 * Función calculateHeuristic - Calcula y devuelve la cantidad de pasos desde la casilla actual hasta la casilla destino
 * @param {*} currentSquare - Casilla actual
 * @param {*} endPoint - Casilla destino
 */
function calculateHeuristic(currentSquare, endPoint) {
  let x = Math.abs(currentSquare.x - endPoint.x);
  let y = Math.abs(currentSquare.y - endPoint.y);

  return x + y;
}

/**
 * Función deleteSquare - Elimina un elemento del array recibido
 * @param {*} setArray - Array al que se le eliminará el elemento
 * @param {*} square - Elemento(objeto) a eliminar
 */
function deleteSquare(setArray, square) {
  for (let i = setArray.length - 1; i >= 0; i--) {
    if (setArray[i] == square) {
      setArray.splice(i, 1);
    }
  }
}

/**
 * Función makeStageObjects - Genera los objetos con las propiedades necesarias para cada posición del array
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos)
 * @param {*} totalRows - Cantidad de filas a calcular
 * @param {*} totalCols - Cantidad de columnas a calcular
 */
function makeStageObjects(stageMatrix, totalRows, totalCols) {
  let stageObjects = [];

  for (let i = 0; i < totalRows; i++) {
    let rowArray = [];
    for (let j = 0; j < totalCols; j++) {
      let stageObject = {
        x: i,
        y: j,
        type: stageMatrix[i][j], // Camino 0, obstáculo 1
        f: 0, // Coste total (g+h)
        g: 0, // Pasos dados
        h: 0, // Heurística - Distancia de la casilla actual a la destino final
        neighbours: [],
        father: null
      };

      rowArray.push(stageObject);
    }

    stageObjects.push(rowArray);
  }

  return stageObjects;
}

/**
 * Función addNeighbours - Busca y devuelve los vecinos de la casilla recibida
 * @param {*} stageObjects - Array que contiene todos los objetos que representan las casillas del escenario
 * @param {*} stageObject - Objeto(casilla) a la que se le debe buscar los vecinos
 * @param {*} totalRows - Cantidad de filas del escenario
 * @param {*} totalCols - Cantidad de columnas del escenario
 */
function addNeighbours(stageObjects, stageObject, totalRows, totalCols) {
  let neighbourList = [];

  // Vecino arriba, se verifica que la casilla actual no esté en el límite superior del canvas
  if (stageObject.y > 0) {
    neighbourList.push(stageObjects[stageObject.x][stageObject.y - 1]);
  }

  // Vecino derecha, se verifica que la casilla actual no esté en el límite derecho del canvas
  if (stageObject.x < totalCols - 1) {
    neighbourList.push(stageObjects[stageObject.x + 1][stageObject.y]);
  }

  // Vecino abajo, se verifica que la casilla actual no esté en el límite inferior del canvas
  if (stageObject.y < totalRows - 1) {
    neighbourList.push(stageObjects[stageObject.x][stageObject.y + 1]);
  }

  // Vecino izquierda, se verifica que la casilla actual no esté en el límite izquierdo del canvas
  if (stageObject.x > 0) {
    neighbourList.push(stageObjects[stageObject.x - 1][stageObject.y]);
  }

  return neighbourList;
}

/**
 * Función drawPath - Dibuja en el canvas el camino encontrado
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} pathArray - Array con las casillas visitadas para llegar del punto inicial al final
 */
function drawPath(ctx, squareSize, pathArray) {
  let posX, posY;
  const COLOR = '#668000';

  for (let i = 0; i < pathArray.length; i++) {
    posX = pathArray[i].y * squareSize;
    posY = pathArray[i].x * squareSize;

    drawSquare(ctx, squareSize, posX, posY, COLOR);
  }
}

/**
 * Función drawGrid - Dibuja la grilla del escenario dentro del objeto canvas
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos) para dibujar la grilla(escenario)
 * @param {*} totalRows - Cantidad de filas a dibujar
 * @param {*} totalCols - Cantidad de columnas a dibujar
 */
function drawGrid(ctx, squareSize, stageMatrix, totalRows, totalCols) {
  let color, posX, posY;

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      // Determinar el color de la casilla dependiendo del tipo de casilla
      color = stageMatrix[i][j] == 0 ? '#999' : '#333';
      posX = j * squareSize;
      posY = i * squareSize;

      drawSquare(ctx, squareSize, posX, posY, color);
    }
  }
}

/**
 * Función drawSquare - Dibuja una casilla en el canvas con el color,y posiciones recibidas
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} posX - Posición que tomará la casilla en el eje X, relativa al canvas
 * @param {*} posY - Posición que tomará la casilla en el eje Y, relativa al canvas
 * @param {*} color - Color (hexadecimal) que tomará la casilla
 */
function drawSquare(ctx, squareSize, posX, posY, color) {
  // Dibujar la casilla en el canvas
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, squareSize, squareSize);

  // Dibujar un borde blanco sobre la casilla
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.strokeRect(posX, posY, squareSize, squareSize);
}
