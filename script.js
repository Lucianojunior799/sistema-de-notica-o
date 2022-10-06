const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
       const notification  =  new Notification("Exemplo notificação", {
            body: "this is more text",
            data: { hello: "word"}
         })  
         notification.addEventListener("error", e => {
            alert( "error")
         })
        }
    })
})
