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