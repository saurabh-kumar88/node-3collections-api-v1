Step 1: Clone repository by git clone "repo name"

Step 2: got to prject dir
run npm init

Step 3: run npm install --save

step 4: got to .env file
enter your mongo db database uri

step 5: run nodemon start dev

step 6: API endpoints description

1. POST http://localhost:3000/api/v1/users/add

   description : create new user

   body = {
   name : "name",
   email : "email",
   bio : "bio",
   profilePic : BLOB
   }

   response : "Done"

2. GET http://localhost:3000/api/v1/users/list-all-users
   description : list all users from user collection

   response : Application/json

3. GET http://localhost:3000/api/v1/users/get-user?user_Id=userid
   description : get user profile by its id
   variable : user_Id

   response : "Application/json"

4. POST http://localhost:3000/api/v1/users/products/add
   description : add new product under user

   body = {
   user_Id : "user id",
   name : "roto360",
   mrp : "2500",
   description : "RC drone helicopter",
   image : BLOB
   }
   response : "Done"

5. PUT http://localhost:3000/api/v1/users/products/update
   description : update product by user id

   body = {
   user_Id : "user id",
   name : "roto720"
   }
   note: add any other feilds to update you want to update
   response : "Done"

6. DELETE http://localhost:3000/api/v1/users/products/delete
   description : delete product by user id
   body = {
   user_Id : "user id"
   }
   variale : user_Id
   response : "Done"

7. POST http://localhost:3000/api/v1/users/products/list-all
   description : get list of all products of particular user by its id

   body = {
   user_Id : "user id",
   }

   variale : user_Id
   response : Appliation/json

8. POST http://localhost:3000/api/v1/users/products/get-product
   description : get info about single product by user id and product id

   body = {
   user_Id : "user id",
   product_Id : "product id"
   }
   variales : user_Id, product_Id
   response : Application/json

9. POST http://localhost:3000/api/v1/users/business/add
   description : add new business under user

   body = {
   user_Id : "user id",
   name : "e-commerse",
   email : "xyz@gmail.com",
   registrationNo: "454546"
   }

   response : Application/json

10. POST http://localhost:3000/api/v1/users/business/get-business
    description : get info about singe business by user is and business id

body = {
user_Id : "user id",
business_Id : "business id"
}

response : Application/json

11. POST http://localhost:3000/api/v1/users/business/list-all
    description : list all businesses under particular user using user id

body = {
user_Id : "user id",
}

response : Application/json

12. POST http://localhost:3000/api/v1/users/business/products/add
    description : create product under business collection

body = {
user_Id : "user id",
business_Id: "business id",
name : "Bosch500",
mrp : "3000",
description : "hand drill for home use"
image : BLOB
}

response : "Done"

13. PUT http://localhost:3000/api/v1/users/business/products/update
    description : update the product under business by providing user id, business id, & product id

body = {
user_Id : "user id",
busiess_Id : "business id",
"product_Id" : "product id"
name : "e-commerse",
email : "xyz@gmail.com",
registrationNo: "454546"
}

response : "Done"

13. DELETE http://localhost:3000/api/v1/users/business/products/delete
    description : delete a specific product under business by providing user id, business id, & its product id

body = {
user_Id : "user id",
busiess_Id : "business id",
product_Id : "product id"

}

response : "Done"

14. POST http://localhost:3000/api/v1/users/business/products/list-all
    description : list all products under business by providing user id, business id

body = {
user_Id : "user id",
busiess_Id : "business id",
}

response : Application/json"
