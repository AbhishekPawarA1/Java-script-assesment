                //iphone 1

function iPhone1(ASIN,color,display,camera){
    return {
        ASIN,
        color,
        display,
        camera,  
        dial(){
            return 'tring... tring...'
        },
        sendMessage(){
            return 'Sending message...'
        },
        cameraClick(){
            return 'Camera clicked'
        }
    }
}

let i1 = iPhone1(1,"B09X67JBQV",7.8,"IOS","128mb","Gray","90mm","2.0 MP");
// ---- properties
console.log(i1.ASIN); // 1
console.log(i1.color); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.camera); // "IOS"

// ---- methods
console.log(i1.dial()); // "tring.. tring..."
console.log(i1.sendMessage()); // "Sending message..."
console.log(i1.cameraClick()); // "Camera clicked"










            //    Iphone 2


            function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
        ASIN,
        color,
        display,
        camera,
        bluetooth,
        dial() {
            return 'tring... tring...'
        },
        sendMessage() {
            return "Sending message...";
        },
        cameraClick() {
            return "Camera clicked"
        },
        connectBluetooth() {
            return "Bluetooth connected successfully..."
        }

    
    }  
    
}




let i2 = iPhone2(1, "B09X67JBQV", 7.8, "IOS", "128mb", "Gray", "90mm", "2.0 MP", "5.1");
// ---- properties
console.log(i2.ASIN); // 1
console.log(i2.color); // "B09X67JBQV"
console.log(i2.display); // 7.8
console.log(i2.camera); // "IOS"
console.log(i2.bluetooth); // "128GB"

// ---- methods
console.log(i2.dial()); // "tring.. tring..."
console.log(i2.sendMessage()); // "Sending message..."
console.log(i2.cameraClick()); // "Camera clicked"
console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."
