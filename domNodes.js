function run() {
  let interval1;
  let consoleDemo = document.getElementById("consoleDemo");

  function Blink() {
    let elem = document.getElementById("hiddenDiv");
    if (document.getElementById("hideDiv").checked) {
      interval1 = setInterval(() => (elem.hidden = !elem.hidden), 1000);
    } else {
      clearInterval(interval1);
      elem.hidden = true;
    }
  }

  function NodesBtnClick(e) {
    let mDivFirstNode = document.getElementById("myDIV");
    WriteChildNodes(mDivFirstNode, consoleDemo);
  }

  function WriteChildNodes(parentNode, consoleCanvas) {
    for (let i = 0; i < parentNode.childNodes.length; i++) {
      let numPoint = ">" + i;
      let node = parentNode.childNodes[i];
      //nodeValue , textContent
      let nodeName =
        numPoint +
        " " +
        node.nodeName +
        ":" +
        node.nodeValue +
        " [type]:" +
        node.nodeType;
      setTimeout(WriteToConsole, 500 + i * 1000, consoleCanvas, nodeName);
    }
  }

  function WriteToConsole(console, name) {
    console.innerHTML = console.innerHTML + "<br /> " + name;
  }

  function ElementBtnClick(e) {
    //cancel order for user Pete
    let listNewOrder = document.querySelectorAll("[data-order-state]");
    listNewOrder[2].textContent =
      listNewOrder[2].textContent + " The order is canceled for:";
    listNewOrder[2].setAttribute("data-order-state", "canceled");

    let user = {
      name: "Pete",
      age: 25,
    };

    for (let div of document.querySelectorAll("[show-info]")) {
      // insert the corresponding info into the field
      let field = div.getAttribute("show-info");
      div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
    }
  }

  function DomBtnClick(e) {
    let domMod = document.getElementById("domMod");
    let div = document.createElement("div");
    div.className = "alert";
    div.innerHTML =
      "<strong>Hi there!</strong> You've read an important message.";
    domMod.append(div);
    setTimeout(() => div.remove(), 3000);

    let ol = document.getElementById("ol");
    ol.before("before"); // insert string "before" before <ol>
    ol.after("after"); // insert string "after" after <ol>

    let liFirst = document.createElement("li");
    liFirst.innerHTML = "prepend";
    ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

    let liLast = document.createElement("li");
    liLast.innerHTML = "append";
    ol.append(liLast); // insert liLast at the end of <ol>
  }

  let btnNodes = document.getElementById("nodes");
  btnNodes.style.color = "green";
  btnNodes.onclick = NodesBtnClick;

  let btnElements = document.getElementById("elements");
  btnElements.onclick = ElementBtnClick;
  btnElements.style.color = "olive";

  let btnDom = document.getElementById("dom");
  btnDom.onclick = DomBtnClick;
  btnDom.style.color = "blue";

  let checkBoxBlink = document.getElementById("hideDiv");
  checkBoxBlink.onclick = Blink;
}
