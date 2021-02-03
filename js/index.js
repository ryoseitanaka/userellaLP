


// const hoverBox=document.getElementById("hoverBox");
//const使ってgetElementByIdで呼んで指定する。
// hoverBox.addEventListener("mouseover",function(event){
//     hoverBox.style.backgroundColor="tomato"
// });
// マウスを四角の中にいれて色がつくが確認する。

// window.addEventListener("load",function(event){
//     alert("読み込みました");
// });

// window.addEventListener("scroll",(event)=>{
//     let scroll=window.pageYOffset;
//     console.log(scroll)
// });

window.onload = () =>{
    let nayami = document.getElementById('nayami');
    let nayamiaaa = document.getElementById('nayamiaaa');

    let view = document.getElementById('view');
    let viewsumaho1 = document.getElementById('sumaho_box_A');
    let viewsumaho2 = document.getElementById('sumaho_box_B');
    let viewsumaho3 = document.getElementById('sumaho_box_C');

    let procedure = document.getElementById('procedure_step');
    let procedure_step1 = document.getElementById('step1');
    let procedure_step2 = document.getElementById('step2');
    let procedure_step3 = document.getElementById('step3');
    let procedure_step4 = document.getElementById('step4');
    

    nayamiaaa.style.opacity="0";
    let getnayamiRect = nayami.getBoundingClientRect();


    window.onscroll = () =>{
        let y = window.pageYOffset;
        console.log(y)

        let getnayamiRect = nayami.getBoundingClientRect() ;
        let nayamitopRect = getnayamiRect.top + -200 + window.pageYOffset;
        console.log(nayamitopRect)

        if (y >= nayamitopRect){
            nayamiaaa.style.opacity="1"
            nayamiaaa.style.transition="1s"
        } 

        let viewtopRect = getnayamiRect.bottom + window.pageYOffset;
        // console.log(viewtopRect);

        if (y >= viewtopRect){
            viewsumaho1.style.opacity = '1';
            viewsumaho1.style.transition = 'ease 1s';
            viewsumaho1.style.transitionDelay = '0.2s'

            viewsumaho2.style.opacity = '1';
            viewsumaho2.style.transition = 'ease 1s';
            viewsumaho2.style.transitionDelay = '0.4s'

            viewsumaho3.style.opacity = '1';
            viewsumaho3.style.transition = 'ease 1s';
            viewsumaho3.style.transitionDelay = '0.6s'
        }

        let procedure = document.getElementById('procedure_step');
        let getstepRect = procedure.getBoundingClientRect();
        // console.log(getstepRect)
        let steptopRect = getstepRect.top + window.pageYOffset;
        // console.log(steptopRect);

        if(y >= steptopRect){
            procedure_step1.style.opacity ="1"
            procedure_step1.style.transition = 'ease 1s';
            procedure_step1.style.transitionDelay = '0.2s'

            procedure_step2.style.opacity ="1"
            procedure_step2.style.transition = 'ease 1s'
            procedure_step2.style.transitionDelay = '0.4s'

            procedure_step3.style.opacity ="1"
            procedure_step3.style.transition= 'ease 1s'
            procedure_step3.style.transitionDelay= '0.6s'

            procedure_step4.style.opacity ="1"
            procedure_step4.style.transition = 'ease 1s'
            procedure_step4.style.transitionDelay = '0.8s'

            

        }



        
 }
}


