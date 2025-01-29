//YtLoopExtension script
console.log("Hii")

const checkControlBar = setInterval(()=> {
    let controlBar = document.querySelector(".ytp-right-controls")


if (controlBar) {
    // Proceed to add your button
    const loopButton = document.createElement("button");
    loopButton.innerText = "Loop"
    loopButton.classList.add("ytp-loop-button", "ytp-button", )
    loopButton.setAttribute("title", "Loop Video")
    controlBar.appendChild(loopButton)

    const video = document.querySelector("video")
    console.log(video)
 
    let isLooping = false;
    loopButton.addEventListener("click",() => {
        //toggle loop state
        isLooping = !isLooping
        video.loop = isLooping;
        console.log("yup itt clicked")

    //let user know the state
    if(isLooping) {
        loopButton.classList.add("ytp-loop-active");
    } else {
        loopButton.classList.remove("ytp-loop-active")
    }
    })


    //stop the interval
    clearInterval(checkControlBar)

} 

}, 500);



