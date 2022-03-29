function sendAnimation() {
    var tl = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 3000
    });
    // // Add children
    tl.add({
        targets: '#give-compliment',
        'translateX': 1000,
        easing: 'easeInOutExpo',
        duration: 1000,
        complete: function(anim) {
            if (anim.completed) document.getElementById("give-compliment").style.display = "none";
        }
    }).add({
        targets: '#backgroundEl',
        height: "100%",
        easing: 'easeInOutExpo',
        duration: 1000,
        complete: function(anim) {
            if (anim.completed) {
                document.body.classList.add('blueBack');
                document.getElementById("backgroundEl").style.display = "none";
            }
        }
    }).add({
        targets: '#get-compliment',
        scale: 1,
        rotate: '1turn',
        opacity: 255,
        easing: 'easeInOutExpo',
        duration: 1000,
        begin: function(anim) {
            if (anim.began) document.getElementById("get-compliment").style.display = "flex";
        }
    });
}

//# sourceMappingURL=index.87270078.js.map
