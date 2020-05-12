function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    let list = document.querySelectorAll('.ranked-list');
    for (let i = 0; i < list.length; i++) {
        let children = list[i].children;
        for (let j = 0; j < children.length; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n;
        }
    }
}

function deepestChild() {
    let item = document.getElementById('grand-node');
    let childItem = item.children[0];

    while (childItem) {
        item = childItem;
        childItem = item.children[0];
    }
    return item;
}