function foo(num) {
    console.log('foo:' + num);

    // keep track of how many times foo is called
    this.count++;
}

foo.count = 0;

for (var i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}

console.log(foo.count);