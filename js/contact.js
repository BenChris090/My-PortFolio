function openNav() {
    document.getElementById("mNav").style.display = "block";
  }
  
  // /* Set the width of the side navigation to 0 */
  // /* Set the display of the side navigation to none */
  function closeNav() {
    document.getElementById("mNav").style.display = "none";
  }
  
  // mobile functions start here
  function mob_nMode() {
      document.body.style.backgroundColor = "black";
      document.getElementById("main").style.backgroundColor = "black";
      // document.getElementById("relText").style.color = "white";
      document.getElementById("txtHead").style.color = "white";
      document.getElementById("txtBod").style.color = "white";
      document.getElementById("txtBod2").style.color = "white";
      document.getElementById("txtBod3").style.color = "white";
      document.getElementById("txtBod4").style.color = "white";
      document.getElementById("txtBod5").style.color = "white";
      document.getElementById("txtBod6").style.color = "white";
      document.getElementById("night").style.display = "none";
      document.getElementById("day").style.display = "flex";
      document.getElementById("main").style.boxShadow = "0px 15px 10px -15px black";
      // 0px 15px 10px -15px #111
  }
  
  function mob_lMode() {
      document.getElementById("night").style.display = "flex";
      document.body.style.backgroundColor = "white";
      document.getElementById("main").style.backgroundColor = "white";
      // document.getElementById("relText").style.color = "black";
      document.getElementById("txtHead").style.color = "black";
      document.getElementById("txtBod").style.color = "black";
      document.getElementById("txtBod2").style.color = "black";
      document.getElementById("txtBod3").style.color = "black";
      document.getElementById("txtBod4").style.color = "black";
      document.getElementById("txtBod5").style.color = "black";
      document.getElementById("txtBod6").style.color = "black";
      document.getElementById("day").style.display = "none";
      document.getElementById("main").style.boxShadow = "0px 15px 10px -15px grey";
  }
  // mobile functions ends here
  
  // desktop functions start here
  function nMode() {
    document.body.style.backgroundColor = "black";
    document.getElementById("main").style.backgroundColor = "black";
    // document.getElementById("relText").style.color = "white";
    document.getElementById("txtHead").style.color = "white";
    document.getElementById("txtBod").style.color = "white";
    document.getElementById("txtBod2").style.color = "white";
    document.getElementById("txtBod3").style.color = "white";
    document.getElementById("txtBod4").style.color = "white";
    document.getElementById("txtBod5").style.color = "white";
    document.getElementById("txtBod6").style.color = "white";
    document.getElementById("nights").style.display = "none";
    document.getElementById("days").style.display = "flex";
    document.getElementById("main").style.boxShadow = "0px 15px 10px -15px black";
    // 0px 15px 10px -15px #111
  }
  
  function lMode() {
    document.getElementById("nights").style.display = "flex";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.backgroundColor = "white";
    // document.getElementById("relText").style.color = "black";
    document.getElementById("txtHead").style.color = "black";
    document.getElementById("txtBod").style.color = "black";
    document.getElementById("txtBod2").style.color = "black";
    document.getElementById("txtBod3").style.color = "black";
    document.getElementById("txtBod4").style.color = "black";
    document.getElementById("txtBod5").style.color = "black";
    document.getElementById("txtBod6").style.color = "black";
    document.getElementById("days").style.display = "none";
    document.getElementById("main").style.boxShadow = "0px 15px 10px -15px grey";
  }
  
  function hoverMode() {
    const txt1 = document.getElementById("txt2").style.color = "cyan"
    txt1.style.color = "blue";
  }
  
  // function hoverOver() {
  //   const txt1 = document.getElementById("txt2").style.color = "cyan"
  //   txt1.style.color = "blue";
  // }
  // desktop functions end here
  
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  // function openNav() {
  //     document.getElementById("mNav").style.width = "250px";
  //     document.getElementById("main").style.marginLeft = "250px";
  //     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  //   }
    
  //   /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  //   function closeNav() {
  //     document.getElementById("mNav").style.width = "0";
  //     document.getElementById("main").style.marginLeft = "0";
  //     document.body.style.backgroundColor = "white";
  //   }