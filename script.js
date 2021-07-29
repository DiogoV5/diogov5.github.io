

function test1(){

    var item1 = 0;
    var item2 = 0;

    var ask = document.getElementsByName(`ask1`);
    if (ask[0].checked){item1++}
    else if (ask[1].checked) {item2++}

    var ask = document.getElementsByName(`ask2`);
    if (ask[0].checked){item1++}
    else if (ask[1].checked){item2++}
    else if (ask[2].checked){item1++}
    else if (ask[3].checked){item1++}
    else if (ask[4].checked){item2++}

    var ask = document.getElementsByName(`ask3`);
    if (ask[0].checked){item1++}
    else if (ask[1].checked){item1++}
    else if (ask[2].checked){item2++}

    var ask = document.getElementsByName(`ask4`);
    if (ask[0].checked){item1++}
    else if (ask[1].checked){item2++}
    else if (ask[2].checked){item1++}
    else if (ask[3].checked){item1++}
    else if (ask[4].checked){item2++}
    console.log(item1, item2);

    if (item1 > item2){
        document.getElementById('container').style.visibility = 'visible';
        document.getElementById('image').src = 'https://tinariaone.ru/wp-content/uploads/tinaria.one1051-1000x1499.jpg'
        document.getElementById(`answer`).innerHTML = '<br>Вы бородинский хлеб';
        document.getElementById('href').href = 'https://tinariaone.ru/product/kostyum-s-odnobortnym-pidzhakom-v-zelenom-czvete/';
    }
    else{
        document.getElementById('container').style.visibility = 'visible';
        document.getElementById('image').src = 'https://tinariaone.ru/wp-content/uploads/1tinaria.one4230-1000x1499.jpg'
        document.getElementById(`answer`).innerHTML = '<br>Вы белый хлеб';
        document.getElementById('href').href = 'https://tinariaone.ru/product/kostyum-s-odnobortnym-pidzhakom-v-czvete-biryuza/';
    }
    setTimeout(scrolltodown, 5);
}

function scrolltodown(){
    window.scrollTo(0,document.body.scrollHeight)
}