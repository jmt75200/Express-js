var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static('public/'));

app.set('view engine', 'jade');

app.get('/wizard/new', function (req, res){
  res.render('new_wizard');
});

app.get('/jade', function (req,res){
  var book = [
    {
      author: "Dr.Seuss", 
      title: "Oh the Places You'll Go"
    },
    {
      author: "J.R.R. Tolkien", 
      title: "Lord of the Rings"
    },
    {
      author: "Stephen Colbert", 
      title: "I am America, and so can you!"
    },
  ];
  res.render( 'index', {
    title: 'Hey',
    message: 'HeyO!',
    books : book
  });
  // var hat = req.query.hat;
  // res.send('Nice Hat ' + hat);
  // res.send('Hello Harry Wizard');
});

app.get('/rpg', function (req, res){
  var local = {
    books : [
      {
        title : "Algorithms, 4th Edition",
        author : "Robert Sedgewick and Kevin Wayne"
      },
      {
        title : "Elementary Algorithms",
        author : "Larry LIU Xinyu"
      },
      {
        title : "The Art of Computer Programming (fascicles, mostly volume 4)",
        author : "Donald Knuth"
      },
      {
        title : "Algorithms and Automatic computing Machines (1963)",
        author : "B. A. Trakhtenbrot"
      }
    ],

    warriors : [
      "Justin the Warrior",
      "Jackie the Paladin",
      "Jesse the Warlock",
      "Joelle the Archer",
      "Jonathan the Mage"
    ]
  };
  res.render( 'rpg', local);
});

app.get('/pokemon', function (req, res){
  res.render('pokemon');
});

app.get('/pikachu', function (req, res){
  res.render('pikachu');
});

app.get('/cute_pikachu', function (req, res){
  res.render('cute_pikachu');
});

app.get('/wizard/:name', function(req, res){
  res.send("Hello " + req.params.name + "you're a wizard");
});

//accept POST request on the homepage
app.post('/wizard', function(req, res){
  var sorcerer = req.body.sorcerer;
  var color = req.body.color;
  console.log(req.body);
  res.send("Hello " + sorcerer + " You're a " + color + " " + "sorcerer");
});

//accept PUT request
app.put('/wizard', function(req,res){
  res.send('Gota Put Harry wizard');
});

//accept Delete request
app.delete('/wizard', function(req, res){
  res.send('Gota Delete Harry wizard');
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at htt:..%s:%s', host, port);
});
