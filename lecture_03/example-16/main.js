function setupBot(name, selector) {
    $(selector).click( function activator() {
        console.log('Activating: ' + name);
    });
}

setupBot('Closure bot 1', '#bot_1');
setupBot('Closure bot 2', '#bot_2');