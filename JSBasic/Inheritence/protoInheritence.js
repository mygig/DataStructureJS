var Person = {
    full_name: function() {
        return this.first_name + " " + this.last_name;
    }
};
/**
 * first way of bootstrapping object with values.
 */
// var monu = Object.create(Person, {
//     first_name: {
//         value: "monu"
//     },
//     last_name: {
//         value: "sonu"
//     }

// });

/**
 * second way of bootstrapping object with values.
 */

function PersonFactory(first_name, last_name) {
    var person = Object.create(Person);
    person.first_name = first_name;
    person.last_name = last_name;
    return person;
}


var monu = new PersonFactory("maui", "zaui");
console.log(monu.full_name());