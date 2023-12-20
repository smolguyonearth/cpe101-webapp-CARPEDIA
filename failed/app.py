import numpy as np
from flask import Flask, request, render_template, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions

app = Flask(__name__)

model = load_model('models/your_image_classification_model.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        if 'image' not in request.files:
            return jsonify({'prediction_text': 'No image file provided.'})

        file = request.files['image']

        if file.filename == '':
            return jsonify({'prediction_text': 'No selected image file.'})

        img = image.load_img(file, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)

        prediction = model.predict(img_array)
        decoded_predictions = decode_predictions(prediction)

        output = decoded_predictions[0][0][1]  # Get the predicted class label
        return jsonify({'prediction_text': 'Predicted Class: {}'.format(output)})
    else:
        return render_late('index.html')

if __name__ == "__main__":
    app.run(debug=True)
