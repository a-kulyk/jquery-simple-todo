var EVT = new EventEmitter2();

$(document).ready(function() {
    EVT.emit("init", 'firstList');
    EVT.emit("init", 'secondList');
});
