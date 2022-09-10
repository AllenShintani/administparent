/*ユーザーの打ち込めるようにする情報はボタンの配置場所、ほしいデータ
取得したデータを入れる場所の3点*/

document.write('<script type="module" src="localhost:3000/memo.js")>/script');
import { buttonAdd } from "./memo";
const btn = buttonAdd("contents"); //ボタンを入れたいところ入れて下さい
/*console.log(btn);
//hogeには、ボタンを設置したい場所を指定してください
$("#contents").append(btn);
//*/

//キーにはユーザーに要求する情報を。値には情報を入れる要素のidを入れてください
demandData = {
  a: "b",
};

"#serviceX".click(() => {
  feasy.send(["name", "tel"]);
});
feasy.on("data", (data) => {
  //fuoaには、データを入れたいエリアを入れてください
  $("#fuoa").text(data.name);
});
