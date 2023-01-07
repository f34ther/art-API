/**

 * @param img_info
* @param img_index
*@param atta
 */

async function clickedEvent(img_index, img_info, atta) {
    let info = document.getElementsByTagName('img')[img_index].attributes[1].value
    // it's not reading past the first img it finds... do i need to loop it? if so, how?
    console.log(info)
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${info}`,
        {
            method: 'Get',
            headers: headers
        });

    let result = await fetch(request)
    let response = await result.json();
    // let info = response.data.medium_display
    // let unfold = response.info[img_info]
    // reveal(unfold);
    let my_par = document.getElementById(atta);
    my_par.innerHTML = response.data.medium_display
}


/**
 * 
 * @param id 
 * @param event 
 * @param para
 * 
 */
function getInfo(id, event, para) {
    switch (id) {
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0, 0, para)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1, 0, para)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2, 0, para)
            break;
        }
    }
}

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}