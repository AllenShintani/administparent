import * as feasy from "feesy.js";

//document.write('<script src="localhost:3000/feesy.js")>/script');

const btn = feasy.buttonAdd();
console.log(btn);
//hogeには、ボタンを設置したい場所を指定してください
$("#contents").append(btn);
//
btn.click(() => {});

btn.click(() => {
  feasy.send(["name", "tel"]);
});
feasy.on("data", (data) => {
  //fuoaには、データを入れたいエリアを入れてください
  $("#fuoa").text(data.name);
});
