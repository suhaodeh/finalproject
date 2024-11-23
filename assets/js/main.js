

/**our menu */
var dishes = [
  {
      name:'Chiken Burger' ,price:'30SR', image:"./assets/images/menu/our-dishes/cheken-burger.jpg",discription:'Chicken burger with a piece of cheese and salad'
  },
  {
      name:'Meat Burger ',price:'35SR', image:"./assets/images/menu/our-dishes/meat-burger.jpg",discription:'meat burger with a piece of cheese and salad'
  },
  {
      name:'Maregrita Pizza',price:'30SR', image:"./assets/images/menu/our-dishes/margherita-pizza.jpg",discription:'pizza with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra virgin olive oil'
  }
  ,
  {
      name:'Vigitables pizza ',price:'30SR', image:"./assets/images/menu/our-dishes/vigi-pizza.jpeg",discription:'pizza with vigitables ,chees and Marzano tomatoes '
  },
  {
      name:'Smokey Salmon ',price:'60SR', image:"./assets/images/menu/our-dishes/salmon.jpg",discription:'fresh salmon with vigitables and lemon'
  }
  
  
  
  ]
  var data= dishes.map(function(dish){
      return`
      <div class="d-s">
      
      <div> <img src='./${dish.image}'> </div>
      <div class="name">
      <p>${dish.name}</p>
   <span>${dish.price}</span>
  </div>
    <div>  <p>${dish.discription}</p>
      </div>
      </div>
      `
  } ).join(' ');
  console.log(data);
  document.querySelector(".dish-s").innerHTML+=data;




  var dishesend = [
    {
        name:'Cordonblu' ,price:'40SR', image:"./assets/images/menu/our-dishes/cordonblu_n.jpg",discription:'fresh Chicken filled with motzarila chees'
    },
    {
        name:'Shrimp-Pasta ',price:'35SR', image:"./assets/images/menu/our-dishes/shrimp-pasta.jpg",discription:'Pasta cooked with fresh shrimp and special sous'
    },
    {
        name:'Smookey Steak',price:'30SR', image:"./assets/images/menu/our-dishes/steak.jpeg",discription:'fresh smokey steak withdifferent vigitables and three yammy special sous'
    }
    ,
    {
        name:' Alfraido-fotochini ',price:'30SR', image:"./assets/images/menu/our-dishes/fotochini.jpg",discription:'patsa cooked with fresh chiken and fresh mashroom with white sous '
    },
    {
        name:'Fahita Sandwich ',price:'60SR', image:"./assets/images/menu/our-dishes/fahita.jpg",discription:'chiken with vigitables '
    }
    
    
    
    ]
    var datae = dishesend.map(function(dishend){
        return`<div class="d-e">
        <div> <img src='./${dishend.image}'> </div>
        <div class="name2">
        <p>${dishend.name}</p>
     <span>${dishend.price}</span>
    </div>
      <div>  <p>${dishend.discription}</p>
        </div>
        </div>
        `
    } ).join(' ');
    
    document.querySelector(".dish-e").innerHTML+=datae;




    var coffeelistsS = [
      {
          name:'Turkish Coffee' ,price:'10SR', image:"./assets/images/menu/our-coffee/turkish-coffe.jpg"
      },
      {
          name:'Hot Latte',price:'17SR', image:"./assets/images/menu/our-coffee/hot-latte.jpg"
      },
      {
          name:'Cappuchino',price:'17SR', image:"./assets/images/menu/our-coffee/cappucino.jpg"
      }
      ,
      {
          name:' Hot Spanish Lattee ',price:'30SR', image:"./assets/images/menu/our-coffee/hotspanish-lattejpg.jpg"
      },
      {
          name:'American Coffee ',price:'12SR', image:"./assets/images/menu/our-coffee/american-coffe.jpg"
      }
      
      
      
      ]
      var datac = coffeelistsS.map(function(coffeelist1){
          return`
          <div class="cofe-s">
          <div> <img src='./${coffeelist1.image}'> </div>
          <div class="nameco">
          <h2>${coffeelist1.name}</h2>
       <span>${coffeelist1.price}</span>
      </div>
        
          </div>
          `
      } ).join(' ');
      
      document.querySelector(".coffee-s").innerHTML= datac;


      var coffeelistsE = [
        {
            name:'Fraputtcino' ,price:'25SR', image:"./assets/images/menu/our-coffee/fraputtcino.jpg"
        },
        {
            name:'Iced-Latte',price:'23SR', image:"./assets/images/menu/our-coffee/iced-latte.png"
        },
        {
            name:'Iced-Moch',price:'22SR', image:"./assets/images/menu/our-coffee/iced-moch.jpg"
        }
        ,
        {
            name:' Iced Spanish Lattee ',price:'27SR', image:"./assets/images/menu/our-coffee/IcedSpanishLatte_1080x.png"
        },
        {
            name:' Iced American  ',price:'25SR', image:"./assets/images/menu/our-coffee/ICE-amricano.jpg"
        }
        
        
        
        ]
        var datae = coffeelistsE.map(function(coffeelistE1){
            return`
            <div class="cofe-e">
            <div> <img src='./${coffeelistE1.image}'> </div>
            <div class="nameco-e">
            <h2>${coffeelistE1.name}</h2>
         <span>${coffeelistE1.price}</span>
        </div>
          
            </div>
            `
        } ).join(' ');
        
        document.querySelector(".coffee-e").innerHTML= datae;


        var dessertsS = [
          {
              name:' Bllubarrey' ,price:'22SR', image:"./assets/images/menu/our-dessert/sweet3.jpeg"
          },
          {
              name:' Mini Brawnees',price:'20SR', image:"./assets/images/menu/our-dessert/sweet5.jpg"
          },
          {
              name:'Pac Cacke',price:'22SR', image:"./assets/images/menu/our-dessert/sweet1.jpeg"
          }
          ,
          {
              name:'Sansabastian Cacke  ',price:'30SR', image:"./assets/images/menu/our-dessert/sweet6.jpg"
          },
          {
              name:'Waffel Stick ',price:'18SR', image:"./assets/images/menu/our-dessert/sweet8.jpg"
          }
          
          
          
          ]
          var sweetS = dessertsS.map(function(dessertS){
              return`<div class="sweetStart">
              <div> <img src='./${dessertS.image}'> </div>
              <div class="sweetname">
              <p>${dessertS.name}</p>
           <span>${dessertS.price}</span>
          </div>
          
              </div>
              `
          } ).join(' ');
          
          document.querySelector(".sweets-s").innerHTML+=sweetS;
      

          var dessertsE = [
            {
                name:'LAFA Cake' ,price:'22SR', image:"./assets/images/menu/our-dessert/lafacake.jpg"
            },
            {
                name:'French Toast',price:'20SR', image:"./assets/images/menu/our-dessert/frenchtoast4.jpg"
            },
            {
                name:'Oreo Cake',price:'24SR', image:"./assets/images/menu/our-dessert/oreocake.jpg"
            },
            {
                name:'Waffel ',price:'30SR', image:"./assets/images/menu/our-dessert/sweet4.jpg"
            },
            {
                name:'Date cake ',price:'25SR', image:"./assets/images/menu/our-dessert/sweet7.jpg"
            }
            
            
            
            ]
            var sweetE = dessertsE.map(function(dessertE){
                return`<div class="sweetSend">
                <div> <img src='./${dessertE.image}'> </div>
                <div class="sweetname">
                <p>${dessertE.name}</p>
             <span>${dessertE.price}</span>
            </div>
            
                </div>
                `
            } ).join(' ');
            
            document.querySelector(".sweets-e").innerHTML+=sweetE;
        