// scripts.js

const currentUser = 'You';

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

      const predictionText = response.prediction == 1 ? 'Spam' : 'Not a Spam (It is a Ham)';
      $('#chatList').append(`<li class="user" id="${currentUser}">${currentUser}: <br> ${message}</li>`);
      $('#chatList').append(`<li class="bot">Bot: <br>${predictionText}</li>`);
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

  var resultText = (prediction == 1) ? 'Spam' : 'Not a Spam (It is a Ham)';

  resultContainer.append('<h2 style="color: ' + (prediction == 1 ? 'red' : 'blue') + ';">' + resultText + '</h2>');
}