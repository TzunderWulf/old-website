// fake executing commands with buttons

document.getElementById("command-nickname").addEventListener("click", function() {
    let nickName = document.getElementById("command-nickname-exe");
      
    if (nickName.style.display == "block") {
        nickName.style.display = "none";
    } else {
        nickName.style.display = "block";
    }
})

document.getElementById("command-name").addEventListener("click", function() {
    let fullName = document.getElementById("command-name-exe");

    if (fullName.style.display == "block") {
        fullName.style.display = "none";
    } else {
        fullName.style.display = "block";
    }
})

document.getElementById("command-lang").addEventListener("click", function() {
    let languages = document.getElementById("command-lang-exe");

    if (languages.style.display == "block") {
        languages.style.display = "none";
    } else {
        languages.style.display = "block";
    }
})

document.getElementById("command-bio").addEventListener("click", function() {
    let biographyParagraphs = document.getElementsByClassName("command-bio-exe");
    
    for (let i = 0; i < biographyParagraphs.length; i++) {
        if (biographyParagraphs[i].style.display == "block") {
            biographyParagraphs[i].style.display = "none";
        } else {
            biographyParagraphs[i].style.display = "block";
        }
    }
})
