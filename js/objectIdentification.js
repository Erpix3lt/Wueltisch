  // Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
    // available on the index-page because of the script tag above.
  
    const img = document.getElementById('flying');
    document.getElementById('result').innerHTML = '[loading]';
    // Load the model.
    cocoSsd.load().then(model => {
      // detect objects in the image.
      model.detect(img).then(predictions => {
        document.getElementById('result').innerHTML = predictions.map(a => a.class) + getShortenedScore(predictions);
      });
    });

    function getShortenedScore(predictions){
      let scoreArray = predictions.map(b => b.score);
      //(6.688689).toFixed(3);
      let shortenedScoreArray = scoreArray.map(function(element){
        return element.toFixed(4);
      });

      return shortenedScoreArray;
    }