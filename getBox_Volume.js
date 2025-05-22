function getBoxVolume(length, width, height= "1"){
    return (length * width * height);
}

console.log(getBoxVolume(3, 4, 5));
console.log(getBoxVolume(5, 10));