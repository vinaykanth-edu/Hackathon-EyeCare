function save_options() {
    var select = document.getElementById("time-interval");
    var BlinkInterval = select.children[select.selectedIndex].value;
    localStorage.BlinkInterval = BlinkInterval;
  
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  }
  
  function option_selector(){
      
      var theSelect = document.getElementById('time-interval');
      
      for(var i=0;i<theSelect.length;i++) {
          console.log("option"+i+", value=" + theSelect.options[i].value + " and storage: " + localStorage.BlinkInterval);
          if (theSelect.options[i].value==localStorage.BlinkInterval) {
              console.log("found the option "+i)
              theSelect.options.selectedIndex = i;
              break;
          }
      }
  
  }
  
  
  document.querySelector('#save').addEventListener('click', save_options);
  
  window.addEventListener("load", option_selector);
  