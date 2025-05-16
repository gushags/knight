// knight.js
import { Queue } from "./queue.js";

function KnightMoves(start, end) {
  /**
   * Receive a start coordinate and calculate (and print)
   * the number of steps necessary for a knight to reach
   * the end position. There can be multiple correct answers
   * as long as they take the same number of steps (or traverse)
   * the same number of edges.
   *
   * A knight moves two steps in one direction and one step
   * in a perpendicular direction each turn.
   *
   * The board is 8 X 8.
   *
   * The graph of a knight's relative path from a center point
   * can be defined as follows:
   *
   * [[2, 1],
   *  [1, 2],
   *  [2, -1],
   *  [1, -2],
   *  [-2, -1],
   *  [-1, -2]
   *  [-2, 1]
   *  [-1, 2]
   * ]
   *
   *
   */
}

class CreateKnight {
  constructor([a, b]) {
    this.knightCoordinates = [a, b];
    this.choices = this.buildChildren([a, b]);
  }
  buildChildren([a, b]) {
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
      const c = a + moves[i][0];
      const d = b + moves[i][1];

      if (c <= 7 && d <= 7 && c >= 0 && d >= 0) {
        childrenArray.push([c, d]);
      }
    }
    return childrenArray;
  }
}
