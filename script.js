// ==========================================
// BhaktiSewa Optimized script.js
// CLEAN VERSION (WITHOUT PANCHANG)
// PART 1/3
// ==========================================


// ==========================================
// APP INITIALIZATION
// ==========================================


window.addEventListener("DOMContentLoaded",()=>{


    loadSavedImage();


    loadSavedTheme();


    loadLanguage();


    createThemeGrid();


    setupGodImages();



});








// ==========================================
// IMAGE LOAD SYSTEM
// ==========================================


function loadSavedImage(){


    const savedImage =
    localStorage.getItem("heroImage");


    const heroImg =
    document.getElementById("heroImg");



    if(savedImage && heroImg){


        heroImg.src=savedImage;


    }


}








// ==========================================
// THEME LOAD
// ==========================================


function loadSavedTheme(){


    const savedTheme =
    localStorage.getItem("appTheme");



    if(!savedTheme) return;



    try{


        applyTheme(
            JSON.parse(savedTheme),
            false
        );


    }

    catch(error){


        console.warn(
        "Theme load error",
        error
        );


    }


}








// ==========================================
// LANGUAGE LOAD
// ==========================================


function loadLanguage(){


    const lang =
    localStorage.getItem("appLang")
    ||
    "Hindi";



    if(typeof translations!=="undefined"){


        setLang(lang);


    }


}








// ==========================================
// THEME GRID CREATE
// ==========================================


function createThemeGrid(){


    const grid =
    document.getElementById("themeGrid");



    if(
    !grid ||
    typeof themes==="undefined"
    )
    return;




    const fragment =
    document.createDocumentFragment();





    themes.forEach(theme=>{


        const btn =
        document.createElement("button");



        btn.className =
        "theme-btn";



        btn.style.backgroundColor =
        theme.btnColor+"33";



        btn.style.borderColor =
        theme.btnColor;





        btn.innerHTML=`


        <span style="
        background:${theme.btnColor};
        width:38px;
        height:38px;
        border-radius:50%;
        border:3px solid #fff;
        box-shadow:0 0 18px ${theme.btnColor};
        margin-bottom:10px;">
        </span>



        <div>
        ${theme.name}
        </div>


        `;






        btn.addEventListener(
        "click",
        ()=>{


            document
            .querySelectorAll(".theme-btn")
            .forEach(b=>{

                b.classList.remove(
                "active"
                );

            });




            btn.classList.add(
            "active"
            );



            applyTheme(
            theme,
            true
            );


        });



        fragment.appendChild(btn);



    });




    grid.appendChild(fragment);



}








// ==========================================
// GOD IMAGE SELECT
// ==========================================


function setupGodImages(){


    const heroImg =
    document.getElementById(
    "heroImg"
    );



    document
    .querySelectorAll(".god-item")
    .forEach(item=>{



        item.addEventListener(
        "click",
        ()=>{



            const img =
            item.querySelector("img");



            if(
            !img ||
            !heroImg
            )
            return;




            const src =
            img.src;




            heroImg.src =
            src;




            try{


                localStorage.setItem(
                "heroImage",
                src
                );


            }

            catch(e){


                console.warn(
                "Image save failed"
                );


            }




        });


    });


}






// ==========================================
// MENU SYSTEM
// ==========================================


function toggleMenu(){


    const dropdown =
    document.getElementById(
    "dropdown"
    );



    if(dropdown){


        dropdown.classList.toggle(
        "show"
        );


    }


}








function showLangOptions(event){


    if(event){


        event.stopPropagation();


    }



    const list =
    document.getElementById(
    "langList"
    );



    if(!list)
    return;



    list.classList.toggle(
    "show-lang"
    );



    list.style.display =
    list.classList.contains(
    "show-lang"
    )
    ?
    "block"
    :
    "none";



}
// ==========================================
// BhaktiSewa Optimized script.js
// CLEAN VERSION (WITHOUT PANCHANG)
// PART 2/3
// ==========================================


// ==========================================
// LANGUAGE CHANGE
// ==========================================


function setLang(lang){


    if(
    typeof translations==="undefined" ||
    !translations[lang]
    )
    return;



    const t =
    translations[lang];



    const map={


        mainMarquee:"marquee",

        bottomMarquee:"update",

        menuThemes:"themes",

        menuLang:"langBtn",

        menuProfile:"profileMenu",

        menuAbout:"aboutMenu",

        menuShare:"shareMenu",

        menuContact:"contactMenu",

        menuDonation:"donationMenu",

        aboutTitle:"aboutTitle",

        aboutText:"aboutText",

        aboutCommit:"aboutCommit"


    };





    Object.keys(map)
    .forEach(id=>{


        const el =
        document.getElementById(id);



        if(el){


            el.innerText =
            t[map[id]];


        }



    });





    document
    .querySelectorAll(".lang-hi")
    .forEach(el=>{


        el.style.display =
        lang==="Hindi"
        ?
        "inline"
        :
        "none";


    });





    document
    .querySelectorAll(".lang-en")
    .forEach(el=>{


        el.style.display =
        lang==="Hindi"
        ?
        "none"
        :
        "inline";


    });





    localStorage.setItem(
    "appLang",
    lang
    );





    document
    .getElementById("dropdown")
    ?.classList.remove(
    "show"
    );



    const list =
    document.getElementById(
    "langList"
    );



    if(list){


        list.style.display =
        "none";


        list.classList.remove(
        "show-lang"
        );


    }



}








// ==========================================
// THEME SYSTEM
// ==========================================


function openThemeModal(){


    const modal =
    document.getElementById(
    "themeModal"
    );



    if(modal){


        modal.style.display =
        "block";


    }



    toggleMenu();


}








function closeModal(){


    const modal =
    document.getElementById(
    "themeModal"
    );



    if(modal){


        modal.style.display =
        "none";


    }


}








function applyTheme(theme,closeAfter=true){



    if(!theme)
    return;




    document.documentElement
    .style
    .setProperty(
    "--gold",
    theme.goldColor
    );





    document.body.style.backgroundColor =
    theme.bgColor;





    try{


        localStorage.setItem(
        "appTheme",
        JSON.stringify(theme)
        );


    }


    catch(e){


        console.warn(
        "Theme save failed"
        );


    }






    if(closeAfter){


        closeModal();


    }



}








// ==========================================
// FLIP CARD
// ==========================================


function flipCard(){


    const card =
    document.getElementById(
    "flipCard"
    );



    if(card){


        card.classList.toggle(
        "flipped"
        );


    }


}








// ==========================================
// SIDEBAR SYSTEM
// ==========================================


function toggleSidebar(){


    const sidebar =
    document.getElementById(
    "sidebar"
    );



    const overlay =
    document.getElementById(
    "sidebarOverlay"
    );



    const handle =
    document.getElementById(
    "sidebarHandle"
    );





    if(
    !sidebar ||
    !overlay ||
    !handle
    )
    return;





    const active =
    sidebar.classList.toggle(
    "active"
    );





    overlay.style.display =
    active
    ?
    "block"
    :
    "none";





    const icon =
    handle.querySelector(
    "span"
    );



    if(icon){


        icon.innerText =
        active
        ?
        "✖"
        :
        "≡";


    }



}








// ==========================================
// IMAGE UPLOAD SYSTEM
// ==========================================


function uploadUserImage(event){


    const file =
    event.target.files[0];



    if(!file)
    return;





    if(file.size >
    3*1024*1024){



        alert(
        "कृपया 3MB से छोटी इमेज चुनें।"
        );



        return;


    }





    const reader =
    new FileReader();





    reader.onload=function(e){



        const img =
        document.getElementById(
        "heroImg"
        );



        if(img){


            img.src =
            e.target.result;


        }





        try{


            localStorage.setItem(
            "heroImage",
            e.target.result
            );



        }


        catch(err){


            console.warn(
            "Image storage failed"
            );


        }



    };





    reader.readAsDataURL(file);



}
// ==========================================
// BhaktiSewa Optimized script.js
// CLEAN VERSION (WITHOUT PANCHANG)
// PART 3/3 FINAL
// ==========================================


// ==========================================
// SHARE APP
// ==========================================


function shareApp(){


    const shareData={


        title:
        "🙏 भक्ति सेवा (Bhakti Sewa)",



        text:
        "भक्ति सेवा ऐप के माध्यम से अपने आराध्य की डिजिटल पूजा करें! अभी जुड़ें:",



        url:
        window.location.href



    };





    if(navigator.share){



        navigator.share(shareData)

        .catch(error=>{


            console.log(
            "Share cancelled",
            error
            );


        });



    }

    else{



        alert(
        "लिंक कॉपी करके शेयर करें:\n"+
        window.location.href
        );



    }



}









// ==========================================
// CLICK OUTSIDE HANDLER
// ==========================================


window.addEventListener(
"click",
function(event){



    const modal =
    document.getElementById(
    "themeModal"
    );





    if(
    modal &&
    event.target===modal
    ){


        closeModal();


    }








    const menu =
    document.querySelector(
    ".menu-container"
    );






    if(
    menu &&
    !event.target.closest(
    ".menu-container"
    )

    ){



        const dropdown =
        document.getElementById(
        "dropdown"
        );



        const langList =
        document.getElementById(
        "langList"
        );





        if(dropdown){


            dropdown.classList.remove(
            "show"
            );


        }






        if(langList){


            langList.style.display =
            "none";



            langList.classList.remove(
            "show-lang"
            );


        }





    }



});









// ==========================================
// UNIVERSAL RIPPLE EFFECT
// ==========================================


document.addEventListener(
"click",
function(e){



    const button =
    e.target.closest(
    ".theme-btn,.menu-btn,.back-btn"
    );



    if(!button)
    return;





    const circle =
    document.createElement(
    "span"
    );





    const size =
    Math.max(
    button.offsetWidth,
    button.offsetHeight
    );





    circle.style.width =
    size+"px";



    circle.style.height =
    size+"px";






    const rect =
    button.getBoundingClientRect();





    circle.style.left =
    (
    e.clientX -
    rect.left -
    size/2
    )+"px";





    circle.style.top =
    (
    e.clientY -
    rect.top -
    size/2
    )+"px";





    circle.className =
    "ripple-effect";





    button.appendChild(
    circle
    );





    setTimeout(()=>{


        circle.remove();


    },600);



});









// ==========================================
// SAFE ERROR HANDLING
// ==========================================


window.addEventListener(
"error",
function(e){


    console.warn(
    "BhaktiSewa Error:",
    e.message
    );


});









// ==========================================
// APP READY
// ==========================================


console.log(
"🙏 BhaktiSewa App Loaded Successfully (Panchang Module Removed)"
);