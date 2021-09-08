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

    getPropertyHTML = function (textMessage) {
        return `<p> ${textMessage} </p>`
    }
    quoteListCategory = function (quoteList, randomNumberGnerator) {
        let getRandomQuote = quoteList[randomNumberGnerator].paragraph;
        let getRandomQuoteHTML = getPropertyHTML(getRandomQuote);
        $('.quotes').html(getRandomQuoteHTML);
    }
    learnMore.click(function (event) {
        quoteListCategory(quoteList, randomNumberGnerator());
        console.log(quoteList)
    })

    randomNumberGnerator = function () {
        return (Math.floor(Math.random() * 5));
    }

    $('.get-quote').click(function () {
        $('.overlay').removeClass('hidden'); 
    })
    $('.close-overlay').click(function () {
        $('.overlay').addClass('hidden');
    })

    $('.project-item').click(function(event) {
        let imgUrl =  "url(./poze/building" + event.target.getAttribute('data-id') + ".jpg)";
        $('.project-img-wrapper').css('background-image', imgUrl);
        $('.projects-overlay').removeClass('hidden');
        let projectIndex = parseInt(event.target.getAttribute('data-id'));
        $('.modal-arrow-right').attr('data-id', projectIndex + 1);
        $('.modal-arrow-left').attr('data-id', projectIndex == 1 ? projectIndex : projectIndex - 1);
    })
    
    $('.modal-arrow-right').click(function (event) { 
        console.log(event.target.getAttribute('data-id'))
        let getDataAttribute = event.target.getAttribute('data-id');
        let imgUrl =  "url(./poze/building" + getDataAttribute + ".jpg)";
        $('.project-img-wrapper').css('background-image', imgUrl);
        if(getDataAttribute < $('.project-item').length) {
            $('.modal-arrow-right').attr('data-id', parseInt(getDataAttribute) + 1);
            $('.modal-arrow-left').attr('data-id', parseInt(getDataAttribute) - 1);
        }
    })
     $('.modal-arrow-left').click(function (event) { 
        console.log(event.target.getAttribute('data-id'))
        let getDataAttribute = event.target.getAttribute('data-id');
        let imgUrl =  "url(./poze/building" + getDataAttribute + ".jpg)";
        $('.project-img-wrapper').css('background-image', imgUrl);
        if(getDataAttribute > 1) {
            $('.modal-arrow-right').attr('data-id', parseInt(getDataAttribute) + 1);
            $('.modal-arrow-left').attr('data-id', parseInt(getDataAttribute) - 1);
        }
    })
    $('.close-project-overlay').click(function () { 
        $('.projects-overlay').addClass('hidden');
     })

})