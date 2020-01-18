function onDemo(maxValue, DotNetInstance) {
    DotNetInstance.invokeMethodAsync("GenerateRandomNoInt", maxValue)
        .then((resolve) => {
            document.getElementById("spanRandom").innerHTML = resolve;
        });
}