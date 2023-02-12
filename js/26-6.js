// mouseenter event
document.getElementById('btn1').addEventListener('mouseenter', function() {
    document.getElementById('p1').innerText = 'mouseenter done. See console';
    console.log('mouseenter done');
});

// mousemove event
document.getElementById('btn2').addEventListener('mousemove', function() {
    document.getElementById('p2').innerText = 'mousemove done. See console';
    console.log('mouseenter done');
});

// blur event
document.getElementById('in1').addEventListener('blur', function() {
    document.getElementById('p3').innerText = 'blur event done. See console';
    console.log('blur event done');
});

// focus event
document.getElementById('in2').addEventListener('focus', function() {
    document.getElementById('p4').innerText = 'focus event done. See console';
    console.log('focus event done');
});

// keydown event
document.getElementById('in3').addEventListener('keydown', function(event) {
    document.getElementById('p5').innerText = 'keydown event done. See console';
    console.log(event.target.value);
});

// keypress event
document.getElementById('in4').addEventListener('keypress', function(event) {
    document.getElementById('p6').innerText = 'keypress event done. See console';
    console.log(event.target.value);
});

// keyup event
document.getElementById('in5').addEventListener('keyup', function(event) {
    document.getElementById('p7').innerText = 'keyup event done. See console <code>Mostly used</code>';
    console.log(event.target.value);
});

// Display hidden h1

document.getElementById('in6').addEventListener('keyup', function(event) {
    const inputText = event.target.value;
    const deleteBtn = document.getElementById('btn3');
    if(inputText === 'delete') {
        deleteBtn.removeAttribute('disabled');
    } else {
        deleteBtn.setAttribute('disabled', true);
    }
});

document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('hiddenId').style.display = "none";
    document.getElementById('in6').value = '';
});

