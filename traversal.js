function run() {
  function DomBtnClick(e) {
    // change the background color to red
    document.body.style.background = "red";

    // change it back after 1 second
    setTimeout(() => (document.body.style.background = ""), 1000);
    for (let i = 0; i < document.body.childNodes.length; i++) {
      let outFit = ">" + i + "-".repeat(i);
      console.log(outFit + " " + document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
    }
    for (let elem of document.body.children) {
      console.warn(elem); // DIV, UL, DIV, SCRIPT
    }

    //table
    // get td with "two" (first row, second column)
    let table = document.getElementById("table");
    let td = table.rows[0].cells[0];
    td.style.backgroundColor = "red";
  }

  function BomBtnClick(e) {
    alert(location.href); // shows current URL
    if (confirm("Go to Wikipedia?")) {
      location.href = "https://wikipedia.org"; // redirect the browser to another URL
    }

    window.open("https://wikipedia.org");
    console.log("Locationbar is visible;"+window.locationbar);
    
  }

  alert("The innerHeight of window is: " + window.innerHeight);
  let btnDom = document.getElementById("dom");
  btnDom.style.color = "green";
  btnDom.onclick = DomBtnClick;

  let btnBom = document.getElementById("bom");
  btnBom.onclick = BomBtnClick;
  btnBom.style.color = "olive";
}
