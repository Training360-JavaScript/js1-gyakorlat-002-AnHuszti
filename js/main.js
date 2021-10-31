/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

'use strict';

let stringArray = ['first', 'second', 'third'];


function generateList(stringArray) {
    let template = "<ul>" 
    stringArray.forEach(item => {
        template = template + " <li>" + item + "</li>";   
    })
    template = template + " </ul>";
    return template;
}