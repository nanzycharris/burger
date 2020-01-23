var orm = require("../config/orm.js");

var burger = {
    // method to get all the burgers
    all: function (cb) {
        orm.all("burgers", function (res) {
            // console.log(res)
            cb(res);
        });
    },
    // method to create a burger
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [name, false], cb);
    },
    // method to update a burger
    update: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;