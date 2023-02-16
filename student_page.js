// $("#menu-btn").click(function () {
//     $("#menu").toggleClass("active");
//   });

// //////////

// jQuery(document).ready(function(){

//     $('#just').click(function(){
//         window.print();
        
//     })
// })

// Get the content of the div as a string
function getDivContent() {
    var divContent = document.getElementById("boxy").innerHTML;
    return divContent;
  }
  
  // Convert the div content to a PDF
  function downloadPDF() {
    var divContent = getDivContent();
  
    // create a new pdf with single page
    var doc = new jsPDF();
    doc.text(divContent, 10, 10);
    doc.save("divContent.pdf");
  }
  
  // Add an event listener to the download button
  var downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", downloadPDF);
  
