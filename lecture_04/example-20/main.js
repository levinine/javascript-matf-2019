function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar('a', 'obj a');

a.myName();
a.myLabel();

