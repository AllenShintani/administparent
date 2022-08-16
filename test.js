//ボタン追加
const addButton = document.createElement('input');
addButton.classList.add('addition');
addButton.type = 'button';
addButton.value = 'serviceXから入力';
addButton.id = 'serviceX';
document.querySelector('#vi > p').appendChild(addButton);


//function aiueo{}
//iframe生成
$('#serviceX').on('click',function(){
const modalArea= document.createElement('section')
modalArea.style.width='100%';
modalArea.style.height='100%'
modalArea.style.top='0'
modalArea.style.left='0'
modalArea.style.position='fixed'
modalArea.style.background ='rgba(0,0,0,50%)'
modalArea.id='modalA'

const ifra = document.createElement('iframe');
ifra.src='https://konjikun.github.io/administraition-form/'
ifra.id='iframe-body'
ifra.style.width='600px'
ifra.style.height='800px'
ifra.style.top='50%'
ifra.style.left='50%'
ifra.style.backgroundColor='white'
ifra.style.border='none'
ifra.style.position='absolute'
ifra.style.transform='translate(-50%,-50%)'

document.querySelector('#contents').appendChild(modalArea)
document.querySelector('#contents').appendChild(ifra);

prottype=['0','1']

console.log(1)
$('#iframe-body')[0].contentWindow.postMessage(prottype, '*')

})
'https://konjikun.github.io/administraition-form/'.onload = ()=>{

}

  //[配列]は数字のみなので連想配列を使う。保存する個人の情報
  /*const storageIndivAdd =[
	nameKatakana,
	nameKanji,
	addres,
	email,
	phone,
    phoneAdvance,
	phoneCenter,
	phoneBack
  ]*/

//ここまで！

/*
//連想配列を配列の要素として追加
const storageIndiv = []
storageIndiv.push(storageIndivAdd)

//配列変数　ニア＝　連想配列

//参照：https://qiita.com/terufumi1122/items/6ddd9c520a9d0a19896a
//JSON文字列に変換する
const toJson =JSON.stringify(storageIndiv)

//setItem('キー',value)
localStorage.setItem('https://suidonet.waterworks.metro.tokyo.lg.jp/inet-service/uketsuke/useStart/inputApplicantInfo',toJson)

//これを水道局に送ればいいのでは？ =>A.ダメだ。setしたキーを送らないといけない。でないとiframe上のサイトでOk押してもクロスドメインのlocalStorageには保存されていない。
postToIframe = localStorage.getItem('https://suidonet.waterworks.metro.tokyo.lg.jp/inet-service/uketsuke/useStart/inputApplicantInfo')

$('#iframe-body')[0].contentWindow.postMessage(postToIframe, 'https://konjikun.github.io/administraition-form/')
*/

  /* iframeの場合の親から子を試す
  var iframe = document.querySelector('.iframe-body');
  iframe.postMessage({
	action: 'SyncMessage',
	message: 'postToIframe'
  }, '*', );
*/



//参照：https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage
window.addEventListener("message", (event) => {
	if (event.origin !== "https://github.com/konjikun/administraition-form.git")
	  return; 
  
	// ...
  }, false);


  //ここから下はメモ

  var info = document.getElementById('serviceX')

  serviceX.addEventListener('click',()=>{
	document.getElementById('moushikomiShimeiKn').value = "サトウタロウ";
    document.getElementById('moushikomiShimeiKj').value = "佐藤太郎";
    document.getElementById('moushikomiMail').value = "111111@gmail.com";
    document.getElementById('confirmMoushikomiMail').value = "111111@gmail.com";
    document.getElementById('moushikomiPhoneNo1').value = "090";
    document.getElementById('moushikomiPhoneNo2').value = "1111";
    document.getElementById('moushikomiPhoneNo3').value = "2222";
  })


//contents見えなくなる
contents.style.display='none'

//もしかしたらどのサイトでもモーダル統一できるのでは
const bodyId=document.getElementsByTagName('body')
bodyId.id='body'

//反応してない！！
$('#iframe').css({
  'position':'fixed',
  'top':0,
  'left':200,
  'width':'100%',
  'height':'100%',
  'text-align':'center',
  'background-color':'rgba(0,0,0,5)',
  //paddingのみ抜き
  'overflow':'auto',
  'opacity':0,
  'visibility':'hide',
  'transition':'.3s',
  'box-sizing':'border-box'
});




$(function(){
	// 変数に要素を入れる
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

$(function(){

})

/*

モーダル本体の指定 + モーダル外側の背景の指定
.modal-container{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	background: rgba(0,0,0,50%);
	padding: 40px 20px;
	overflow: auto;
	opacity: 0;
	visibility: hidden;
	transition: .3s;
    box-sizing: border-box;
}
/*モーダル本体の擬似要素の指定
.modal-container:before{
	content: "";
	display: inline-block;
	vertical-align: middle;
	height: 100%;
}
/*モーダル本体に「active」クラス付与した時のスタイル
.modal-container.active{
	opacity: 1;
	visibility: visible;
}
/*モーダル枠の指定
.modal-body{
	position: relative;
	display: inline-block;
	vertical-align: middle;
	max-width: 500px;
	width: 90%;
}
/*モーダルを閉じるボタンの指定
.modal-close{
	position: absolute;
	display: flex;
    align-items: center;
    justify-content: center;
	top: -40px;
	right: -40px;
	width: 40px;
	height: 40px;
	font-size: 40px;
	color: #fff;
	cursor: pointer;
}
/*モーダル内のコンテンツの指定
.modal-content{
	background: #fff;
	text-align: left;
	padding: 30px;
}
*/
//iframe埋め込み  
  ('#iframe').fadein();
document.querySelector('contents').appendChild(ifra)

(document.getElementById('serviceX')).click(function(){
    ('#view, #contents').fadeTo(200,1);
  });

//localStrage保存

//iframe親から子への送信

  /* iframeの場合
  document.referrer.postMessage({
	action: 'SyncMessage',
	message: 'Hello!'
  }, '*', );
*/

/*
オプション	対象部分	yes （または 1）	no （または 0）
width=	ウィンドウの横幅	ピクセル数で指定
height=	ウィンドウの縦幅	ピクセル数で指定
scrollbars=	スクロールバー	表示可能にする	表示しない
resizable=	ウィンドウのサイズ変更	変更を可能にする	変更を禁止する
menubar=	メニューバー	表示する	表示しない
toolbar=	ツールバー	表示する	表示しない
location=	ロケーションバー	表示する	表示しない
directories=	ディレクトリバー	表示する	表示しない
status=	ステータスバー	表示する	表示しない
*/
