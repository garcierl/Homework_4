var MODEL = (function(){

    var HomeContent = `<div class="hero">
    <div class = "hero-text">
    <h1>LOREM</h1>
    <p class="hero-teal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, dolorum. </p>
    
    <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Fugiat aliquid minus nemo sed est.</p>
    
    <button class="home-button">Read more</button>
    </div>
    
    </div>
    <section class="paragraph">
    <div class="home-para">
    <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    </div>
    <div class="john">
    <p>John Smith</p>
    </div>
    <div class="title-john">
    <p>Corporation CEO, books author</p>
    </div>
    </section>
    `;

    
    var showModalContent = `<div class="login-title">
    <h1>LOGIN:</h1>
    <div class="login-border"></div>
    </div>
    <div class="modal">
            <div class="bg-click"></div>
            <div class="callout">
                <input id="username" type="text" placeholder="Enter username.."/>
                <input type="text" placeholder="Enter password..."/>
                <input id="submit" type="submit" placeholder="SUBMIT" onclick= "ShowAlert();"/>
            </div>
        </div>`;

    var _getMyVariable = function(buttonID, callback){
        let newName = buttonID + "Content";
    
        $("#app").html(eval(newName));
    
        if (callback){
            callback(newName);
        }
    };
    
    return{
        getMyVariable: _getMyVariable
    }
    
    })();