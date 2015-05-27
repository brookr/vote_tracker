var images = [];

var pageSetup = function(){

  var num1, num2;

  console.log(images);


  function altNum(num1, num2){
    var newNum;
    do {
     newNum = Math.floor(Math.random() * images.length);
    } while(newNum === num1 || newNum === num2);
    return newNum;
  };

  num1 = Math.floor(Math.random() * images.length);
  do {
    num2 = Math.floor(Math.random() * images.length);
  } while(num1 === num2);

  $(function(){
    $('#catFight1').attr('src', images[num1].link);
    $('#catFight2').attr('src', images[num2].link);

    $('#catFight1').click(function(){
      images.vote += 1;
      $('#catFight2').attr('src', images[altNum()].imgSrc);
    });

    $('#catFight2').click(function(){
      images.vote += 1;
      $('#catFight1').attr('src', images[altNum()].imgSrc);
    });
  });
};

 $.ajax({
   url: "https://api.imgur.com/3/album/FLB8V/images",
   headers:{
    "Authorization": "Client-ID 52a6434c730ea88"
    }
  })
 .done(function(res) {
    console.log(res.data[1]);
    images = res.data;
    pageSetup();
  });





