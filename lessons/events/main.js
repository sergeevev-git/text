let btn = document.querySelectorAll('button');
    wrp = document.querySelector('.wrapper');
    link = document.querySelector('a'); 
// btn[0].onclick = function() {
//     alert('aaaaa');
// }

// btn[0].onclick = function() {
//     alert('bbbbb');
// }
//////////////
// btn[0].addEventListener('click', function() {
//     alert('111');
//     //alert('222');
// })

// btn[0].addEventListener('click', function() {
//     alert('111');
//     //alert('222');
// })
////////////
// btn[0].addEventListener('mouseenter', function() {
//     alert('навели на кнопку');
// })


btn[0].addEventListener('click', function(event) {
    // let target = event.target;
    // target.style.display = "none";
    // console.log(event);
    console.log('ooooo: ' + event.type + ' uuuuuu ' + event.target);
});

wrp.addEventListener('click', function() {
    console.log('ooooo: ' + event.type + ' uuuuuu ' + event.target);
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('ooooo: ' + event.type + ' uuuuuu ' + event.target);
}); 

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли');
    });
});