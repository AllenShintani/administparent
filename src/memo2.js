document.write('<script type="module" src="localhost:3000/memo.js")>/script');
import { buttonAdd } from "./memo";
const btn = buttonAdd("contents"); //ボタンを入れたいところ入れて下さい
/*console.log(btn);
//hogeには、ボタンを設置したい場所を指定してください
$("#contents").append(btn);
//*/

btn.click(() => {
  feasy.send(["name", "tel"]);
});
feasy.on("data", (data) => {
  //fuoaには、データを入れたいエリアを入れてください
  $("#fuoa").text(data.name);
});
