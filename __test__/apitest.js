const request = require('supertest');
const chai = require('chai');
const api = require('../src/index.js');
const dateNow = Date.now();
expect = chai.expect;

describe('GET /', function () {
  let path = '/';
  it('should be listening and have the content-type html', async () => {
    await request(api).get(path)
     .expect('Content-Type', /html/)
     .expect(200);
    });
});

describe('GET /todos', function () {
  let path = '/todos';
  it('should be listening and have the content-type json', async () => {
    await request(api).get(path)
    .expect('Content-Type', /json/)
    .expect(200);
   });

  it('should return array of all todos', function (done) {
    request(api).get(path)
    .expect((res) => {
      expect(res.body).to.be.an('array')
    })
    .end((err, res) => {
        if (err) {
            return done(err)
        }
        return done()
    })
 });
});

describe('GET /todos/overdue', function () {
  let path = '/todos/overdue';
  it('should be listening and have the content-type json', async () => {
    await request(api).get(path)
    .expect('Content-Type', /json/)
    .expect(200);
   });

  it('should return array of overdue todos', function (done) {
    request(api).get(path)
    .expect((res) => {
      let overdues = [... new Set(res.body)];
      overdues.forEach(function(overdue, index){
        expect(new Date(overdue.due) < dateNow);
      })
    })
    .end((err, res) => {
        if (err) {
            return done(err)
        }
        return done()
    })
 });
});

describe('GET /todos/completed', function () {
  let path = '/todos/completed';
  it('should be listening and have the content-type json', async () => {
    await request(api).get(path)
    .expect('Content-Type', /json/)
    .expect(200);
   });

  it('should return array of completed todos', function (done) {
    request(api).get(path)
    .expect((res) => {
      let completed = [... new Set(res.body)];
      completed.forEach(function(todo){
        expect(todo.completed).to.be.true;
      })
    }).end((err, res) => {
        if (err) {
            return done(err)
        }
        return done()
    })
 });
});

describe('POST /todos', function () {
  let path = '/todos';

  it('should return status 201 (Created)', function (done) {
    request(api)
    .post(path)
    .send({name:'Turn on central heating'})
    .expect(201)
    .end((err, res) => {
        if (err) {
            return done(err)
        }
        return done()
    })
 });

 it('should return status 404 (Not Found) when invalid todo is sent', function (done) {
  request(api)
  .post(path)
  .send({jibberish:'Should not work'})
  .expect(404)
  .end((err, res) => {
      if (err) {
          return done(err)
      }
      return done()
  })
});
});

describe('PATCH /todos', function () {
  let path = '/todos';

  it('should return status 200 (OK)', function (done) {
    request(api)
    .patch(path)
    .send({name:'Turn on central heating'})
    .expect(201)
    .end((err, res) => {
        if (err) {
            return done(err)
        }
        return done()
    })
 });

 it('should return status 404 (Not Found) when invalid todo is sent', function (done) {
  request(api)
  .post(path)
  .send({jibberish:'Should not work'})
  .expect(404)
  .end((err, res) => {
      if (err) {
          return done(err)
      }
      return done()
  })
});
});