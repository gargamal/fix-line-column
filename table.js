function fixscroll() {
    const thead = document.getElementById("myhead");
    const tbodyScroll = document.getElementById("mybody").scrollLeft;
    thead.scrollLeft = tbodyScroll;
}
