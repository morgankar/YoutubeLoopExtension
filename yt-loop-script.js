//YtLoopExtension script

let controlBar = document.querySelector("yt-spec-button-view-model style-scope ytd-menu-renderer")

if (controlBar) {
    // Proceed to add your button
    const loopButton = document.createElement("button");
    loopButton.innerText = "Loop"
    controlBar.appendChild(loopButton)

} else {
    console.error("Control bar not found!");
}



