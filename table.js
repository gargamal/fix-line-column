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

    const getIndexColumn = function (that) {
        for (let i = 0, j = 0; i < that.parentNode.childNodes.length; i++) {
            let childNode = that.parentNode.childNodes[i];
            if (childNode.nodeName === 'TD') {
                if (childNode === that) {
                    return j;
                }
                j++;
            }
        }

        return -1;
    };

    function highlightColumn(that) {
        let index = getIndexColumn(that);
        if (index > -1) {
            manageHighlightColumn(index, "highlightLine");
        }
    }

    function noHighlightColumn(that) {
        let index = getIndexColumn(that);
        if (index > -1) {
            manageHighlightColumn(index, "");
        }
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