function output(text) {
    document.getElementById('console').innerHTML += text + "\n";
}

function HealthBar(max, colour) {
    this.max = max;
    this.current = max;
    this.colour = colour;
    this.draw = function()
}