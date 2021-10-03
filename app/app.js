function showContent(newName){
    console.log("newName app.js" + newName);
}

function init(){

    $("nav a").click(function(e){
        
        let btnId = e.currentTarget.id;
        console.log(btnId);
        MODEL.getMyVariable(btnId, showContent);        
        
    });

}
    

    function addModalListener() {
        $(".bg-click").click(function (e) {
            console.log("#username");
            //$(".modal").css("display","none")
            gsap.to($(".modal"), { scale: 0, duration: 2});
        });
    }
    
    function initListeners() {
       $("#submit").click(function (e) {
           e.preventDefault();
           let text = $("#username").val();
           gsap.to($(".modal"), {
               scale: 0,
               duration: 2,
               onComplete: ShowAlert,
               onCompleteParams:  [text]});
       })
    
    
        $("#showModal").click(function(e) {
             gsap.to($(".modal"), { ease: "elastic.out",scale: 1, duration: 2});
            addModalListener();
        })
    };
    
    function ShowAlert(info){
        //console.log(info);
        alert("You are now logged in");
        $("callout-text").val("")
    }
    
    
    $(document).ready(function () {
        console.log("ready");
        init();
       gsap.set($(".modal"), {scale: 0});
        initListeners();
    });
    