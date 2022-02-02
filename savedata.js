function downloadCSV(csv, filename) {
var csvFile;

var downloadlink; 


csvFile = new Blob([csv],{type: "text/csv"});

downloadlink= document. createElement (tagName "a");

downloadlink.download = filename;


downloadlink.href= window.URL.createObjectURL(csvFile);
downloadlink.style.display = "none";
document.body.appendChild(downloadlink);
downloadLink.click();
}

 var preload = {
    type: 'preload',
    auto_preload: true, 
    images: ['img/bowties.jpg']
  }