'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const calc = require('./modules/calc'),
          cards = require('./modules/cards'),
          forms = require('./modules/forms'),
          modalWindow = require('./modules/modalWindow'),
          slider = require('./modules/slider'),
          tabs = require('./modules/tabs'),
          timer = require('./modules/timer');

    calc();
    cards();
    forms();
    modalWindow();
    slider();
    tabs();
    timer();

});