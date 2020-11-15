const app = Vue.createApp({
    data() {
      return {
        amount: 0,
        isDisable: false,
        soldout: 'Sold Out',
        dispense: "",
        msg: '',
        products: [
            {
                id: 1,
                name: 'Pepsi',
                quantity: 9
            },
            {
                id: 2,
                name: 'Coke',
                quantity: 8
            },
            {
              id: 3,
              name: 'Sprite',
              quantity: 8
            },
            {
              id: 4,
              name: 'Crush',
              quantity: 9
            }
        ],
      };
    },
    methods: {
        // method to add a quarter 
        insert(num) {
            this.amount = this.amount + num;
        },
        // method to subtract a quarter
        reject(num) {
            this.amount = this.amount - num;
        },
        buy(id) {
        // method to purchase a soda
            this.products.forEach((product)=>{
              // condition to test if a quarter has been inserted
              if (this.amount === 0)
              {
                this.msg = "Please enter a quarter"
                this.dispense = ""
              } else {
              if (product.id === id) {
                  product.quantity -= 1
                  this.amount = this.amount - 1
                  this.dispense = product.name
                  this.msg = "Your Selection is Below"
                  console.log(this.dispense)
                  // nested conditional to test where sodas are in stock
                  if (product.quantity < 1) 
                  {
                    product.name = "Sold out"
                  }
                }
              }
            }
          );          
        }
    }
  });
  app.mount('#events');