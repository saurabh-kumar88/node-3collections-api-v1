Step 1: Clone repository by git clone "repo name"

Step 2: got to prject dir

Step 3: run npm install --save

step 4: go to .env file
enter your mongo db database uri

step 5: run nodemon start dev

step 6: API endpoints description

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
   note: add any other feilds to update you want to update
   <br>
   response : "Done"

6. DELETE http://localhost:3000/api/v1/users/products/delete
   <br>
   description : delete product by user id
   <br>
   body = {
   user_Id : "user id"
   }
   <br>
   variale : user_Id
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
