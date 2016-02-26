(function() {

    function onRemoveItem(rootId) {
        var todos = JSON.parse(localStorage.getItem(rootId));
        var data = $(event.target).parent().prev().text();
        var index = todos.indexOf(data);
        if (index === -1) {
            return;
        }
        todos.splice(index, 1);
        $(event.target).closest("tr").remove();
        localStorage.setItem(rootId, JSON.stringify(todos));
    }

    EVT.on("removeLine", onRemoveItem);

    return {};
})();
