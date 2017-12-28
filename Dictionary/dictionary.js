// Dictionary is essentialy a Dictionary which stores elements as key value pair.
/**
 * @constructor function
 */
function Dictionary() {
     this.items = {};
}
/**
 * @method to check if the Dictionary contains key
 * @param {*} key 
 */
Dictionary.prototype.has = function (key) {
    // could use this.hasOwnProperty(key);
    return key in this.items;
};
/**
 * @method method to set the value of Dictionary by setting key and values.
 * @param {*} key 
 * @param {*} value 
 */
Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
};
/**
 * @method method to remove the entry from Dictionary.
 * @param {*} key 
 */
Dictionary.prototype.remove = function (key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    } else {
        return false;
    }
};
/**
 * @method method to get value form Dictionary
 * @param {*} key 
 */
Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
};
/**
 * @method method to get a list of all the values in Dictionary
 */
Dictionary.prototype.values = function () {
    var values = [];
    for (var k in this.items) {
        if (this.has(k)) {
            values.push(this.items[k]);
        }
    }
    return values;
};
/**
 * @method to clear the Dictionary.
 */
Dictionary.prototype.clear = function(){
    this.items = {};
};
/**
 * @method method to know the size
 */
Dictionary.prototype.size = function(){
    return Object.keys(this.items).length;
};
/**
 * @method to get all the keys of Dictionary
 */
Dictionary.prototype.keys = function(){
    return Object.keys(this.items);
};
/**
 * @method to inspect the this.items object.
 */
Dictionary.prototype.getItems = function(){
    return this.items;
}
// exporting the dictionary constructor function.
module.exports = Dictionary;