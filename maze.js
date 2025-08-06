function generateSquareMaze(dimension) {
    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    var stack = [];
    var startX = 1, startY = 1;
    
    field[startX][startY] = false;
    stack.push([startX, startY]);
    
    while (stack.length > 0) {
        var current = stack[stack.length - 1];
        var x = current[0];
        var y = current[1];
        
        var directions = [];
        if(x > 1 && field[x-2][y] == true) {
            directions.push([-1, 0]);
        }
        if(x < field.dimension - 2 && field[x+2][y] == true) {
            directions.push([1, 0]);
        }
        if(y > 1 && field[x][y-2] == true) {
            directions.push([0, -1]);
        }
        if(y < field.dimension - 2 && field[x][y+2] == true) {
            directions.push([0, 1]);
        }
        
        if(directions.length == 0) {
            stack.pop();
        } else {
            // Choose a random direction and move
            var dir = directions[Math.floor(Math.random() * directions.length)];
            var newX = x + dir[0] * 2;
            var newY = y + dir[1] * 2;
            
            // Mark the wall and the new cell as path
            field[x + dir[0]][y + dir[1]] = false;
            field[newX][newY] = false;
            
            stack.push([newX, newY]);
        }
    }
    
    return field;
}