$(function() {
    console.log('ready');

    const plumbingService = $('.plumbing-service');
    const electricityService = $('.electricity-service');
    const carpentryService = $('.carpentry-service');
    const decorationService = $('.decoration-service');
    const refurbishmentsService = $('.refurbishments-service');
    const extensionsService = $('.extensions-service');

    const plumbing = $('.plumbing');
    const electricity = $('.electricity');
    const carpentry = $('.carpentry');
    const decoration = $('.decoration');
    const refurbishments = $('.refurbishments');
    const extensions = $('.extensions');

    const descriptionBox = $('.description-box');
    
    plumbingService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(plumbing.hasClass('hidden')) {
            plumbing.removeClass('hidden')
        } else {
            return;
        }

    })
    electricityService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(electricity.hasClass('hidden')) {
            electricity.removeClass('hidden')
        } else {
            return;
        }

    })
    carpentryService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(carpentry.hasClass('hidden')) {
            carpentry.removeClass('hidden')
        } else {
            return;
        }

    })
    decorationService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(decoration.hasClass('hidden')) {
            decoration.removeClass('hidden')
        } else {
            return;
        }

    })
    refurbishmentsService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(refurbishments.hasClass('hidden')) {
            refurbishments.removeClass('hidden')
        } else {
            return;
        }

    })
    extensionsService.click(function() {
        for(let i = 0; i < descriptionBox.length; i++) {
            descriptionBox[i].classList.add('hidden')
        }
        if(extensions.hasClass('hidden')) {
            extensions.removeClass('hidden')
        } else {
            return;
        }

    })





})