(function() {

    function show(list, rootId) {
        var todos = JSON.parse(localStorage.getItem(rootId)) || [];

        var content = '';
        for (var i = 0; i < todos.length; i++) {
            content += '<tr><td><b>' + todos[i] + '</b></td><td class="tabledata"><button class="btnDelete btn btn-default">Remove</button></td></tr>';
        }
        list.html(content);

        $('.btnDelete').click(function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            EVT.emit("removeLine", rootId);
        });
    }

    EVT.on("show", show);

    return {};
})();
