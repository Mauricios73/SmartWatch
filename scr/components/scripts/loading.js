document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("loadingScreen").style.display = "flex";
    setTimeout(function () {
      document.getElementById("loadingScreen").style.display = "none";
      window.location.href = "index.html";
    }, 2000);
  });