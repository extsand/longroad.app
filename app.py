from flask import Flask
from flask import url_for
from flask import render_template


app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html',
                           title='LONGROAD')

@app.route('/about')
def about_page():
    return render_template('about.html',
                           title='LONGROAD')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
    # important for Docker Container
		# app.run(host='0.0.0.0')
		