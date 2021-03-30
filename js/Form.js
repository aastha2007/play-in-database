class Form {
  constructor() {
    
  }
  /*
HTML is used to create any content like a form on a page. HTML is similar to markdown in some ways.
  An HTML contains elements which define the structure of a page.
  . A simple html page contains:
- head: where all the scripts and stylesheets for the page is added.
- body: where all the content of the page is added.
The body of an HTML page can contain several different types of elements:
- h1, h2, h3: display headings of different sizes
- input: to collect input from the user.
- button: to display a button.
This model of an HTML page is called Document object Model (or DOM).
  */ 

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
