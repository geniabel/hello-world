let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Wikipedia.PNG') {
      myImage.setAttribute('src','Chessclock.PNG');
    } else {
      myImage.setAttribute('src','Wikipedia.PNG');
    }
}





