const cart = require("./cart");
const cars = require("./data/cars");

describe("Cart Properties:",()=>{
    afterEach(()=>{
       test("cart should be []",()=>{
           expect(Array.isArray(cart.cart)).toEqual(0)
       });
       test("total should equal 0",()=>{
           expect(cart.total).toEqual(0)
       })    
    })
});

describe("Cart Methods:",()=>{
    afterEach(()=>{
        cart.cart = [];
        cart.total = 0;
    });

    test("addToCart should increment by 1 on call",()=>{
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    })
    test("addToCart() should add increase total by price on each call",()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        expect(cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price);
    });
    test("removeFromCart should decrease cart length by 1 ",()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2])
    });
    test("removeFromCart should reduce total",()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(0,cars[0].price);
        cart.removeFromCart(1,cars[2].price);
        
        expect(cart.total).toEqual(cars[8].price)
    });
    test("checkout should reset total to 0 and be an empty array",()=>{
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
        cart.addToCart( cars[3] );

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    });
    
});