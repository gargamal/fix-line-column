const objFrozenHeadFirstLine = function () {
    function updateScroll() {
        const thead = document.getElementById("myhead");
        thead.scrollLeft = document.getElementById("mybody").scrollLeft;
    }

    function highlightLine(that) {
        that.className = "highlightLine";
        that.childNodes[1].className = "highlightLine";
    }

    function noHighlightLine(that) {
        that.className = "noHighlightLine";
        that.childNodes[1].className = "noHighlightLine";
    }

    const manageHighlightColumn = function (index, className) {
        let myBody = document.getElementById('mybody');

        for (let k = 0; k < myBody.childNodes.length; k++) {
            let childLine = myBody.childNodes[k];
            if (childLine.nodeName === 'TR') {
                for (let i = 0, j = 0; i < childLine.childNodes.length; i++) {
                    let childCell = childLine.childNodes[i];
                    if (childCell.nodeName === 'TD') {
                        if (index === j) {
                            childCell.className = className;
                            break;
                        }
                        j++;
                    }
                }
            }
        }

    };

    function highlightColumn(index) {
        manageHighlightColumn(index, "highlightLine");
    }

    function noHighlightColumn(index) {
        manageHighlightColumn(index, "");
    }

    return {
        updateScroll,
        highlightLine,
        noHighlightLine,
        noHighlightColumn,
        highlightColumn,
    }
};

const FrozenHeadFirstLine = objFrozenHeadFirstLine();