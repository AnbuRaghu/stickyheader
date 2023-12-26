window.onscroll = function() {
    stickHeader();
  };
  
  const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;
  console.log(sticky);
  
  function stickHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  