function clear() {
    document.getElementById("jwick").style.background = "none";
    document.getElementById("avengers").style.background = "none";
    document.getElementById("inception").style.background = "none";
}

function display_jwick() {
    clear();
    document.getElementById("jwick").style.background = "teal";

    document.getElementById("name").innerHTML = "John Wick";
    document.getElementById("date").innerHTML = "September 19, 2014";
    document.getElementById("actors").innerHTML = `<span>Keanu Reeves</span>
                                                    <span>Michael Nyqvist</span>
                                                    <span>Alfie Allen</span>
                                                    <span>Adrianne Palicki</span>`;
    document.getElementById("descr").innerHTML = "It is the first installment in the John Wick film series. The story focuses on John Wick (Reeves) searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.";

    let img = document.getElementById("poster_image");
    img.src = "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg";
}

function display_avengers() {
    clear();
    document.getElementById("avengers").style.background = "teal";

    document.getElementById("name").innerHTML = "Avengers: Endgame";
    document.getElementById("date").innerHTML = "April 22, 2019";
    document.getElementById("actors").innerHTML = `<span>Robert Downey J.</span>
                                                    <span>Chris Evans</span>
                                                    <span>Ian McShane</span>
                                                    <span>Chris Hemsworth</span>
                                                    <span>Scarlett Johansson</span>`;
    document.getElementById("descr").innerHTML = `After the devastating events of Avengers: Infinity War (2018),
                                                    the universe is in ruins due to the efforts of the Mad Titan, Thanos.
                                                    With the help of remaining allies, the Avengers must assemble once more 
                                                    in order to undo Thanos's actions and undo the chaos to the universe,
                                                    no matter what consequences may be in store, and no matter who they face...`;

    let img = document.getElementById("poster_image");
    img.src = "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg";
}

function display_inception() {
    clear();
    document.getElementById("inception").style.background = "teal";

    document.getElementById("name").innerHTML = "Inception";
    document.getElementById("date").innerHTML = "July 8, 2010";
    document.getElementById("actors").innerHTML = `<span>Leonardo DiCaprio</span>
                                                    <span>Ken Watanabe</span>
                                                    <span>Joseph Gordon-Levitt</span>
                                                    <span>Marion Cotillard</span>
                                                    <span>Elliot Page</span>
                                                    <span>Tom Hardy</span>`;
    document.getElementById("descr").innerHTML = `Cobb a unique con artist can enter anyone's dreams and 
                                                    extract the most valuable ideas and secrets of people with the help of "inception" 
                                                    (a dream sharing technology) when the state of mind is at its vulnerable best. 
                                                    Cobbs ability has made him the face of corporate spying, hence a wanted man too.`;

    let img = document.getElementById("poster_image");
    img.src = "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg";
}