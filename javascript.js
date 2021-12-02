let urlInput = document.getElementById('url-input-form');
let getURL;
function httpGet(URL)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp= new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange= function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            html = xmlhttp.responseText;

            let insert = document.querySelector('.box1');
            insert.innerHTML = " ";
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            var elements = doc.querySelectorAll('p, h1');
            elements.forEach(e => { 
                for (let elm of e.children) {

                    if (elm.nodeName == 'A') {
                        elm.style.color = 'blue';
                    };
                    elm.style.color = 'rgb(236, 227, 227)';
                }
                if (e.nodeName == 'H1') {
                    e.style['font-family'] = 'Arial, Helvetica, sans-serif';
                    e.style['font-size'] = '2em';
                };
                insert.append(e);
            });         
        }
    }
    xmlhttp.open("GET", URL, false);
    xmlhttp.send();    
}

function getArticleURL(e) {
    e.preventDefault();
    getURL = e.target.elements.urlField.value;
    httpGet(getURL);
    e.target.elements.urlField.value = ' ';
}

urlInput.addEventListener('submit', getArticleURL);