This is a Blog-pst API with node.js, express and mongodb.

The folder structure is pretty simple 

server.js - It is our main server which handle all the request and response.
Models folder - It have all the model schema of user and post
Route folder - It has all  route of user and post


<!-- CREATE USER  -->

route - localhost:5000/api/user (POST)

<!-- example -->
 <!-- INPUTS -->
// {
//     "userName": "stuart@123",
//     "password": "stuart",
//     "phone_no": 7488848209,
//     "email": "stuart@gmail.com",
//   }

        note : use form-encoded (as json returns err)


<!-- GET USER  -->

ROUTE - localhost:5000/api/user (GET)


USER WILL BE CREATED


<!-- Read all post -->

ROUTE - localhost:5000/api/post (get)

<!-- Create post -->

ROUTE - localhost:5000/api/post/<userid>(POST)


 <!-- INPUTS -->
// {
//     "title": "Route methods",
//     "desc": "Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.",
//     "img": "",
//   }


<!-- Update post -->

ROUTE - localhost:5000/api/post/<userid>(put)


<!-- Delete post -->

ROUTE - localhost:5000/api/post/<userid>(delete)

<!-- Fetch post by id -->

ROUTE - localhost:5000/api/post/spec/{:postId}(get)

<!-- Fetch post by userid -->

ROUTE - localhost:5000/api/post/mypost/{:userID}(get)



