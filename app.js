function getString(){
    var randomString = function(length) {
        var text = "!";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
   
    document.getElementById("refresh").addEventListener("click", function() {
        document.getElementById("string").innerHTML = randomString(15);
    }); 

    document.getElementById("message").style.display = "none";
}





function copyString(ourString) {
    if(!ourString) {
        return;
    }
   let stringText = ourString.innerText;
   let temp = document.createElement("input");
   let idText = "ok1234"
   temp.setAttribute("id", idText);
   temp.setAttribute("value", stringText);
    document.body.appendChild(temp);
    temp.select();
   document.execCommand('copy');
   document.body.removeChild(temp);
   document.getElementById("message").style.display = "block";
}

document.getElementById("copy-text-btn").onclick = function() {
      copyString(document.getElementById("string"));
   }
  