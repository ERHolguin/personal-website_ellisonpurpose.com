let subjectSelection = ['Creator.', 'Developer.', 'Polyglot.'];
let i = 0;
let timer;

function typingEffect () {
    let word = subjectSelection[i].split('');
    var loopTyping = function() {
        if(word.length > 0) {
            document.getElementById('word').innerText += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 280);
    };
    loopTyping();
};

function deletingEffect() {
    let word = subjectSelection[i].split('');
    var loopDeleting = function() {
        if(word.length > 0) {
            word.pop();
            document.getElementById('word').innerText = word.join('');
        } else {
            if(subjectSelection.length > (i +1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

typingEffect();



