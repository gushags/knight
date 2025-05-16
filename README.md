# Knight Travails

Receive a start coordinate and calculate (and print) the number of steps
necessary for a knight to reach the end position. There can be multiple correct
answers as long as they take the same number of steps (or traverse) the same
number of edges.

A knight moves two steps in one direction and one step in a perpendicular
direction each turn.

The board is 8 X 8.

The graph of a knight's relative path from a center point can be defined as
follows:

[ [2, 1], [1, 2], [2, -1], [1, -2], [-2, -1], [-1, -2] [-2, 1] [-1, 2] ]

Chess board constraints:

# 0,0; 0,1; 0,2; 0,3; 0,4; 0,5; 0,6; 0,7

# 1,0; 1,1; 1,2; 1,3; 1,4; 1,5; 1,6; 1,7

# 2,0; 2,1; 2,2; 2,3; 2,4; 2,5; 2,6; 2,7

# 3,0; 3,1; 3,2; 3,3; 3,4; 3,5; 3,6; 3,7

# 4,0; 4,1; 4,2; 4,3; 4,4; 4,5; 4,6; 4,7

# 5,0; 5,1; 5,2; 5,3; 5,4; 5,5; 5,6; 5,7

# 6,0; 6,1; 6,2; 6,3; 6,4; 6,5; 6,6; 6,7

# 7,0; 7,1; 7,2; 7,3; 7,4; 7,5; 7,6; 7,7

A knight can move into any square eventually, but is constrained by:

for [i, j] ==> i >= 0 && i <= 7, j >= 0 && j <= 7

for start = [4,3] add the relative path and each of these are potential edges
so...

[4,3] ==>

[ [6, 4], [5, 5], [6, 2], [5, 1], [2, 2], [3, 1], [2, 3] [3, 5] ]

1. Start at any vertex in the graph
2. Add the starting vertex to the hash table to mark it as having been visited
3. Add the starting vertex to the queue
4. Start a loop that runs while the queue isn't empty
5. Within the loop, remove the first vertex from the queue. This is the
   currentVertex
6. Iterate over all the adjacent vertices of the current vertex.
7. If the adjacent vertex was already visited, ignore it.
8. If the adjacent vertex has not yet been visited, mark it as visited by adding
   it to the hash table, and add it to the queue.
9. Repeat this loop (starting from Step 4) until the queue is empty.

Create a tree from each node with all possible moves. Use BFS search to find the
target.
