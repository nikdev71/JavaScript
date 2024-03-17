$(document).ready(function() {
    const $cards = $('.card');
    let flippedCards = [];
    let matchedCards = [];
    let canFlip = false;
    let gameFinished = false;

    function startGame() {
        canFlip = true;
        gameFinished = false;
        matchedCards = [];
        flippedCards = [];
        $cards.removeClass('matched');
        $cards.removeClass('open');

        $cards.each(function() {
            $(this).find('.back').css('transform', 'rotateY(0deg)');
            $(this).find('.front').css('transform', 'rotateY(180deg)');
        });


        $('#startBtn').css("background-color","red").text('Finish').off('click').on('click', finishGame);
        shuffleCards();
    }

    function shuffleCards() {
        $cards.each(function() {
            const randomPos = Math.floor(Math.random() * $cards.length);
            $(this).css('order', randomPos);
        });
    }

    function flipCard() {
        if (!canFlip || $(this).hasClass('open') || $(this).hasClass('matched')) return;
        $(this).toggleClass('open');
        if (!$(this).hasClass('open')) {
            $(this).find('.back').css('transform', 'rotateY(0deg)');
            $(this).find('.front').css('transform', 'rotateY(180deg)');
        } else { 
            $(this).find('.back').css('transform', 'rotateY(180deg)');
            $(this).find('.front').css('transform', 'rotateY(0deg)');
        }
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            canFlip = false;
            checkMatch();
        }
    }

    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;
        if ($(firstCard).data('id') === $(secondCard).data('id')) {
            matchedCards.push(firstCard, secondCard);
            flippedCards = [];
            canFlip = true;
            if (matchedCards.length === $cards.length) {
                finishGame();
                $( "#dialog" ).dialog({
                    modal:true,
                    show: {
                      effect: "blind",
                      duration: 1000
                    },
                    hide: {
                      effect: "blind",
                      duration: 1000
                    }
                  });
            }
        } else {
            setTimeout(() => {
                $(flippedCards).removeClass('open');
                $(flippedCards).find('.back').css('transform', 'rotateY(0deg)');
                $(flippedCards).find('.front').css('transform', 'rotateY(180deg)');
                flippedCards = [];
                canFlip = true;
            }, 2000);
        }
    }

    function finishGame() {
        if (gameFinished) return;
        gameFinished = true;
        canFlip = false;
        $cards.addClass('matched');
        $('#startBtn').css("background-color","green").text('Start').off('click').on('click', startGame);
    }

    $cards.on('click', flipCard);
    $('#startBtn').on('click', startGame);
});
