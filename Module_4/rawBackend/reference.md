### two methods how next works 


###  1  .post(bodyChecker, isAuthenticated, isAuthorized, createUser);

###  2.
// app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("inside first post", body);
//     next();
//       })

//     app.use(function (req, res, next) {
//     console.log("inside app.use",)
//     next();
//     })

//     app.get("/", function (req, res) {
//     res.send({message:content})
//     })
//      app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("inside second post", body);
//     next();
//       })



#       Output :- 



//       server started
// inside first post { name: 'Aksh', age: '22' }
// inside app.use
// inside second post { name: 'Aksh', age: '22' }


// Added thoery related to jwt 
WHEN SHOULD YOU USE JSON WEB TOKENS?
These are some scenarios where JSON Web Tokens are useful:

Authentication: This is the typical scenario for using JWT, once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used among systems of different domains.
Information Exchange: JWTs are a good way of securely transmitting information between parties, because as they can be signed, for example using a public/private key pair, you can be sure that the sender is who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn’t changed.

