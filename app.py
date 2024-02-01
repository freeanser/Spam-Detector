from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO

import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template('home_with_chat.html')  # 修改為包含聊天框的 HTML

@app.route('/predict', methods=['POST'])
def predict():
    df = pd.read_csv('spam.csv', encoding="latin-1")
    df = df[['v1', 'v2']]
    df.rename(columns={'v2': 'message'}, inplace=True)
    df['label'] = df['v1'].map({'ham': 0, 'spam': 1})
    
    X = df['message']
    y = df['label']

    cv = CountVectorizer()
    X = cv.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

    clf = MultinomialNB()
    clf.fit(X_train, y_train)

    if request.method == 'POST':
        message = request.form['message']
        data = [message]
        vect = cv.transform(data).toarray()
        my_prediction = clf.predict(vect)

        socketio.emit('response', {'prediction': int(my_prediction[0])})  # 使用 SocketIO 發送預測結果

        return jsonify({'prediction': int(my_prediction[0])})

if __name__ == '__main__':
    socketio.run(app, debug=True)
