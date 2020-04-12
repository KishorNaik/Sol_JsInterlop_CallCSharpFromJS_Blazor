function onDemo(maxValue, DotNetInstance) {
    DotNetInstance.invokeMethodAsync("GenerateRandomNoInt", maxValue)
        .then((resolve) => {
            document.getElementById("spanRandom").innerHTML = resolve;
        });
}

function updateMessageJs() {
    DotNet.invokeMethodAsync('Sol_Demo', 'OnGetValue','Hello Javascript');
    console.log("Update Message js Method Call");
}

function getArrayOfDataJs() {
   
    DotNet.invokeMethodAsync('Sol_Demo', 'ReturnArrayAsync')
            .then(data => {
                data.push(4);
                console.log(data);
            });
}