document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item2 clicked');
    //to stop same lebel bubble
    event.stopImmediatePropagation();
    //to stop other level bubble we have to use stop propagation
    event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item2 second clicked');
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item2 third clicked');
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item2 fourth clicked');
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item2 fifth clicked');
})
document.getElementById('ul-list').addEventListener('click', function () {
    console.log('ul-list clicked')
})
document.getElementById('list-container').addEventListener('click', function () {
    console.log('list-container clicked')
})
document.getElementById('body').addEventListener('click', function () {
    console.log('body clicked')
})
//to stop bubble we have to use event stop propagation and take event as parameter of function