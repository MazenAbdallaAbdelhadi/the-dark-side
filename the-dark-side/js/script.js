let myWork = document.getElementById("my-work"), 
    viewEle = document.querySelector(".view"),
    gallary =[];

    for( i = 0; i < 20; i++ ){
        gallary[i] = document.createElement("div");
        myWork.appendChild(gallary[i]);
        gallary[i].style.backgroundImage = "url(../img/my-work-page/my-work-" + i +".jpg";
    }
    gallary.forEach(function(ele){
        ele.addEventListener("click", () => {
            viewEle.style.backgroundImage = ele.style.backgroundImage;
        });
    });

