var rejectedPr = new Promise(function (resolve, reject) {
    reject('oops');
});

rejectedPr
    .then(function fulfilled() {
            // never goes here
        },
        function rejected(err) {
            console.log(err);
        });