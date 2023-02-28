let fondo1 = document.querySelector("#fondo1")
let fondo2 = document.querySelector("#fondo2")
let fondo3 = document.querySelector("#fondo3")

fondo1.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(fondos/1.jpg)";
    }); 

fondo2.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(fondos/2.jpg)";
    }); 

fondo3.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url(fondos/3.jpg)";            
 }); 

 
 

 (function() {
    var Nav;
  
    Nav = {
      init: function() {
        this.setup();
        return this.uiBind();
      },
      setup: function() {
        return $('#mainnav').find('li:not(:last-child)').toggleClass('invisible');
      },
      uiBind: function() {
        return $(document).on('click', '#mainnav', function(e) {
          e.preventDefault();
          return $(this).find('li:not(:last-child)').toggleClass('animate').toggleClass('invisible');
        });
      }
    };
  
    Nav.init();
  
  }).call(this);


document.getElementById("h1").addEventListener("mouseout",
          function myMove() {
            let id = null;
            const elem = document.getElementById("h1");   
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
              if (pos == 100) {
                clearInterval(id);
              } else {
                pos++; 
                elem.style.left= pos + "px"; 
                elem.style.right= pos + "0.10px"; 
                elem.style.transition= "4s";
                        
              }
            }});

document.getElementById("h4header").addEventListener("mouseout",
          function myMove() {
            let id = null;
            const elem = document.getElementById("h4header");   
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
              if (pos == 100) {
                clearInterval(id);
              } else {
                pos++; 
                elem.style.left= pos + "px"; 
                elem.style.right= pos + "px";
                elem.style.transition= "4s";
              }
            }
          });

          
          document.getElementById("gps").addEventListener("click", ()=>{
            location. href= "https://goo.gl/maps/d1BAcKBMd2KpMgeo7";
})


          




        




            
            






              
                
                
                
                
                
                
                
                
  