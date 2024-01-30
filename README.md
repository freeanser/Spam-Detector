# Spam Detector for SMS Messages with Flask

This project implements a simple web application using Flask for detecting spam in SMS messages. The spam detection model is trained using a Naive Bayes classifier. The project includes a Jupyter notebook (`model_training.ipynb`) for model training, as well as the necessary HTML templates (`home.html` and `result.html`) and a Flask application (`app.py`) for deployment.

## Files and Usage

### 1. `model_training.ipynb`

- This Jupyter notebook covers the process of training the spam detection model.
- It utilizes the `pandas` library for data manipulation, `CountVectorizer` for feature extraction, and `MultinomialNB` for the Naive Bayes classifier.
- The trained model is saved using the `joblib` library.

### 2. `style.css`

- This CSS file (`style.css`) contains styling rules for the web application's interface.
- It defines styles for the header, buttons, and result display.

### 3. `home.html`

- The HTML template for the home page.
- Users can input an SMS message for spam detection using a form.
- The form sends a POST request to the Flask server for prediction.

### 4. `result.html`

- The HTML template for displaying the prediction results.
- It shows whether the input message is classified as spam or not.

### 5. `app.py`

- The Flask application that serves as the backend for the web application.
- It uses the trained Naive Bayes model to predict whether a given SMS message is spam or not.
- The main routes include:
  - `/`: Renders the home page.
  - `/predict`: Handles the POST request for predicting spam in the entered message.

## Setup and Dependencies

- Make sure to have `conda` installed for managing dependencies.
- Install the required dependencies using the following command:
  ```
  conda install pandas scikit-learn joblib flask
  ```

## Running the Application

1. Navigate to the project directory.
2. Run the Flask application using the following command:
   ```
   python3 app.py
   ```
3. Open your web browser and go to `http://127.0.0.1:5000/` to access the home page.
4. Enter an SMS message and click the "Predict" button to see the spam detection results.

Feel free to customize the application, improve the model, or enhance the user interface based on your requirements.