function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll(".ranked-list li");
  for (let li of lis) {
    li.textContent = (parseInt(li.textContent) + n).toString();
  }
}

function deepestChild() {
  let testNode = document.querySelector("div#grand-node");
  do {
    testNode = testNode.children[0];
  } while (testNode.childElementCount > 0);
  return testNode;
}
