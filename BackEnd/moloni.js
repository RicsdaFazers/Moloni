// ligação ao servidor moloni

// import moloni lib
var Moloni=require('moloni');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

//geting start
var moloni=new Moloni({
	client_id: 'jorge2001',
	client_secret: '9e6444509e1c44ecf00bf900f4c4d37989c7cc7a',
	username: 'jorgem2001@gmail.com',
	password: 'apostanaformacao',
	sandbox: true
});

// Make an API call
moloni.users('getMe', function (error, result) {
	if (error)
		return console.error(error);

	console.log(result);
});