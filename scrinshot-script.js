function capture () {
  html2canvas(document.getElementById("cardCanvas")).then((canvas) => {
    let a = document.createElement("a");
    a.download = "postyk.png";
    a.href = canvas.toDataURL("image/png");
    a.click(); // MAY NOT ALWAYS WORK!
  });
}
