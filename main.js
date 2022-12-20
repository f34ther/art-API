/**

 * @param img_info
* @param img_index
 */

async function clickedEvent(img_info, img_index) {
    let info = document.getElementsByTagName('img')[img_index].attributes[1].value
    console.log(info)
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks?fields=${info}`,
        {
            method: 'Get',
            headers: headers
        });

    let result = await fetch(request)
    let response = await result.json();
    console.log(response)

}


/**
 * 
 * @param id 
 * @param event 
 */
function getInfo(id, event) {
    switch (id) {
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0, 0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1, 0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2, 0)
            break;
        }
    }
}

function popUPs() {
    let popup = document.getElementById('myPopUp');
    popup.classList.toggle('show');
}