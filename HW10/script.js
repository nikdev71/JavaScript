$(document).ready(function(){
    let board = $("#board");
    let plates = [];
    let emptyPlate = {
        row:3,
        col:3
    };

    let i = 0;
    let j = 0;
    $(".tile").each(function(){
        $(this).data('row',i);
        $(this).data('col',j);
        plates.push($(this));
        if(j!=3){
            j++;
        }
        else{
            j=0;
            i++;
        }
    })
   
    function checkWin() {
        for (var i = 0; i < plates.length; i++) {
            var row = plates[i].data('row');
            var col = plates[i].data('col');
            if (row * 4 + col !== i) {
                return false;
            }
        }
        return true;
    }
    
    board.on('click', '.tile',function(){
        let row = $(this).data('row');
        let col = $(this).data('col');
        let deltaRow = Math.abs(row - emptyPlate.row);
        let deltaCol = Math.abs(col - emptyPlate.col)

        if((deltaRow===1 && deltaCol ===0)||(deltaRow===0 && deltaCol===1)){ 
            $(this).data('row', emptyPlate.row);
            $(this).data('col', emptyPlate.col);
            $(this).css('grid-row', (emptyPlate.row + 1) + ' / ' + (emptyPlate.row + 2));
            $(this).css('grid-column', (emptyPlate.col + 1) + ' / ' + (emptyPlate.col + 2));

            emptyPlate.row = row;
            emptyPlate.col = col;

            if (checkWin()) {
                alert('Вы выиграли!');
            }
        }
    })

    function shufflePlates() {
        let iterations = Math.floor(Math.random()*100+20);

        for(let i= 0;i<iterations;i++)
        $('#board .tile').trigger('click');
    }

    function updateBoard() {
        plates.forEach(function(tile){
            var row = tile.data('row');
            var col = tile.data('col');
            tile.css('grid-row', (row + 1) + ' / ' + (row + 2));
            tile.css('grid-column', (col + 1) + ' / ' + (col + 2));
        });
    }

    shufflePlates();
    updateBoard();
})