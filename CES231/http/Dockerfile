FROM node:alpine

WORKDIR /app
COPY package.json .
COPY app01.js .
COPY app02.js .
COPY req.txt .

# express 설치
RUN npm install
RUN npm install express --save

CMD ['node', 'app01.js']