function Cat(catNum, imgSrc, wins, losses){
  this.imgSrc = imgSrc;
  this.wins = wins;
  this.losses = losses;
}
var catArray = [];

for (var i = 1; i <= 14; i++) {
  catArray.push(new Cat([i], 'kittenPics/cat'+[i]+'.jpg', 0, 0))
};

do {
  var num1 = Math.floor(Math.random() * catArray.length);
  var num2 = Math.floor(Math.random() * catArray.length);
} while(num1 === num2);

function altNum(){
  do {
   var newNum = Math.floor(Math.random() * catArray.length);
   return newNum
  } while((newNum === num1) && (newNum === num2));
};

$(function(){
  $('#catFight1').attr('src', catArray[num1].imgSrc);
  $('#catFight2').attr('src', catArray[num2].imgSrc);
  var wins = catArray[num1].wins;

  $('#catFight1').click(function(){
    catArray[num1].wins += 1;
    catArray[num2].losses += 1;
    console.log(catArray[num1].wins);
    console.log(catArray[num1].losses);
    console.log(catArray[num2].wins);
    console.log(catArray[num2].losses);
    $('#catFight2').attr('src', catArray[altNum()].imgSrc);
  });

  $('#catFight2').click(function(){
    catArray[num2].wins += 1;
    catArray[num1].losses += 1;
    $('#catFight1').attr('src', catArray[altNum()].imgSrc);
  });
});




