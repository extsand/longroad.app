#load base image from dockerhub
FROM alpine:3.5

#install python and pip to base image
RUN apk add --update py2-pip
#for debug and tree
# RUN pip install tree

#upgrade pip
RUN pip install --upgrade pip

#install Python modules for The Python App
COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt

#copy all files for The Python App to run

COPY * /usr/src/app/


#copy files for The Python App to run
# COPY app.py /usr/src/app/

# COPY templates/index.html /usr/src/app/templates/
# COPY templates/about.html /usr/src/app/templates/
# COPY templates/layout.html /usr/src/app/templates/

# COPY static/css/style.css /usr/src/app/static/css/style.css
# COPY static/css/style.css.map /usr/src/app/static/css/style.css.map
# COPY static/css/img/bg.jpg /usr/src/app/static/css/img/bg.jpg

# COPY static/js/script.js /usr/src/app/static/js/script.js

#set port number for the container should expose
EXPOSE 5000

#run The Python 
CMD ["python", "/usr/src/app/app.py"]


