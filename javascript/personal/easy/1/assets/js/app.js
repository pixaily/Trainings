(function() {
    'use strict';

    var TextCounter = {
        maxChar: 140,
        textArea: null,
        textAreaTotal: null,
        textAreaLeft: null,
        init: function() {
            this.textArea = document.querySelector('#js-message');
            this.textAreaTotal = document.querySelector('#js-message-left-total');
            this.textAreaLeft = document.querySelector('#js-message-left-symbols');

            // Easy way to do the limitation
            // this.textArea.setAttribute('maxlength', this.maxChar);

            this.events();
        },
        events: function() {
            var _this = this,
                symbols;

            document.getElementById('js-message').addEventListener('keydown', function(e) {
                var keyCode = Number(e.keyCode),
                    validKeys = keyCode !== 8 && (keyCode < 35 || keyCode > 40) && keyCode !== 45 && keyCode !== 46;

                symbols = this.value.length;

                if(symbols >= _this.maxChar && validKeys) {
                    e.preventDefault();
                }
            });

            document.getElementById('js-message').addEventListener('keyup', function(e) {
                document.getElementById('js-message-left-total').innerHTML = symbols;
            });
        }
    };

    TextCounter.init();

})();