// window.addEventListener("load",function(){
//     let maru =document.getElementById("maru");
//     // maruっていうIDを読み込んでdocument.getElementByIdで（"maru"）を呼ぶ
//     maru.style.backgroundColor ="skyblue"
//     // maruのIDからcssのstyleでbackgroundColorで色を変えている。
//     window.addEventListener("scroll",function(){
//         // window.addEventListenerでウィンドウの中で行われるイベントを指定する
//         // ("scroll"←この場合はスクロール,function()←を入れてイベントを書いてあげる
//         let scrollY = window.pageYOffset;
//         // scrollY←Yは縦 X←は横 今回は縦スクロールなんでYを指定
//         console.log(scrollY);
//         maru.style.transition ="ease 1s";
//         if(scrollY>=2000){
//             maru.style.backgroundColor ="tomato"
//         }else if(scrollY>=1000){
//             maru.style.backgroundColor  ="lightgreen"
//         }else{
//             maru.style.backgroundColor ="skyblue"
//         }

//     })
// })


window.addEventListener("load",function(){
    let isimaru =document.getElementById("isimaru");
    let toue =document.getElementById("toue");
    let satou =document.getElementById("satou");
    let tanaka =document.getElementById("tanaka");

    isimaru.style.transform="translateX(-200px)"
    toue.style.transform="translateX(-200px)"
    satou.style.transform="translateX(-200px)"
    tanaka.style.transform="translateX(-200px)"

    window.addEventListener("scroll",function(){
        let scrollY =window.pageYOffset
        console.log(scrollY);

        if(scrollY>=2000){
            isimaru.style.transform="translateX(300px)"
        }else if(scrollY>=1500){
            toue.style.transform="translateX(300px)"
        }else if(scrollY>=1000){
            satou.style.transform="translateX(300px)"
        }else(scrollY>=500){
            tanaka.style.transform="translateX(300px)"
        }
    })
})
