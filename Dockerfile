FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

RUN git clone https://github.com/pavalep/personalwebsite.git .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
