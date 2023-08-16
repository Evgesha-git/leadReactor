

onmessage = (evt) => {
    postMessage("Все ок");

    console.log(evt.data);
    console.log(self);
};
