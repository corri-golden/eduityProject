const app = Vue.createApp({
    data() {
      return {
        amount: 0,
        soldout: 'Sold Out',
        selection: '',
        msg: '',
        sodaCans: ["pepsi", "coke", "sprite", "dr.pepper"],
        sodas: ["pepsi", "coke", "sprite"],
        selected: '',
        products: [
            {
                id: 1,
                name: 'pepsi',
                quantity: 2
            },
            {
                id: 2,
                name: 'coke',
                quantity: 8
            },
            {
              id: 3,
              name: 'sprite',
              quantity: 8
          }
        ],
      };
    },
    methods: {
        setName(event){
            // console.log(event.target.value)
            // this.products.forEach((product)=>console.log(product.id,product.name));
            // users.forEach((user)=>console.log(user.id,user.name));
            this.products.forEach((product)=>console.log(product.id,product.name));

            
            
            
            
            
            
            
            // value = event.target.value
            // console.log(this.products[value])
            // this.products.forEach((product)=>
            //     if ( this.product + [value] === this.product[i] )
            // );
            // for (let i = 0; i < this.products.length; i++){
            //     if (this.products[value] === this.products){
            //         console.log("we have a match")
            //     } 
            // }
            
            
            
        },
        insert(num) {
            this.amount = this.amount + num;
        },
        reject(num) {
            this.amount = this.amount - num;
        },
        buy(id) {
          this.products.forEach((product)=>{
              if (product.id === id )
              {
                  product.quantity -= 1
                  this.amount = this.amount - 1
                  console.log(product.quantity)
                  if (product.quantity < 1)
              {
                  this.msg = "Sold out"
                  product.name = "sold out"
                  console.log("sold out")
              }
              //     if (this.amount === 0)
              // {
              //     console.log(this.amount)
              //     this.msg = "Please enter a quarter"
              //     console.log("enter quarter")
              // }
              } 

          }
          
          );
 
          
          
          // current = this.products[0].quantity - 1
          //  console.log(id)
          //  product = this.products[id]
          //  console.log(product)
          //  qty = product.quantity
          //  console.log(qty)

          //  qty = qty - 1 
          //  console.log(qty)



          //  product = getProduct(id);
          // qty = this.products.quantity - 1;
          //  console.log(qty)
          //  console.log(id)
        }
        // selection() {

        // }
        
        // setName(event){
        //     this.name = event.target.value;
        // },
        // add(num) {
        //     this.counter + num;
        // },
        // remove() {
        //     this.counter--
        // },
        // test() {
            
        // }
    }
  });
  
  app.mount('#events');