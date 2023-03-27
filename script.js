let rows = 3;
let cols = 3;
let table = document.querySelector('table');
let count = 0;
let steps = document.createElement('p');
    steps.innerHTML = 'Сделано ходов: ' + count;
    document.body.appendChild(steps)


let colors = ['red', 'green', 'blue'];


function getClass(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function getNextColor(colors, color) {
    if (colors.indexOf(color) == colors.length - 1) {
        return colors[0];
    } 
    return colors[colors.indexOf(color) + 1];
}

function createTable(rows, cols) {
    
	for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cols; ++j) {
            let td = document.createElement('td');

            td.classList.add(getClass(colors));
            row.appendChild(td);
            td.addEventListener('click', function() {
                count++;
                steps.innerHTML = 'Сделано ходов: ' + count;
                let currentColor = this.classList[0];
                this.classList.remove(currentColor);
                this.classList.add(getNextColor(colors, currentColor));
                
                if (document.querySelectorAll('.' + getNextColor(colors, currentColor)).length == 9) {
                    let msg = document.createElement('p');
                    msg.innerHTML = 'Победа!'
                    document.body.appendChild(msg)
                }
            })
            
        }
        table.appendChild(row);
        

    }
    
}

createTable(rows, cols);







