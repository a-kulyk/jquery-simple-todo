(function() {

    function init(rootId) {
        var rootEl = $("#" + rootId);
        var textBox = rootEl.find(".form-control");
        var addButton = rootEl.find("button");
        var list = $('<table class="table"></table>');
        rootEl.append(list);
        textBox.keypress(function() {
            EVT.emit("addLine", textBox, rootId, list);
        });
        addButton.click(function() {
            EVT.emit("addLine", textBox, rootId, list);
        });
        EVT.emit("show", list, rootId);
    }

    EVT.on("init", init);

    return {};
})();
