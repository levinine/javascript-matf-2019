var a = 2;

(function IIFE() {
    var a = 3;
    console.log(a); // 3
})();

console.log(a); // 2