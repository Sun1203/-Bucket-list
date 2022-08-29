from flask import Flask, render_template, request, jsonify
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.hppmhdy.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)

print(hello)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/write', methods=["GET"])
def write():
    return render_template('write.html')


@app.route('/eat', methods=["GET"])
def eat():
    return render_template('eat.html')


@app.route('/want', methods=["GET"])
def want():
    return render_template('want.html')


@app.route("/write_get", methods=["POST"])
def write_post():
    url_receive = request.form['url_give']
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    category_receive = request.form['category_give']

    doc = {
        'url':url_receive,
        'name':name_receive,
        'comment':comment_receive,
        'category':category_receive,
    }
    db.write.insert_one(doc)
    return jsonify({'msg': '저장 완료'})


@app.route("/write_get", methods=["GET"])
def write_get():
    write_list = list(db.write.find({}, {'_id': False}))
    return jsonify({'write': write_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
