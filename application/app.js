"use strict";

bottom_bar("read", "", "create")
    //////////////////////////
    ////KEYPAD TRIGGER////////////
    /////////////////////////

function handleKeyDown(evt) {

    switch (evt.key) {
        case "SoftLeft":

            start_scan(function(callback) {
                let data;

                try {
                    data = JSON.parse(callback);
                } catch (e) {
                    toaster("Json is not valid", 2000)
                    return false;
                }



                let extData = JSON.stringify(data);
                let sdcard = navigator.getDeviceStorages('sdcard');
                let file = new Blob([extData], { type: "application/json" });
                let requestAdd = sdcard[1].addNamed(file, "test.json");


                requestAdd.onsuccess = function() {

                    alert("done");


                }




                requestAdd.onerror = function() {
                    alert('Unable to write the file: ' + this.error);
                }


            })


            break;

        case "SoftRight":



            break;

        case "ArrowDown":


            break;

        case "ArrowUp":

            break;

        case "ArrowLeft":

            break;

        case "ArrowRight":


            break;





        case "Backspace":

            break;
    }
}

document.addEventListener("keydown", handleKeyDown);;