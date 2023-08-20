let tabs  = Array.from(document.getElementsByClassName('tab'));
let tabContent = document.getElementsByClassName('tab__content');

function activeElements() {
    for (const tab of tabs) {
    tab.className = 'tab';
    }
    


    for (const el of tabContent) {
        el.className = 'tab__content';
    }

    let index = tabs.indexOf(this);

    tabs[index].className = 'tab tab_active';
    tabContent[index].className = 'tab__content tab__content_active';

}

for (const tbs of tabs) {
    tbs.onclick = activeElements;
}