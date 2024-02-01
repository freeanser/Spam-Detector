function predict() {
  var message = $('#messageInput').val();

  $.ajax({
    type: 'POST',
    url: '/predict',
    data: { 'message': message },
    beforeSend: function () {
      $('#loading').show();
    },
    success: function (response) {
      $('#loading').hide();
      displayResult(response.prediction);
    },
    error: function (error) {
      $('#loading').hide();
      console.log('Error:', error);
    }
  });
}

function displayResult(prediction) {
  var resultContainer = $('#resultContainer');
  resultContainer.empty();

  if (prediction == 1) {
    resultContainer.append('<h2 style="color: red;">Spam</h2>');
  } else {
    resultContainer.append('<h2 style="color: blue;">Not a Spam (It is a Ham)</h2>');
  }
}
