var eventLoop = [ ];
var event;

console.log('Starting event loop');

while (true) {
    if (eventLoop.length > 0) {
        console.log('Pick first event');
        event = eventLoop.shift();

        try {
            console.log('Try to execute an event');
            event();
        }
        catch (err) {
            console.log(err);
        }
    }
}
