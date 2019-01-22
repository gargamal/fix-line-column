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

    return {
        updateScroll,
        highlightLine,
        noHighlightLine,
    }
};

const FrozenHeadFirstLine = objFrozenHeadFirstLine();