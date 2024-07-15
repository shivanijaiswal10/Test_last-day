describe('Cryptocurrency Wallet', () => {
    //create the base url 
    const baseurl="https://crypto-wallet-server.mock.beeceptor.com"; 
    it('Register a user, and create his/her wallet', () => {
        
        cy.request({
            //method is post
            method:'POST',
            //baseurl with Register a user, and create his/her wallet end points
            url:baseurl+"/api/v1/register",
            //body of username password emila
            body:{
                "username": "user123",
                "password": "securepassword",
                 "email": "user@example.com"
            },
            //headers of  required
            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            //status code of 
            expect(Response.status).to.eq(200);
            //get output 
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });

    it('Login the user and generate a session token', () => {
        
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/login",
            body:{
                "username": "user123",
                "password": "securepassword"
            },

            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('Retrieve the wallet balance', () => {
        cy.request({
            method:'GET',
            url:baseurl+"/api/v1/balance",
            headers:{
                "Content-Type":"application/json"}  
        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('List all the transactions done by the user', () => {
        cy.request({
            method:'GET',
            url:baseurl+"/api/v1/transactions",
            headers:{
                "Content-Type":"application/json"}  
        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('Transfer 5 ETH to a recipient', () => {
        
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/transactions",
            body:{
                "recipient_address": "0x1234567890ABCDEF",
                "amount": 5.0,
                "currency": "ETH"
            },

            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    
    it('Calculate transaction fees and return estimated cost', () => {
        
        cy.request({
            method:'POST',
            url:baseurl+"/api/v1/transaction_fee",
            body:{
                "amount": 2.5,
                 "currency": "BTC",
                "recipient_address": "0x1234567890ABCDEF"
            },

            headers:{
               "Content-Type": "application/json"
            }

        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    it('Get an object with all available currency exchange rates', () => {
        cy.request({
            method:'GET',
            url:baseurl+"/api/v1/exchange_rates",
            headers:{
                "Content-Type":"application/json"}  
        }).then((Response)=>{
            expect(Response.status).to.eq(200);
            const res = JSON.stringify(Response.body)
            cy.log(res)
        })
    });
    
    
});