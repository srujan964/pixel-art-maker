//Variable declarations
let width = $("#inputWidth");
let height = $("#inputHeight");
let grid = $("#pixelCanvas");
let color = $("#colorPicker");

//Submit button event listener.
//Clears the grid first, and then creates a new on based on inputs: width and height.
$('form').on('submit', function(event) {
    event.preventDefault();
    resetGrid();
    makeGrid();
});

//Function to clear the grid.
function resetGrid() {
    grid.empty();
}

//Adds an event listener to every table cell 
$('#pixelCanvas').on('click', 'tr td', function() {
    $(this).attr("style", "background-color: " + color.val());
  });

//Function to create a new grid.
function makeGrid() {
    for(let rowIndex = 0; rowIndex < height.val(); rowIndex++) {
        var row = "<tr>";
        for(let colIndex = 0; colIndex < width.val(); colIndex++) {
            row += "\n<td></td>";
        }
        row += "\b</tr>";
        grid.append(row);
    }
    
}

