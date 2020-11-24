//const is just another let 
//we declare a constant variable called mongoose
//we set it equal to the return value of require('mongoose'); 
const mongoose = require('mongoose'); 

//access the connect method of the mongoose object
//pass in the localhost test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

//make another constant variable called db
//and we set it equal to the connection property of our mongoose object 
const db = mongoose.connection;

//but then we acces the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");

    /* schema  */
    const ingredientSchema = new mongoose.Schema({
        name :{
            type: String,
            required: true
        }, 
        measurement: {
            type: String,
            required: true
        }, 
        amount : {
            type:Number
            required: true
        }
    });

    const recipeSchema = new mongoose.Schema({
        name : {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        }, 
        instructions: {
            type: String,
            required: true
        }, 
        ingredients : [ingredientSchema]
    }); 


    /* model */ 
    const Recipe = mongoose.model('Recipe', recipeSchema); 

    /* documents */ 
    /* Recipe 1 */

    let hotTeaObj = {
        name : "Hot Tea", 
        description: "A hot tea to drink during cold winter",
        instructions: "Boil water in the gas ",
        ingredients : [ 
            { name : "Tea leaves",
            measurement: "oz", 
            amount : 5 },
            
            { name : "sugar",
            measurement: "tea spoon", 
            amount : 1.2 },

            { name : "water",
            measurement: "Cups", 
            amount : 1
            }
        ]
    };

    let hotTea = new Recipe(hotTeaObj);
    
  /* Recipe 2 */
    
    let mamaSoupObj = {
        name : "Chicken Soup", 
        description: "Soup made by mama",
        instructions: "Ask mama to make chicken soup",
        ingredients : [ 
            { name : "Chicken",
            measurement: "oz", 
            amount : 5 },
            
            { name : "Onions",
            measurement: "Cups", 
            amount : 5.5 },

            { name : "garlic",
            measurement: "Cups", 
            amount : 1.5
            }
        ]
    };

    let mamaSoup = new Recipe(mamaSoupObj);
    
    
    
    let silence = new Kitten({ name : "Silence" }); 
    silence.speak(); 
    silence.name = "Loud";





    let dal = new Recipe({ name : "lental" }); 
     
    lental.name = "dal soup";
    leantal.measurement = "Cups";
    lental.amount ="1"

   

    /* how to save a document after it's been created/updated */ 
    fluffy.save(function(err, fluffy){
        if(err) return console.error(err); 
        fluffy.speak(); 
    });

    leantal.save(function(err, soup){
        if(err) return console.error(err);
        soup.recipeSchema(); 
    })
    

});



