;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "dialekt",
        defaults = {
            dictionary: window.woerterbuch
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;
        this._patterns = [];

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            if(this._patterns.length == 0) {
                this.generatePatterns(this.element, this.options);
            } else {
                this.parseDocument(this.element, this.options);
            }
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
        },

        generatePatterns: function(el, options) {
            var $this = this;
            $.each(options['dictionary'], function(key, value){
               $this._patterns.push([new RegExp(key, "g"), value]);
            });
            $this.parseDocument(el, options);
        },

        // parse the DOM node and replace all letters or words
        parseDocument: function(el, options) {
            var $this = this;
            $.each($this._patterns, function(index, patterns){
                $(el).html($(el).html().replace(patterns[0], patterns[1]));
            });
            $this.trigger('dialekt-fertig');
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );