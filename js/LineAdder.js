(function() {

    function onAddItem(textBox, rootId, list) {
        if (event.keyCode == 13 || event.type == "click") {
            var todos = JSON.parse(localStorage.getItem(rootId)) || [];
            if (textBox.val()) {
                todos.push(textBox.val());
                localStorage.setItem(rootId, JSON.stringify(todos));

                list.append('<tr><td><b>' + textBox.val() + '</b></td><td class="tabledata"><button class="btnDelete btn btn-default">Remove</button></td></tr>');
                $('.btnDelete').click(function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    EVT.emit("removeLine", rootId);
                });
                textBox.val("");
                textBox.focus();
            }
        }
    }
    EVT.on("addLine", onAddItem);

    return {};
})();
