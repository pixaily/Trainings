(function() {
   'use strict';

    var Loader = (function(){

        return {
            init: function() {
                this.loader = document.getElementById('loader');
                this.progressBar = document.getElementById('loaderProgressBar');
                this.loaderPercent = document.getElementById('loaderPercent');
                this.gallery = document.querySelector('.gallery');
                this.image = document.getElementsByTagName('img');
                this.percentigePerImage = 100 / this.image.length;

                this.events();
            },

            events: function() {
                var _this = this;
<<<<<<< HEAD
                document.addEventListener('load', function(e) {
                    console.log(e);
                });
=======

>>>>>>> master
                for(var i = 0; i < this.image.length; i++) {
                    if(!_this.image[i].complete) {
                        this.image[i].addEventListener('load', function(e) {
                            _this.loadImage(this, e);
                        });
                        this.image[i].addEventListener('error', function(e) {
                            _this.loadImage(this, e);
                        });
                    } else {
                        _this.loadImage(this);
                    }
                }
            },

            loadImage: function (image, event) {
                this.increaseProgressBar();

                if(event && event.type === 'error') {
                    throw new Error('Error loading image - ' + image.alt);
                }
            },

            increaseProgressBar: function() {
                var _this = this,
                    curWidth = Number(parseFloat(this.progressBar.style.width).toFixed(1)),
                    width = isNaN(curWidth) ? this.percentigePerImage : curWidth + this.percentigePerImage;

<<<<<<< HEAD
                // if (Math.round(width) >= 100) {
                //     width = 100;
                // }

=======
>>>>>>> master
                this.progressBar.style.width = width + '%';
                this.loaderPercent.innerHTML = Math.round(width) + '%';

                if (width >= 100) {
                    this.progressBar.addEventListener('transitionend', function() {
                        _this.loadedCallback();
                    });
                }
            },

            loadedCallback: function() {
                var _this = this;

                this.loader.style.transition = 'opacity 1s ease';
                this.loader.style.opacity = 0;

                this.loader.addEventListener('transitionend', function(e) {
                    if(e.propertyName === 'opacity') {
                        _this.loader.style.display = 'none';
                    }
                })

            }
        }
<<<<<<< HEAD
    })();
=======
    }());
>>>>>>> master

    Loader.init();
})();