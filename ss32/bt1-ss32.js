function changeBackgroundColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("container").style.backgroundColor = randomColor;
}