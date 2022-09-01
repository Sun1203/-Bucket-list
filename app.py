from flask import Flask, render_template, request, jsonify
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.hppmhdy.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/edit', methods=["GET"])
def edit():
    return render_template('edit.html')


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
    write_list = list(db.write.find({}, {'_id': False}))
    count =len(write_list) + 1

    doc = {
        'num':count,
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


@app.route("/edit_show", methods=["POST"])
def edit_show():
    edit_list = list(db.write.find({}, {'_id': False}))
    return jsonify({'edit_list': edit_list})


@app.route("/edit_get", methods=["POST", "GET"])
def edit_get():
    url_receive = request.form['url_give']
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']


    data = {
        'url': url_receive,
        'name': name_receive,
        'comment': comment_receive,
    }
    if request.method == "POST":
        return jsonify({'data': data})


@app.route("/delete", methods=["POST"])
def delete():
    name_receive = request.form['name_give']
    print(name_receive)
    db.write.delete_one({'name': name_receive})
    return jsonify({'msg': "삭제 완료!"})


@app.route("/update", methods=["POST"])
def update():
    url_receive = request.form['url_give']
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    category_receive = request.form['category_give']

    db.write.update_one({'name': name_receive}, {'$set': {'comment': comment_receive}})
    db.write.update_one({'name': name_receive}, {'$set': {'url': url_receive}})
    db.write.update_one({'name': name_receive}, {'$set': {'category': category_receive}})
    return jsonify({'update': "수정 완료!"})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
