// using IIFE so we done interfere with global space.
// passing window and jquery object duing IIFE execution.
(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        // returning a function contructor so user dont have to type "new" keyword again and again.
        return new Greetr.init(firstname, lastname, language);
    }

    // declaring private variables.
    var supportedLangs = ['en', 'es'];
    // declaring private variables.
    var greetings = {
        en: "hello",
        es: "hola"
    };
    // declaring private variables.
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };
    // declaring private variables.
    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    };

    // adding function and properties to the prototype.
    Greetr.prototype = {

        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + "  " + this.firstname; + "!"
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + " , " + this.fullName();
        },

        greet: function(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            // returning this as we want to make the methods chainable.
            return this;
        },

        log: function() {
            // using console as when console is not open in browser its undefined by default;
            if (console) {
                console.log(logMessages[this.language] + " " + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw "JQuery not loaded";
            }
            if (!selector) {
                throw "Missing JQuery selector";
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            $(selector).html(msg);
            // returning this as we want to make the methods chainable.
            return this;
        }

    };
    // function constructor definition.
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || " ";
        self.lastname = lastname || " ";
        self.language = language || "en";
        self.validate();
    }

    // inheritence using classical model.
    Greetr.init.prototype = Greetr.prototype;
    // attaching Greeter to global object.
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);