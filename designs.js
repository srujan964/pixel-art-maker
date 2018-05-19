//Variable declarations
let width = $("#inputWeight");
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


//Function to create a new grid, and adds an event listener to color these cells.
function makeGrid() {
    for(let rowIndex = 0; rowIndex < height.val(); rowIndex++) {
        var row = "<tr>";
        for(let collndex = 0; collndex < width.val(); collndex++) {
            row += "\n<td></td>";
        }
        row += "\b</tr>";
        grid.append(row);
        $("td").on("click", function setCell() {
            $(this).attr("style", "background-color: " + color.val());
        });
    }
}

