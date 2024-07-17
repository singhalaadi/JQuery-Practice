function randomColor() {
    let c1 = Math.floor(0 + Math.random() * 255);
    let c2 = Math.floor(0 + Math.random() * 255);
    let c3 = Math.floor(0 + Math.random() * 255);
    console.log(`rgb(${c1},${c2},${c3})`);
    return `rgb(${c1},${c2},${c3})`;
}

$(".btn").click(function(){
    let count = 3;
    let intervalId = setInterval(() => {
        if (count > 0) {
            $(".box").text(`Color is changing in ${count} sec...`);
            count--;
        } else {
            $(".box").css("background", randomColor());
            $(".box").text("Color changed!");
            clearInterval(intervalId);
        }
    }, 1000);
});

$(document).keydown(function(e){
    // if (e.code === "Space") { // check the key code
    //     $("body").css("background","yellow");
    // }
    $("#para").text(`You pressed ${e.code}`);
    console.log(e.code);
});