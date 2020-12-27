  // Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
    // available on the index-page because of the script tag above.
  
    const img = document.getElementById('flying');
    document.getElementById('result').innerHTML = 'loading';
    // Load the model.
    cocoSsd.load().then(model => {
      // detect objects in the image.
      model.detect(img).then(predictions => {
        console.log('Predictions: ', predictions);
        let result = predictions[0].class;
        document.getElementById('result').innerHTML = result;
      });
    });