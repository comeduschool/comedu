FROM node

# express 설치
RUN npm install express --save
RUN npm install body-parser --save

WORKDIR /app
COPY app01.js .
COPY app02.js .

CMD ['node', 'app01.js']