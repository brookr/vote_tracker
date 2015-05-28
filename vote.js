

function altNum(num1, num2, max) {
  var newNum;
  do {
   newNum = Math.floor(Math.random() * max);
  } while(newNum === num1 || newNum === num2);
  return newNum;
}

var pageSetup = function(images) {
  var num1, num2;

  console.log(images);

  num1 = altNum(num1, num2, images.length);
  num2 = altNum(num1, num2, images.length);

  $('#catFight1').attr('src', images[num1].link);
  $('#catFight2').attr('src', images[num2].link);
};

$.ajax({
  url: "https://api.imgur.com/3/album/FLB8V/images",
  headers:{
    "Authorization": "Client-ID 52a6434c730ea88"
  }
})
.done(function(res) {
  console.log(res.data[1]);
  $(pageSetup(res.data));
});


$(function() {
  $('#catFight1').on('click', function(){
    images.vote += 1;
    $('#catFight2').attr('src', images[altNum()].imgSrc);
  });

  $('#catFight2').on('click', function(){
    images.vote += 1;
    $('#catFight1').attr('src', images[altNum()].imgSrc);
  });
});
