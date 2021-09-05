$(function () {

    const descriptionBox = $('.description-box');
    let item = $('.item');
    let quotes = $('.quotes');
    let learnMore = $('.learn-more');

    item.click(function (ev) {
        let serviceId = $(this).data('service');
        let selectedDescription = descriptionBox[serviceId - 1];
        for (let i = 0; i < descriptionBox.length; i++) {
            $(descriptionBox[i]).addClass('hidden');
        }
        $(selectedDescription).removeClass('hidden');
    })
    
    getPropertyHTML = function(textMessage) {
        return `<p> ${textMessage} </p>`
    }
    quoteListCategory = function(quoteList, randomNumberGnerator) {
        let getRandomQuote = quoteList[randomNumberGnerator].paragraph;
        let getRandomQuoteHTML = getPropertyHTML(getRandomQuote);
        $('.quotes').html(getRandomQuoteHTML);
    }
    learnMore.click(function (event) {  
        quoteListCategory(quoteList, randomNumberGnerator());
        console.log(quoteList)
    })

    randomNumberGnerator = function (){
        return (Math.floor(Math.random()*5));
     }
})