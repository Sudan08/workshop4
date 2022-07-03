function buggycode(number){
    var list =[];
    var number = document.getElementById("input1").value;
    for (var i=1; i<=number;i++){
        list.push(i);
    }
    document.getElementById("output1").value = list;
    
    

};
class TrueorFalse{
    constructor(arr){
      
        this.arr = arr;
    }   
    returnresult(){
        var truevalue=0;
        var falsevalue=0;
       
        length = this.arr.length;
        truevalue = this.arr.filter(Boolean).length;
        falsevalue = length - truevalue;

        
        return ("The number of true= "+truevalue+" the number of false= "+falsevalue);
    }

}

var a = new TrueorFalse([true,false,false,true,false]);
console.log(a.returnresult());

class Upordown{
    constructor(upvote,downvote){
        this.upvote = upvote;
        this.downvote = downvote;
    }
    returnresult1(){
        return (this.upvote-this.downvote);
    }

    }

var output = new Upordown(51,59);
console.log("The difference between upvote and downvote is:"+output.returnresult1());



class olderthanme{
    constructor(myage,name,age){
        this.name=name;
        this.age=age;
        this.myage = myage;

        if (myage > age){
            this.output = "You are older than"+name+"by"+(myage-age);
        }
        else if (myage < age){
            this.output = "You are younger than"+name+"by"+(age-myage);
        }
        else if(myage == age){
            this.output = "both of your age is"+(age-myage);
        }
        else{
            this.output = "error";
        }
    }
        
        returnresult2(){
            return (this.output);
        }



    }


    var com1= new olderthanme(18,"Adhish",16);
    console.log(com1.returnresult2());
    var com2= new olderthanme(18,"Juja",18);
    console.log(com2.returnresult2());
    var com3= new olderthanme(18,"Muskan",22);
    console.log(com3.returnresult2());
    var com4= new olderthanme(122,"Yuki","Meow");
    console.log(com4.returnresult2());



function OtoA(arr){
    var entry = {
        name:"Sudan",
        age:"12"
    }
    let entries = Object.entries(entry);
    console.log(entries);
   document.getElementById("output2").value="["+entries+"]";
}

// class Grocery{
//     constructor(product,quantity,price){
//         this.product = product;
//         this.quantity = quantity;
//         this.price = price;

//     }
//     returnresult3(){
//         return "Total cost is "+this.quantity*this.price;
//     }
// }

// let Customer1 = new Grocery("Milk",10,2.5);
// let Customer2 = new Grocery("Chocolate",4,2);
// let Customer3 = new Grocery("Cheese",1,5.5);
// let Customer4 = new Grocery("Curd",2,5.5);
// let Customer5 = new Grocery("Butter",4,3);

// console.log(Customer1.returnresult3());
// console.log(Customer2.returnresult3());
// console.log(Customer3.returnresult3());
// console.log(Customer4.returnresult3());
// console.log(Customer5.returnresult3());

arraylist=[
{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Eggs", quantity: 12, price: 0.10 },
{ product: "Bread", quantity: 2, price: 1.60 },
{ product: "Cheese", quantity: 1, price: 4.50 }
]
function glocery(arr){
    total=0
    for (i=0;i<=arr.length-1;i++){
    var number= arr[i].quantity;
    console.log(number)
    var value =arr[i].price;
    console.log(value);
    total = total + (number*value);

}
    return "The total is "+total

}

console.log(glocery(arraylist))



document.getElementById("button4").addEventListener("click",function(){
    Sum =0;
    var inputs = document.getElementById("input4").value;

    const arraylist = inputs.split(",");

    for (j=0;j<=arraylist.length-1;j++){
        if (j==5){
            if (arraylist[j] <=8){
                Sum = Sum + arraylist[j]*15
             
            }
            else{
                Sum = Sum + (arraylist[j]-((arraylist[j])-8)) *20+ ((arraylist[j])-8) * 30;
            }

        }
        else if (arraylist[j] <=8){
            Sum = Sum + arraylist[j] * 10;
        }
        else{
            Sum = Sum + (arraylist[j]-((arraylist[j])-8)) *10+ ((arraylist[j])-8) * 15;
        }

    }
    console.log(Sum)
    document.getElementById("output4").value = Sum;
});

// class Student{
//     constructor(array){
//         this.array = array;
   
//     }

//         result3(){
//             var arrayofAVG=[];
//             var sum =0;
//             var avg =0;
//         for (i in this.array){
//             console.log(i.length);
//             for (var j = 0;j<i.length -1; j++){
//             sum= sum + (this.array[i][j]);
//             }
//             avg = sum/(this.array.length);
//             arrayofAVG.push(avg);
//         }
//         for (j=0;j<=arrayofAVG.length -1;j++){
//             if (arrayofAVG[j]>arrayofAVG[j+1]){
//                 var Final= arrayofAVG[j]
//                 console.log(Final)
//             }
//         }
//         return Final;
//     }
// }


// let entry1 = new Student({John:[100,90,70],Bob:[100,70,80]})
// console.log(entry1.result3());


// Shiritori Game

class Game{
    constructor(){
        this.words = [];
        this.gameover = false;
    }

    play(word){
        if (this.words.length>=1){
        var lastelement= this.words.length -1;
        console.log((this.words[lastelement].slice(-1)).toUpperCase());
        console.log(word[0].toUpperCase());
        if (this.words[lastelement].slice(-1).toUpperCase() === word[0].toUpperCase()){
        for (i in this.words){
            console.log(this.words[i]);
            console.log(word);
            if (word == this.words[i]){
    
                console.log("game over");
                this.gameover = true
             
            }
        }
        this.words.push(word);
        console.log(this.words);
    }
    else{
        console.log("game over");
        this.gameover = true
    }
    }
    else{
        this.words.push(word);
        console.log(this.words)
    }


}

    restart(){
        this.words =[] ;
        this.gameover = false;
        console.log("restarted");
    }
}


class CoffeeShop{
    constructor(){
        this.name = "Starbucks";
        this.menu = [
            {itemname:"coffee",
            type:"drink",
            price:"120"
            },
            {
            itemname:"Icecream",
            type:"Food",
            price:"100"
            }
        ]
        this.orders=[];
       
    }
    addOrder(item){
        for (let i =0;i<=this.menu.length -1 ; i++){
        if (item == this.menu[i].itemname){
            this.orders.push(item);
            console.log(this.orders);
            break
        }
    }

    }
    fullfillOrder(item){
        if (this.orders.length >= 0){
            for (i=0;i<=this.orders.length - 1; i++){
             
                console.log(this.orders[i]+"is ready");
              
            }
            this.orders.pop(i);
        }
        else{
            return "All orders have been fullfiled"
        }
    }
    listOrder(){
        return this.orders;
    }
    dueamount(){
        var sum=0;
        for (i=0;i<=this.orders.length-1;i++){
            if (this.orders[i] == this.menu[i].itemname){
                sum= sum + parseInt(this.menu[i].price);
                console.log(this.orders[i]);
                console.log(this.menu[i].itemname);

            }
    }
    console.log(sum);   
}
   cheapestItem(){
        for (let i = 0; i < this.menu.length-1;i++){
            console.log(this.menu[i].price);
            if (this.menu[i].price < this.menu[i+1].price){
                console.log(this.menu[i].itemname)
               var  cheap = this.menu[i].itemname;
            }
        }
        console.log(cheap);
   }
   drinksonly(){
    var array = []
    for (let i = 0; i<= this.menu.length -1 ; i++){
        if (this.menu[i].type == "drink"){
            array.push(this.menu[i].itemname)
        }
    }
    console.log(array);
   }
   foodonly(){
    var array = []
    for (let i = 0; i<= this.menu.length -1 ; i++){
        if (this.menu[i].type == "Food"){
            array.push(this.menu[i].itemname)
        }
    }
    console.log(array);
   }
    
}








