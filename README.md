# Flappy bird
Another POC (Proof Of Concept) on ReactJS inspired by the famous game [Flappy bird](https://en.wikipedia.org/wiki/Flappy_Bird). Click [here](https://flappy-bird-react.netlify.app/) to play!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You’ll need to have Node >= 6 on your machine and a modern web browser. 

### Installing

First install [Node](https://nodejs.org/en/download/).
After installation check the version of ```npm``` (run the following command in the terminal):
```
npm -v
```
If you have ```npm``` 5.2.0+ installed, you may use npx:
```
npx create-react-app flappy_bird

cd flappy_bird
```
else run the command : 
```
npm install -g create-react-app

create-react-app flappy_bird

cd flappy_bird
```
Create React App is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses build tools like Babel and webpack under the hood, but works with zero configuration.

Now install one more package ```jquery```:
```
npm install jquery
```
After installation replace the ```src``` and ```public``` directories of the ```tiles``` app just created with the ```src``` and ```public``` directories of this repository that you have cloned on your personal machine.

That's all run the following command and enjoy! 
```
npm start
```

### Folder Structure

After creation, your project should look like this:

```
flappy_bird/
  README.md
  node_modules
  LICENSE
  package.json
  CONTRIBUTING.md
  public/
    index.html
    bird.png
    flappy.png
    manifest.json
  src/
    components/
      App.js
      Bird.js
      GameOver.js
      Pillars.js
      Score.js
      StartScreen.js
    containers/
      AppContainer.js
      BirdContainer.js
      PillarContainer.js
    css/
      bird.css
      gameOver.css
      main.css    
      score.css
      startScreen.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories.

## Built With

* [ReactJS](https://reactjs.org/) - JavaScript library used for UI
* [jQuery](https://jquery.com/) - JavaScript library used for animations
* [ECMASCRIPT 6](http://es6-features.org/#Constants) - Standard used to write Javascript code
* [Babel](https://babeljs.io/) - Transpiler used

## Screenshots
![startscreen](https://user-images.githubusercontent.com/9201182/39676364-38245bd0-5187-11e8-9f7e-6b1f7cde11e7.jpg)


![flappybird](https://user-images.githubusercontent.com/9201182/39676370-48086e06-5187-11e8-9ddb-f025d306423d.jpg)


![gameover](https://user-images.githubusercontent.com/9201182/39676372-54f65722-5187-11e8-9bd8-9cfa6f6a2ec9.jpg)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/prateekmishra-95/flappy_bird/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Prateek Mishra** - [prateekmishra-95](https://github.com/prateekmishra-95)

## License

This project is licensed under the Apache License - see the [LICENSE.md](https://github.com/prateekmishra-95/flappy_bird/blob/master/LICENSE.md) file for details.
