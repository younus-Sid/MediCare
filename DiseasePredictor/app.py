from flask import Flask, request, render_template
import pandas as pd
import numpy as np
import pickle
import locale
import statistics
from sklearn.preprocessing import LabelEncoder


app = Flask(__name__)
locale.setlocale(locale.LC_MONETARY, 'en_IN')

# Loading all the locations in various cities
data = pd.read_csv("Resources/Training.csv")
encoder = LabelEncoder()

# Loading all the trained models
model_rf = pickle.load(open("Resources/TrainedModel_RandomForest.pkl", "rb"))
model_nb = pickle.load(open("Resources/TrainedModel_NaiveBayes.pkl", "rb"))
model_svm = pickle.load(open("Resources/TrainedModel_SVM.pkl", "rb"))

data["prognosis"] = encoder.fit_transform(data["prognosis"])
all_symptoms = data.columns.values[:-2]
for index in range(len(all_symptoms)):
    all_symptoms[index] = " ".join([i.capitalize() for i in all_symptoms[index].split("_")])

@app.route('/')
def index():
    sorted_symptoms = sorted(all_symptoms)
    return render_template("index.html", allSymptoms=sorted_symptoms)

@app.route('/predict', methods=['POST'])
def predict():
    # 4 symptoms are taken
    symp1 = request.form.get("symp1")
    symp2 = request.form.get("symp2")
    symp3 = request.form.get("symp3")
    symp4 = request.form.get("symp4")

    # Creating a symptom index dictionary to encode the
    # input symptoms into numerical form
    symptom_index = {}
    for index, symptom in enumerate(all_symptoms):
        symptom_index[symptom] = index

    data_dict = {
        "symptom_index": symptom_index,
        "predictions_classes": encoder.classes_
    }
    user_symptoms = [symp1, symp2, symp3, symp4]
     
    # creating input data for the models
    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in user_symptoms:
        index = data_dict["symptom_index"][symptom]
        input_data[index] = 1
         
    # reshaping the input data and converting it
    # into suitable format for model predictions
    input_data = np.array(input_data).reshape(1,-1)
     
    # generating individual outputs
    rf_prediction = data_dict["predictions_classes"][model_rf.predict(input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][model_nb.predict(input_data)[0]]
    svm_prediction = data_dict["predictions_classes"][model_svm.predict(input_data)[0]]
     
    # making final prediction by taking mode of all predictions
    final_prediction = statistics.mode([rf_prediction, nb_prediction, svm_prediction])
    predictions = {
        "rf_model_prediction": rf_prediction,
        "naive_bayes_prediction": nb_prediction,
        "svm_model_prediction": svm_prediction,
        "final_prediction":final_prediction
    }
    return final_prediction


if __name__ == "__main__":
    app.run(debug=True)