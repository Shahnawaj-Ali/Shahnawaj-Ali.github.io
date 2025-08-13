var mnb=document.getElementById("nmb");
var remo=document.getElementById("remove");
var cl=document.getElementById("b_o");
    cl.onclick=function man(){
      mnb.style.display="block";
    }

    remo.onclick=function mor(){
      mnb.style.display="none";

    }

     var h=document.getElementById("home");
      h.onclick=function red(){
        if(mnb.style.display == "block"){
           mnb.style.display="none";
        }
      }

     var abo=document.getElementById("about");
      abo.onclick=function red(){
         if(mnb.style.display == "block"){
        mnb.style.display="none";
      }
    }

           var ser=document.getElementById("service");
      ser.onclick=function red(){
         if(mnb.style.display == "block"){
        mnb.style.display="none";
      }
    }

           var op=document.getElementById("port");
      op.onclick=function red(){
         if(mnb.style.display == "block"){
        mnb.style.display="none";
      }
    }

           var con=document.getElementById("co");
      con.onclick=function red(){
         if(mnb.style.display == "block"){
        mnb.style.display="none";
      }
    }

           var l=document.getElementById("les");
      l.onclick=function red(){
         if(mnb.style.display == "block"){
        mnb.style.display="none";
      }
    }

 




 // Years of Experience count start coding
function ren(){
  var stp;
  var year=document.getElementById("y");
    var x=0;
  function demo(){
         year.innerHTML=x++;

         if(x == 11){
          clearInterval(stp);
          year.innerHTML="10+";
         }
  }

  stp=setInterval(demo,100);
}

  ren();

 // Years of Experience count end coding
// ------------------------------------------------------------------------------------------
 // Happy Clients count start coding
 function hap(){
  var stop;
  var happy=document.getElementById("h");
  var y=0;
  function clint(){
    happy.innerHTML=y++;
    if(y==151){
      clearInterval(stop);
      happy.innerHTML="150+";
    }
  } 

  stop=setInterval(clint,100);
 }
hap();
 // Happy Clients count end coding
// ------------------------------------------------------------------------------------------
// Projects Done count start coding
    function run(){
      var stopt;
      var project=document.getElementById("p");
      var z=0;

      function red(){
        project.innerHTML=z++;
        if(z==181){
          clearInterval(stopt);
          project.innerHTML="180+";
        }
        
      }
      stopt=setInterval(red,100);
    }

run();
// Projects Done count start coding

function ma(){
var nu=document.getElementById("va");
var rs;
var i=1;
  function mov(){
    nu.innerHTML=i++;
    if(i == 81){
      clearInterval(rs);
      nu.innerHTML="80%";
    }
  }
     rs=setInterval(mov,100);
}

ma();


function scs(){
  var sty=document.getElementById("cs");
  var s_top;
  var a=1;
    function sss(){
      sty.innerHTML=a++;
      if(a==71){
        clearInterval(s_top);
        sty.innerHTML="70%";
      }
    }
    s_top=setInterval(sss,100);
}

scs();


function mf(){
  var js=document.getElementById("vsa");
  var jss;
  var w=1;
  function ja(){
    js.innerHTML=w++;
    if(w==71){
      clearInterval(jss);
      js.innerHTML="70%";
    }
  }
  jss=setInterval(ja,100);
}

mf();

function mt(){
  var js=document.getElementById("wp");
  var jss;
  var w=1;
  function ja(){
    js.innerHTML=w++;
    if(w==71){
      clearInterval(jss);
      js.innerHTML="70%";
    }
  }
  jss=setInterval(ja,100);
}

mt();

function mta(){
  var js=document.getElementById("canva");
  var jss;
  var w=1;
  function ja(){
    js.innerHTML=w++;
    if(w==71){
      clearInterval(jss);
      js.innerHTML="70%";
    }
  }
  jss=setInterval(ja,100);
}

mta();


function mtas(){
  var js=document.getElementById("seo");
  var jss;
  var w=1;
  function ja(){
    js.innerHTML=w++;
    if(w==61){
      clearInterval(jss);
      js.innerHTML="60%";
    }
  }
  jss=setInterval(ja,100);
}

mtas();

var g_i=document.getElementById("po-i-one");
var load_i=document.getElementById("po-i-three");
var  load_b=document.getElementById("load");
  load_b.onclick=function loda(){
     load_i.style.display="flex";
     load_i.style.justifyContent="space-around";
      load_b.innerHTML="Hide";

  load_b.onclick=function lodn(){
      load_i.style.display="none";
      load_b.innerHTML="Load more";
  
  load_b.onclick=function lastl(){
   loda();
    }
  }
}

var all=document.getElementById("dex-a");
   all.onclick=function(){
    ful.style.backgroundColor="white";
    tul.style.backgroundColor="white";    
    al.style.backgroundColor="gray";
    sul.style.backgroundColor="white";
    load_i.style.display="flex";
    load_i.style.justifyContent="space-around";
    load_b.innerHTML="Hide";
    g_i.style.display="flex";
    g_i.style.justifyContent="space-around";
    sec_l.style.display="flex";
    sec_l.style.justifyContent="space-around";
    load_b.style.display="block";
   }





 
var al=document.getElementById("ul-a");  
var sul=document.getElementById("ul-b");
var tul=document.getElementById("ul-c");
var ful=document.getElementById("ul-d");
var griph=document.getElementById("dex-b"); 
    griph.onclick=function(){
          ful.style.backgroundColor="white";
          tul.style.backgroundColor="white";
          al.style.backgroundColor="white";
          sul.style.backgroundColor="gray";
          g_i.style.display="none";
          load_i.style.display="none";
          sec_l.style.display="flex";
          sec_l.style.justifyContent="space-around";
          load_b.style.display="none";
    } 

var sec_l=document.getElementById("po-i-two");
var wd=document.getElementById("dex-c");
    wd.onclick=function(){
          ful.style.backgroundColor="white";
          tul.style.backgroundColor="gray";
          al.style.backgroundColor="white";
          sul.style.backgroundColor="white";
    g_i.style.display="none";
    sec_l.style.display="none";
     load_i.style.display="flex";
    load_i.style.justifyContent="space-around";

    load_b.style.display="none"; 

 }

 var se=document.getElementById("dex-d");
     se.onclick=function(){
      window.alert("Good Job");
     }     

