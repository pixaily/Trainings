(function() {
    'use strict';

    function generatorSquaresEvents(maxClicks, cols, rows, containerId) {
        var toCreateCells, toAddListeners, holderId, html, container, attrForClicks, holder, squares;

        function init() {
            toCreateCells = true,
            holderId = 'cellsHolder',
            html = '<table id="' + holderId + '" data-color1="#FFF" data-color2="#FCF6A9" data-color3="#FCCF05"' +
                ' data-color4="#FC8505" data-color5="#F50202">',
            container = document.getElementById(containerId),
            attrForClicks = 'data-number-clicks';
            toAddListeners = true;
        }

        function createCells() {
            generateCells();
            insertCells();
            initCells();

            toCreateCells = false;
        }

        function generateCells() {
            var i, j;

            for(i = 0; i < rows; i += 1) {
                html += '<tr>';
                for(j = 0; j < cols; j += 1) {
                    html += '<td></td>';
                }
                html += '</tr>';
            }
            html += '</table>';
        }

        function insertCells() {
            container.innerHTML = html;
        }

        function initCells() {
            getElements();
            setEvents();
        }

        function getElements() {
            holder = document.getElementById('cellsHolder');
            squares = holder.getElementsByTagName('td');
        }

        function setEvents() {
            loopSquares(function(el) {
                resetAttributes(el);
                addListenerToCells(el);
            });

            toAddListeners = false;
        }

        function loopSquares(func) {
            var i;
            for(i = 0; i < squares.length; i += 1) {
                func(squares[i]);
            }
        }

        function resetAttributes(el) {
            el.setAttribute(attrForClicks, '0');
        }

        function addListenerToCells(el) {
            el.addEventListener('click', clickOnCell);
        }

        function clickOnCell(event) {
            var clicksNum = Number(Number(event.target.getAttribute(attrForClicks)) + 1);

            if(!(event instanceof MouseEvent)) {
                event.target.setAttribute(attrForClicks, clicksNum);
            }
        }

        function getRandomNumber() {
            return Math.floor(Math.random() * ((rows * cols) - 1)) + 1;
        }

        // Click on generate
        function generateClicks() {
            var event = new Event('click'),
                i, rndNumber;

            // Create cells
            if(toCreateCells) {
                createCells();
            }

            // Add event listener
            if(toAddListeners) {
                setEvents();
            }

            for (i = 1; i <= maxClicks; i += 1) {
                rndNumber = getRandomNumber(); // Get random cell number
                squares[rndNumber].dispatchEvent(event); // Trigger click on cell
            }
        }

        function paintBackground(el, clicks) {
            el.style.background = getColor(clicks);
        }

        function getColor(numOfClicks) {
            var curColor;
            if (numOfClicks >= 0 && numOfClicks <= 25) {
                curColor = holder.getAttribute('data-color1');
            } else if(numOfClicks > 25 && numOfClicks <= 50) {
                curColor = holder.getAttribute('data-color2');
            } else if(numOfClicks > 50 && numOfClicks <= 75) {
                curColor = holder.getAttribute('data-color3');
            } else if(numOfClicks > 75 && numOfClicks <= 100) {
                curColor = holder.getAttribute('data-color4');
            } else {
                curColor = holder.getAttribute('data-color5');
            }
            return curColor;
        }

        function writeClicks(el, cnt) {
            el.innerHTML = cnt;
        }

        // Click on show result
        function showResult() {
            var curClicks;

            loopSquares(function(el) {
                curClicks = el.getAttribute(attrForClicks);
                paintBackground(el, curClicks);
                writeClicks(el, curClicks);
            });
        }

        function clearCells(el) {
            el.innerHTML = "";
        }

        function clearBackground(el) {
            el.style.background = "transparent";
        }

        function clearEvents(el) {
            el.removeEventListener('click', clickOnCell);
        }

        // Click on reset
        function resetGenerator() {
            loopSquares(function (el) {
                resetAttributes(el);
                clearCells(el);
                clearBackground(el);
                clearEvents(el);
            });

            toAddListeners = true;
        }

        init();

        return {
            generateClicks: generateClicks,
            resetGenerator: resetGenerator,
            showResult: showResult
        }

    }

    var generator = generatorSquaresEvents(100, 10, 10, 'cellsWrapper');

    document.getElementById('generate-clicks').addEventListener('click', function() {
        generator.generateClicks();
    });

    document.getElementById('show-results').addEventListener('click', function() {
        generator.showResult();
    });

    document.getElementById('reset').addEventListener('click', function() {
        generator.resetGenerator();
    });

}());