from flask import Flask, render_template, request
from keras.models import load_model
from keras.preprocessing import image

app = Flask(__name__)

# dic = {0 : 'Cat', 1 : 'Dog'}
import tensorflow as tf

train_ds = tf.keras.utils.image_dataset_from_directory(
    r"C:\Users\poyni\Desktop\AI\picture\mixed")

class_names = train_ds.class_names
num_classes = len(class_names)
# print("Class Names:", class_names)

# Create a dictionary mapping class indices to class names
class_names_dict = {i: class_name for i, class_name in enumerate(class_names)}
# print("Class Names Dictionary:", class_names_dict)

dic = class_names_dict

model = load_model('models/weight.h5')

model.make_predict_function()

def predict_label(img_path):
	i = image.load_img(img_path, target_size=(100,100))
	i = image.img_to_array(i)/255.0
	i = i.reshape(1, 100,100,3)
	p = model.predict_classes(i)
	return dic[p[0]]


# routes
@app.route("/", methods=['GET', 'POST'])
def main():
	return render_template("template\index.html")

@app.route("/about")
def about_page():
	return "Please subscribe  Artificial Intelligence Hub..!!!"

@app.route("/submit", methods = ['GET', 'POST'])
# def get_output():
# 	if request.method == 'POST':
# 		img = request.files['my_image']

# 		img_path = "static/" + img.filename	
# 		img.save(img_path)

# 		p = predict_label(img_path)

# 	return render_template("template\index.html", prediction = p, img_path = img_path)
def get_output():
    if request.method == 'POST':
        img = request.files['my_image']
        img_path = "static/" + img.filename
        img.save(img_path)
        p = predict_label(img_path)
        return render_template("template\index.html", prediction=p, img_path=img_path)


if __name__ =='__main__':
	#app.debug = True
	app.run(debug = True)