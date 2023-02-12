// Option 2
function yellowBackgroud() {
    document.body.style.backgroundColor = 'yellow';
}

// Option 3(a)
const option3a = document.getElementById('blue-backg');
option3a.onclick = blueBackgroud;

function blueBackgroud() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3(b)
const option3b = document.getElementById('purple-backg');
option3b.onclick = function purpleBackgroud() {
    document.body.style.backgroundColor = 'purple';
}

// Option 4(a)
const option4a = document.getElementById('green-backg');
option4a.addEventListener('click', greenBackground);

function greenBackground() {
    document.body.style.backgroundColor = 'green';
}

// Option 4(b)
const option4b = document.getElementById('pink-backg');
option4b.addEventListener('click', function pinkBackground() {
    document.body.style.backgroundColor = 'pink';
});

// Option 4 final
document.getElementById('magenta-backg').addEventListener('click', function() {
    document.body.style.backgroundColor = 'magenta';
});


