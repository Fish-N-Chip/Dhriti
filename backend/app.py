import csv
from crypt import methods
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

fields = []
rows = []

with open('AIS.csv', 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    fields = next(csvreader)
    for row in csvreader:
        rows.append(row)

@app.route("/", methods=["POST"])
def predict_vessel():
    mmsi = request.json["mmsi"]
    print(mmsi)
    route = []
    for i in row:
        if i[0] == mmsi:
            route.append(i[1], i[2])
    return route

if __name__ == '__main__':
    app.run(debug=True)
