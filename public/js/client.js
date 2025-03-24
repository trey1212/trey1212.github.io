

console.log("Client script loaded.");

// a function declaration inside of a callback ... which takes a callback function :O
function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();

    //console.log("xhr", xhr);
    xhr.onload = function() {
        //value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);

            // callback function
            //value = this.responseText;
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url); // localhost:8000/weekdays?format=html
    xhr.send();

}

//  /path-to?key2=value1&key2=value2&key3=value3
/*  { key1: value1, key2: value2, key3: value3 }
 */
document.querySelector("#muttJSON").addEventListener("click", function (e) {
    const muttJSONElement = document.getElementById("mutt-json");

    if (muttJSONElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        muttJSONElement.innerHTML = "";
    } else {
    ajaxGET("./app/data/mutt.js?format=json", function (data) {
        console.log("Before parsing", data);
        // this call is JSON so we have to parse it:
        let parsedData = JSON.parse(data);
        console.log("After parsing", parsedData);
        let str = "<ol>"
        for (let i = 0; i < parsedData.length; i++) {
            str += "<li>" + parsedData[i] + "</li>";
        }
        str += "</ol>";
        document.getElementById("mutt-json").innerHTML = str;
    });
    }
});

document.querySelector("#victoriaJSON").addEventListener("click", function (e) {
    const victoriaJSONElement = document.getElementById("victoria-json");

    if (victoriaJSONElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        victoriaJSONElement.innerHTML = "";
    } else {
    ajaxGET("./app/data/victoria.js?format=json", function (data) {
        console.log("Before parsing", data);
        // this call is JSON so we have to parse it:
        let parsedData = JSON.parse(data);
        console.log("After parsing", parsedData);
        let str = "<ol>"
        for (let i = 0; i < parsedData.length; i++) {
            str += "<li>" + parsedData[i] + "</li>";
        }
        str += "</ol>";
        document.getElementById("victoria-json").innerHTML = str;
    });
    }
});

document.querySelector("#tylerJSON").addEventListener("click", function (e) {
    const tylerJSONElement = document.getElementById("tyler-json");

    if (tylerJSONElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        tylerJSONElement.innerHTML = "";
    } else {
    ajaxGET("./app/data/tyler.js?format=json", function (data) {
        console.log("Before parsing", data);
        // this call is JSON so we have to parse it:
        let parsedData = JSON.parse(data);
        console.log("After parsing", parsedData);
        let str = "<ol>"
        for (let i = 0; i < parsedData.length; i++) {
            str += "<li>" + parsedData[i] + "</li>";
        }
        str += "</ol>";
        document.getElementById("tyler-json").innerHTML = str;
    });
    }
});

document.querySelector("#kendrickJSON").addEventListener("click", function (e) {
    const kendrickJSONElement = document.getElementById("kendrick-json");

    if (kendrickJSONElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        kendrickJSONElement.innerHTML = "";
    } else {
    ajaxGET("./app/data/kendrick.js?format=json", function (data) {
        console.log("Before parsing", data);
        // this call is JSON so we have to parse it:
        let parsedData = JSON.parse(data);
        console.log("After parsing", parsedData);
        let str = "<ol>"
        for (let i = 0; i < parsedData.length; i++) {
            str += "<li>" + parsedData[i] + "</li>";
        }
        str += "</ol>";
        document.getElementById("kendrick-json").innerHTML = str;
    });
    }
});

document.querySelector("#vJSON").addEventListener("click", function (e) {
    const vJSONElement = document.getElementById("v-json");

    if (vJSONElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        vJSONElement.innerHTML = "";
    } else {
    ajaxGET("./app/data/v.js?format=json", function (data) {
        console.log("Before parsing", data);
        // this call is JSON so we have to parse it:
        let parsedData = JSON.parse(data);
        console.log("After parsing", parsedData);
        let str = "<ol>"
        for (let i = 0; i < parsedData.length; i++) {
            str += "<li>" + parsedData[i] + "</li>";
        }
        str += "</ol>";
        document.getElementById("v-json").innerHTML = str;
    });
    }
});

document.querySelector("#doechiiHTML").addEventListener("click", function (e) {
    const doechiiHTMLElement = document.getElementById("doechii-html");

    if (doechiiHTMLElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        doechiiHTMLElement.innerHTML = "";
    } else {
        // If the element is empty, fetch and display the content
        ajaxGET("./app/data/doechii.html?format=html", function(data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            doechiiHTMLElement.innerHTML = data;
        });
    }
});

document.querySelector("#szaHTML").addEventListener("click", function (e) {
    const szaHTMLElement = document.getElementById("sza-html");

    if (szaHTMLElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        szaHTMLElement.innerHTML = "";
    } else {
        // If the element is empty, fetch and display the content
        ajaxGET("./app/data/sza.html?format=html", function(data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            szaHTMLElement.innerHTML = data;
        });
    }
});

document.querySelector("#porterHTML").addEventListener("click", function (e) {
    const porterHTMLElement = document.getElementById("porter-html");

    if (porterHTMLElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        porterHTMLElement.innerHTML = "";
    } else {
        // If the element is empty, fetch and display the content
        ajaxGET("./app/data/porter.html?format=html", function(data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            porterHTMLElement.innerHTML = data;
        });
    }
});

document.querySelector("#danielHTML").addEventListener("click", function (e) {
    const danielHTMLElement = document.getElementById("daniel-html");

    if (danielHTMLElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        danielHTMLElement.innerHTML = "";
    } else {
        // If the element is empty, fetch and display the content
        ajaxGET("./app/data/daniel.html?format=html", function(data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            danielHTMLElement.innerHTML = data;
        });
    }
});

document.querySelector("#rmHTML").addEventListener("click", function (e) {
    const rmHTMLElement = document.getElementById("rm-html");

    if (rmHTMLElement.innerHTML.trim() !== "") {
        // If the element already has content, clear it
        rmHTMLElement.innerHTML = "";
    } else {
        // If the element is empty, fetch and display the content
        ajaxGET("./app/data/rm.html?format=html", function(data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            rmHTMLElement.innerHTML = data;
        });
    }
});

