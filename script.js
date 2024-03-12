/*
    functions: myFunction(), onYouTubeIframeAPIReady(), onPlayerReady(event), onPlayerStateChange(event), stopVideo() credited to link below
    - Link: https://stackoverflow.com/questions/42711959/play-youtube-video-on-click
*/
// location.reload();
let ghostdivison = new Audio("sabaton-ghost-division-made-with-Voicemod.mp3");
let realtime = document.getElementById("h2time");
setInterval(livetime, 5000);

// create Date object for current location
function livetime() {
    let h2time = document.getElementById("h2time").value;
    let date = new Date().toLocaleString("en-NZ");
    let time = new Date().toLocaleTimeString("en-NZ");
    // console.log(date);
    h2time = time;
    realtime.innerHTML = realtime.innerHTML.replace(h2time);
    console.log(realtime);
}

function alarmset() {
    let wakeuptime = document.getElementById("date-time").value;
    console.log("The set time is " + wakeuptime);

    const now = new Date().toLocaleString("en-NZ");
    let polisheddate  = date.replace(", ", " : ");
    const currentDateTime = now.toLocaleString();
    console.log("The actual time is " + currentDateTime);

    if (wakeuptime == currentDateTime) {
        alert("Wake Up!");
        ghostdivison.play();
    }
}