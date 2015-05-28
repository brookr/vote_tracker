function Cat(catNum, imgSrc, wins, losses){
  this.catNum = catNum;
  this.imgSrc = imgSrc;
  this.wins = wins;
  this.losses = losses;
}

function altNum(num1, num2){
  var newNum;
  do {
   newNum = Math.floor(Math.random() * catArray.length);
  } while(newNum === num1 || newNum === num2);
  return newNum
};

var num1, num2, wins, catArray = [];

for (var i = 1; i <= 14; i++) {
  catArray.push(new Cat([i], 'kittenPics/cat'+[i]+'.jpg', 0, 0))
};

num1 = Math.floor(Math.random() * catArray.length);
num2 = altNum(num1, null);

$(function(){
  $('img#catFight1').attr('src', catArray[num1].imgSrc);
  $('img#catFight2').attr('src', catArray[num2].imgSrc);
  wins = catArray[num1].wins;

  $('#catFight1').click(function(){
    catArray[num1].wins += 1;
    catArray[num2].losses += 1;
    console.log(catArray[num1].wins);
    console.log(catArray[num1].losses);
    console.log(catArray[num2].wins);
    console.log(catArray[num2].losses);
    num2 = altNum(num1, num2);
    $('#catFight2').attr('src', catArray[num2].imgSrc);
  });

  $('#catFight2').click(function(){
    catArray[num1].losses += 1;
    catArray[num2].wins += 1;
    num1 = altNum(num1, num2);
    $('#catFight1').attr('src', catArray[num1].imgSrc);
  });
});
