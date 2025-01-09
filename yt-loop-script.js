//YtLoopExtension script
console.log("Hii")

let controlBar = document.querySelector("yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading")


if (controlBar) {
    // Proceed to add your button
    const loopButton = document.createElement("button");
    loopButton.innerText = "Loop"
    controlBar.appendChild(loopButton)

} else {
    console.error("Control bar not found!");
}



