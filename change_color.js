let change_background_color = () => {
    let zodiac = document.getElementById("zodiac");
    let val = zodiac.value;
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    console.log(x);
    console.log(y);
    console.log(z);
    let new_col = "rgb(" + x + "," + y + "," + z + ")";
    console.log(new_col);
    if(val != "select zodiac")document.body.style.background = new_col;
}