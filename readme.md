<h1><b>App is Live at https://node-3collections-api-v1.herokuapp.com/</b></h1>

Step 1: Creat your project folder and cd to it.
Step 1.1: Clone repository by git clone "link"
Step 1.2: run npm install --save

step 2: create .env file in root dir ( for environment variables) and define
<br>ATLAS_URI="enter your mongo db database uri"

step 5: run nodemon start dev

<h4>If enery things get executed okay then your console should look like this</h4><br>
<img src="https://github.com/saurabh-kumar88/node-3collections-api-v1/blob/main/docs/dev%20server%20running.png">

<h1>API endpoints description</h1>

1. POST http://localhost:3000/api/v1/users/add

   <br>
   description : create new user

   <br>
   body = {
   name : "name",
   email : "email",
   bio : "bio",
   profilePic : BLOB
   }
    <br>
   response : "Done"

2. GET http://localhost:3000/api/v1/users/list-all-users
   <br>
   description : list all users from user collection
   <br>
   response : Application/json

3. GET http://localhost:3000/api/v1/users/get-user?user_Id=userid
   <br>
   description : get user profile by its id
   <br>
   variable : user_Id
   <br>
   response : "Application/json"

4. POST http://localhost:3000/api/v1/users/products/add
   <br>
   description : add new product under user

   <br>
   body = {
   user_Id : "user id",
   name : "roto360",
   mrp : "2500",
   description : "RC drone helicopter",
   image : BLOB
   }
   <br>
   response : "Done"

5. PUT http://localhost:3000/api/v1/users/products/update
   <br>
   description : update product by user id

   <br>
   body = {
   user_Id : "user id",
   name : "roto720"
   }
   <br>
   note: Add any other feild you want to update
   <br>
   response : "Done"

6. DELETE http://localhost:3000/api/v1/users/products/delete
   <br>
   description : delete product by user id, and product id
   <br>
   body = {
   user_Id : "user id",
   product_Id : "product id"
   }
   <br>
   variales : user_Id, product_Id

   <br>
   response : "Done"

7. POST http://localhost:3000/api/v1/users/products/list-all
   <br>
   description : get list of all products of particular user by its id
   <br>
   body = {
   user_Id : "user id",
   }
   <br>
   variale : user_Id
   <br>
   response : Appliation/json

8. POST http://localhost:3000/api/v1/users/products/get-product
   <br>
   description : get info about single product by user id and product id
   <br>
   body = {
   user_Id : "user id",
   product_Id : "product id"
   }
   <br>
   variales : user_Id, product_Id
   <br>
   response : Application/json

9. POST http://localhost:3000/api/v1/users/business/add
   <br>
   description : add new business under user
   <br>
   body = {
   user_Id : "user id",
   name : "e-commerse",
   email : "xyz@gmail.com",
   registrationNo: "454546"
   }
   <br>
   response : Application/json

10. POST http://localhost:3000/api/v1/users/business/get-business
    <br>
    description : get info about singe business by user is and business id
    <br>
    body = {
    user_Id : "user id",
    business_Id : "business id"
    }

<br>
response : Application/json

11. POST http://localhost:3000/api/v1/users/business/list-all
    <br>
    description : list all businesses under particular user using user id
    <br>
    body = {
    user_Id : "user id",
    }
    <br>
    response : Application/json

12. POST http://localhost:3000/api/v1/users/business/products/add
    <br>
    description : create product under business collection
    <br>
    body = {
    user_Id : "user id",
    business_Id: "business id",
    name : "Bosch500",
    mrp : "3000",
    description : "hand drill for home use"
    image : BLOB
    }
    <br>
    response : "Done"

13. PUT http://localhost:3000/api/v1/users/business/products/update
    <br>
    description : update the product under business by providing user id, business id, & product id
    <br>
    body = {
    user_Id : "user id",
    busiess_Id : "business id",
    "product_Id" : "product id"
    name : "e-commerse",
    email : "xyz@gmail.com",
    registrationNo: "454546"
    }
    <br>
    response : "Done"

14. DELETE http://localhost:3000/api/v1/users/business/products/delete
    <br>
    description : delete a specific product under business by providing user id, business id, & its product id
    <br>
    body = {
    user_Id : "user id",
    busiess_Id : "business id",
    product_Id : "product id"

    }
    <br>
    response : "Done"

15. POST http://localhost:3000/api/v1/users/business/products/list-all
    <br>
    description : list all products under business by providing user id, business id
    <br>
    body = {
    user_Id : "user id",
    busiess_Id : "business id",
    }
    <br>
    response : Application/json"
