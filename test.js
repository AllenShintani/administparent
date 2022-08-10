//ボタン追加
const addButton = document.createElement('input');
addButton.classList.add('addition');
addButton.type = 'button';
addButton.value = 'serviceXから入力';
addButton.id = 'serviceX';
document.querySelector('#vi > p').appendChild(addButton);

//iframe生成
('#serviceX').click(function(){
const ifra = document.createElement('iframe');
ifra.src='https://konjikun.github.io/administraition-form/'
document.querySelector('#vi > p').appendChild(ifra);
})

//iframe埋め込み  
  ('#iframe').fadein();

document.querySelector('contents').appendChild(ifra)

(document.getElementById('serviceX')).click(function(){
    ('#view, #contents').fadeTo(200,1);
  });