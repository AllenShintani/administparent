function buttonAdd(x) {
  //
  const addButton = document.createElement("input");
  addButton.classList.add("addition");
  addButton.type = "button";
  addButton.value = "serviceXから入力";
  addButton.id = "serviceX";
  document.querySelector(x).appendChild(addButton);

  const modalArea = document.createElement("section");
  modalArea.style.width = "100%";
  modalArea.style.height = "100%";
  modalArea.style.top = "0";
  modalArea.style.left = "0";
  modalArea.style.position = "fixed";
  modalArea.style.background = "rgba(0,0,0,50%)";
  modalArea.id = "modalA";
  modalArea.style.display = "none";

  const ifra = document.createElement("iframe");
  ifra.src = "https://konjikun.github.io/administraition-form/";
  ifra.id = "iframe-body";
  ifra.style.width = "600px";
  ifra.style.height = "800px";
  ifra.style.backgroundAttachment = "fixed";
  ifra.style.top = "50%";
  ifra.style.left = "50%";
  ifra.style.backgroundColor = "white";
  ifra.style.border = "none";
  ifra.style.position = "absolute";
  ifra.style.transform = "translate(-50%,-50%)";
  ifra.style.display = "none";

  document.querySelector("#contents").appendChild(modalArea);
  document.querySelector("#contents").appendChild(ifra);
  iframe();
  console.log(addButton);
  return pack();
}
function iframe() {
  $("#serviceX").on("click", function () {
    $("#iframe-body").fadeIn();
    $("#modalA").fadeIn();
    s = $("iframe").offset().top;
    $(window).scrollTop(s);
  });
}

Data = {
  nameKatakana: "moushikomiShimeiKn",
  nameKanji: "moushikomiShimeiKj",
  addres: "moushikomiMail",
  email: "confirmMoushikomiMail",
  phoneAdvance: "moushikomiPhoneNo1",
  phoneCenter: "moushikomiPhoneNo2",
  phoneBack: "moushikomiPhoneNo3",
};

function readyIframe(demandData) {
  demandData = JSON.parse(JSON.stringify(demandData));
  console.log(demandData);
  $("#iframe-body")[0].contentWindow.postMessage(demandData, "*");
}
//readyIframe(demandData);
function pack() {
  demandData = Object.keys(Data);
  outputId = Object.values(Data);
  window.addEventListener(
    "message",
    () => {
      readyIframe(demandData);
    },
    { once: true }
  );
  window.addEventListener("message", (serve) => {
    if (typeof serve.data !== "string") {
      $("#iframe-body").fadeOut();
      $("#modalA").fadeOut();
      console.log(demandData);
      console.log(serve.data);
      serveData = serve.data;
      for (let num = 0; num < serveData.length; num++) {
        document.getElementById(outputId[num]).value = serveData[num];
      }
    }
  });
  return load();
}
buttonAdd("#vi > p");
function load() {
  "https://konjikun.github.io/administraition-form/".onload = () => {
    window.addEventListener(
      "message",
      (event) => {
        if (
          event.origin !==
          "https://github.com/konjikun/administraition-form.git"
        )
          return;
      },
      false
    );
  };
}
//export { buttonAdd, iframe };
