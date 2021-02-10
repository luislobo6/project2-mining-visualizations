from flask import Flask, render_template, redirect, url_for, Markup
import pymongo
import json


app = Flask(__name__)


# Initialize PyMongo to work with MongoDBs
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Define database
db = client.mexico_mining

# General queries to init application and get all the states GeoJSON and mineral information
general = db.general.find({},{'_id': False}).next()
features = list(db.estados.find({},{'_id': False}))
tabla = list(db.tabla.find({},{'_id': False}))

# Main url the app is deployed
@app.route("/")
def index():
    # return the GeoJSON object
    return render_template("index.html")

# URL where we return all the states (first map)
@app.route("/start")
def start():
    
    # Create the GeoJSON object from the queries to the database
    obj_geojson = {
        "type": general["type"],
        "crs": general["crs"],
        "features": features
    } 
    # return the GeoJSON object
    return obj_geojson

# In this URL you can get specific information regarding one mineral, example to try: /Barita
@app.route("/<mineral>")
def minerals(mineral):
    
    # filter query with the mineral name received in the URL
    features_filtered = list(db.estados.find({f"properties.minerals.{mineral}": {"$exists":True,"$ne":[]}},{'_id': False} ))

    # Generate the complete GeoJSON with the general part and the mineral selected part
    obj_geojson = {
        "type": general["type"],
        "crs": general["crs"],
        "features": features_filtered
    }
    # return the GeoJSON object
    return obj_geojson

# In this URL you can get specific information regarding one mineral, example to try: /Barita
@app.route("/tabla")
def tabla():
    #  go for the tablein the DB
    tabla = list(db.tabla.find({},{'_id': False}))
    # return the array
    return json.dumps(tabla)


# Run Flask App
if __name__ == "__main__":
    app.run(debug=True)
    