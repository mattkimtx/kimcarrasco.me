$(document).ready(function(){
  $('#popup_1').on('click', function(e) {
    // Modal structure copied from W3 Schools tutorial on Modals "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2"
    // Get the modal    
    var modal = document.getElementById("myModal1");

    // Get the button that opens the modal
    // var btn = document.getElementById("result_button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
    }
  });
  $('#popup_2').on('click', function(e) {
    // Modal structure copied from W3 Schools tutorial on Modals "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2"
    // Get the modal    
    var modal = document.getElementById("myModal2");

    // Get the button that opens the modal
    // var btn = document.getElementById("result_button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close1")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      }
    }
  });
});