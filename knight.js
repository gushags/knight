// knight.js
import { Queue } from "./queue.js";

class Node {
  constructor([a, b], parentNode) {
    this.knightCoordinates = [a, b];
    this.path = parentNode ? parentNode.path.concat([a, b]) : [a, b];
  }
}

function knightMoves(start, end) {
  const startNode = new Node(start, null);
  const queue = new Queue();
  let visitedSpaces = {};

  visitedSpaces[startNode.knightCoordinates] = true;
  queue.enqueue(startNode);

  while (queue.read()) {
    const currentNode = queue.dequeue();

    if (String(currentNode.knightCoordinates) === String(end)) {
      displayPath(currentNode);
      return;
    }
    const nextChoices = buildChoices(currentNode);
    for (const choice of nextChoices) {
      if (!visitedSpaces[choice.knightCoordinates]) {
        visitedSpaces[choice.knightCoordinates] = true;
        queue.enqueue(choice);
      }
    }
  }
}

// build immediate children
function buildChoices(node) {
  const moves = [
    [2, 1],
    [1, 2],
    [2, -1],
    [1, -2],
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
  ];
  let childrenArray = [];
  for (let i = 0; i < moves.length; i++) {
    const c = node.knightCoordinates[0] + moves[i][0];
    const d = node.knightCoordinates[1] + moves[i][1];

    if (c <= 7 && d <= 7 && c >= 0 && d >= 0) {
      childrenArray.push(new Node([c, d], node));
    }
  }
  return childrenArray;
}

function displayPath(node) {
  const steps = node.path.length / 2 - 1;
  console.log(
    `Congratulations! You made it in ${steps} moves. Here's your path:`
  );
  for (let i = 0; i < node.path.length; i += 2) {
    console.log(`[${node.path[i]}, ${node.path[i + 1]}]`);
  }
}

knightMoves([0, 0], [5, 7]);
