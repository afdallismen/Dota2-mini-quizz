function GuessDota2Hero () {
    return heroes[Math.floor(Math.random() * heroes.length)]
}

window.onload = function () {
    var hero = new GuessDota2Hero()
    
    if (hero) {
        var path = "assets/audio/" + hero.name + "/" + hero.voiceFilenames[0]
        var audio = document.getElementsByTagName("audio")[0]
        audio.firstElementChild.setAttribute("src", path)
        audio.load()
    }
}