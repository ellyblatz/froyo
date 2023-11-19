const flavors = window.prompt ("Enter some flavors","vanilla,vanilla,vanilla,strawberry,coffee,coffee.");
console.log (flavors);

const flavorsArr = flavors.split(",");
console.log(flavorsArr);

const coffee = ("coffee")
const strawberry = ("strawberry")
const vanilla = ("vanilla")


function getCount (flavorsArr){
const count = {
coffee: 0,
vanilla: 0,
strawberry:0 }

  for (let i=0; i < flavorsArr.length; i++) {
      if(flavorsArr[i] === coffee) {
        count.coffee++
      } if(flavorsArr[i] === vanilla) {
        count.vanilla++
      } if(flavorsArr[i] === strawberry) {
        count.strawberry++
      }

  } return count
}
console.log(getCount(flavorsArr))
