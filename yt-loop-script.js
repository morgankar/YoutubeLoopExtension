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


    //stop the interval
    clearInterval(checkControlBar)

} 

}, 500);



