setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
                setTimeout(function () {
                    console.log(5);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);