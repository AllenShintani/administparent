//ボタン追加
function buttonAdd() {
  const addButton = document.createElement("input");
  addButton.classList.add("addition");
  addButton.type = "button";
  addButton.value = "serviceXから入力";
  addButton.id = "serviceX";
  //document.querySelector("#vi > p").appendChild(addButton); //ボタンを置きたい場所を指定してください・・・１

  //iframe生成
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
  /*
$('body').css({
	position:'fixed',
})
*/
  document.querySelector("#contents").appendChild(modalArea);
  document.querySelector("#contents").appendChild(ifra);
  iframe();
  return addButton;
}

function iframe() {
  $("#iframe-body").fadeIn();
  $("#modalA").fadeIn();
  s = $("iframe").offset().top;
  $(window).scrollTop(s);
}

/*
$("#serviceX").on("click", function () {
  $("#iframe-body").fadeIn();
  $("#modalA").fadeIn();
  s = $("iframe").offset().top;
  $(window).scrollTop(s);
});
*/

//ここに欲しいデータの名前を打ち込んでください！ *呼び名は決まっています。・・・２
//ex.  'name':'',
demandData = [
  "nameKatakana",
  "nameKanji",
  "addres",
  "email",
  "phoneAdvance",
  "phoneCenter",
  "phoneBack",
];
//JSON.parseの文字列はダブルクオーテーションで囲まないとエラーになる。

const readyIframe = () => {
  demandData = JSON.parse(JSON.stringify(demandData));
  prottype = ["0", "1"];
  console.log(demandData);
  $("#iframe-body")[0].contentWindow.postMessage(demandData, "*");
};
//必要データを要求
window.addEventListener("message", readyIframe, { once: true });

//ここでフォームのIDを取得をしてください *２番で打ち込んだ順に記入してください。
window.addEventListener("message", (serve) => {
  if (typeof serve.data !== "string") {
    $("#iframe-body").fadeOut();
    $("#modalA").fadeOut();
    console.log(typeof serve.data);
    serveData = serve.data;
    console.log(serveData);
    document.getElementById("moushikomiShimeiKn").value = serveData[0];
    document.getElementById("moushikomiShimeiKj").value = serveData[1];
    document.getElementById("moushikomiMail").value = serveData[2];
    document.getElementById("confirmMoushikomiMail").value = serveData[3];
    document.getElementById("moushikomiPhoneNo1").value = serveData[4];
    document.getElementById("moushikomiPhoneNo2").value = serveData[5];
    document.getElementById("moushikomiPhoneNo3").value = serveData[6];
  }
});

"https://konjikun.github.io/administraition-form/".onload = () => {};

//参照：https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage
window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== "https://github.com/konjikun/administraition-form.git")
      return;

    // ...
  },
  false
);

//ここから下はメモ

var info = document.getElementById("serviceX");
serviceX.addEventListener("click", () => {
  document.getElementById("moushikomiShimeiKn").value = "サトウタロウ";
  document.getElementById("moushikomiShimeiKj").value = "佐藤太郎";
  document.getElementById("moushikomiMail").value = "111111@gmail.com";
  document.getElementById("confirmMoushikomiMail").value = "111111@gmail.com";
  document.getElementById("moushikomiPhoneNo1").value = "090";
  document.getElementById("moushikomiPhoneNo2").value = "1111";
  document.getElementById("moushikomiPhoneNo3").value = "2222";
});

//contents見えなくなる
contents.style.display = "none";

//もしかしたらどのサイトでもモーダル統一できるのでは
const bodyId = document.getElementsByTagName("body");
bodyId.id = "body";

//反応してない！！
$("#iframe").css({
  position: "fixed",
  top: 0,
  left: 200,
  width: "100%",
  height: "100%",
  textalign: "center",
  backgroundcolor: "rgba(0,0,0,5)",
  //paddingのみ抜き
  overflow: "auto",
  opacity: 0,
  visibility: "hide",
  transition: ".3s",
  boxsizing: "border-box",
});

$(function () {
  // 変数に要素を入れる
  var open = $(".modal-open"),
    close = $(".modal-close"),
    container = $(".modal-container");

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    container.addClass("active");
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
    container.removeClass("active");
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".modal-body").length) {
      container.removeClass("active");
    }
  });
});

$(function () {});

document
  .querySelector("contents")
  .appendChild(ifra)(document.getElementById("serviceX"))
  .click(function () {
    "#view, #contents".fadeTo(200, 1);
  });

export { buttonAdd, iframe };
