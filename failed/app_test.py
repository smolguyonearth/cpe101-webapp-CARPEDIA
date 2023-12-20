import tensorflow as tf
from flask import Flask, render_template, request
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)

model = tf.keras.models.load_model('model.keras')

def predict():
    # imagefile = request.files['imagefile']
    image_path = 'images\\00392.jpg'
    # "./images/" + imagefile.filename
    # imagefile.save(image_path)

    image = load_img(image_path, target_size=(224, 224))
    image = img_to_array(image)
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
    # image = preprocess_input(image)
    
    yhat = model.predict(image)
    # label = decode_predictions(yhat)
    global label
    label = yhat
    # label = label[0][0]
    # classification = '%s (%.2f%%)' % (label[1], label[2] * 100)

    # return render_template('index.html', prediction=classification)
    # print(classification)
    # print(label)
    
import tensorflow as tf

train_ds = tf.keras.utils.image_dataset_from_directory(
    r"C:\Users\poyni\Desktop\AI\picture\mixed")

class_names = train_ds.class_names
num_classes = len(class_names)
# print("Class Names:", class_names)

# Create a dictionary mapping class indices to class names
class_names_dict = {i: class_name for i, class_name in enumerate(class_names)}
# print("Class Names Dictionary:", class_names_dict)

predict()

print(class_names[np.argmax(label)])