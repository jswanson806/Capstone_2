"use strict";

process.env.NODE_ENV = "test"

const request = require("supertest");
const app = require("../../app.js");
const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    testJobIds,
    testUserIds,
    u1Token,
    adminToken,
    u2Token
} = require("./common.js");
const { UnauthorizedError } = require("../../expressError.js");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

//************ Tests ************

describe("GET /", () => {
    test("works: gets all jobs", async () => {
        expect.assertions(2);
        const resp = await request(app)
            .get('/jobs')
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp.statusCode).toBe(200)
        expect(resp.body).toEqual({"allJobs": [{
            "id": testJobIds[0],
            "title": 'j4', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[1],
            "title": 'j5', 
            "body": 'jb5',
            "status": 'posted',
            "address": '555 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before5.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[2],
            "title": 'j6', 
            "body": 'jb6',
            "status": 'posted',
            "address": '666 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before6.img',
            "afterImageUrl": null
        }]})
    })

    test("works: cannot get all jobs if not logged in", async () => {
        expect.assertions(1);
        const resp = await request(app)
            .get('/jobs')
            
        expect(resp.statusCode).toBe(500)
    })
})

describe("GET /:id", () => {
    test("works: gets single job by id", async () => {
        const job_id = testJobIds[0];

        const resp = await request(app)
            .get(`/jobs/${job_id}`)
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp.statusCode).toBe(200)
        expect(resp.body).toEqual({"job": {
            "id": testJobIds[0],
            "title": 'j4', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        }})
    })

    test("works: cannot get single job by id if not logged in", async () => {
        const job_id = testJobIds[0];

        const resp = await request(app)
            .get(`/jobs/${job_id}`)
        
        expect(resp.statusCode).toBe(500)
    })
})

describe("POST /create", () => {
    test("works: creates a new job", async () => {

        const resp = await request(app)
            .get('/jobs')
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp.statusCode).toBe(200)
        expect(resp.body).toEqual({"allJobs": [{
            "id": testJobIds[0],
            "title": 'j4', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[1],
            "title": 'j5', 
            "body": 'jb5',
            "status": 'posted',
            "address": '555 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before5.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[2],
            "title": 'j6', 
            "body": 'jb6',
            "status": 'posted',
            "address": '666 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before6.img',
            "afterImageUrl": null
        }]
    })

        const newJob = {
            title: 'j7', 
            body: 'jb7',
            address: '777 j street',
            posted_by: testUserIds[0],
            before_image_url: 'http://before7.img'
        }

        const resp2 = await request(app)
            .post(`/jobs/create`)
            .set('authorization', `Bearer ${u1Token}`)
            .send({job: newJob})
        
        expect(resp2.statusCode).toBe(201)
        expect(resp2.body).toEqual({ Message: `Created new job with id: ${testJobIds[2] + 1}` })
        const resp3 = await request(app)
            .get('/jobs')
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp3.statusCode).toBe(200)
        expect(resp3.body).toEqual({"allJobs": [{
            "id": testJobIds[0],
            "title": 'j4', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[1],
            "title": 'j5', 
            "body": 'jb5',
            "status": 'posted',
            "address": '555 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before5.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[2],
            "title": 'j6', 
            "body": 'jb6',
            "status": 'posted',
            "address": '666 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before6.img',
            "afterImageUrl": null
        },
        {
            "id": testJobIds[2] + 1,
            "title": 'j7', 
            "body": 'jb7',
            "status": 'posted',
            "address": '777 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "paymentDue": null,
            "assignedTo": null,
            "beforeImageUrl": 'http://before7.img',
            "afterImageUrl": null
        }
    ]})
})

    test("works: cannot create a new job if not logged in", async () => {

        const newJob = {
            title: 'j7', 
            body: 'jb7',
            address: '777 j street',
            posted_by: testUserIds[0],
            before_image_url: 'http://before7.img'
        }

        const resp2 = await request(app)
            .post(`/jobs/create`)
            .send({job: newJob})
        
        expect(resp2.statusCode).toBe(500);
    })

    test("error if invalid schema", async () => {
        // missing title property
        const newJob = { 
            body: 'jb7',
            address: '777 j street',
            posted_by: testUserIds[0],
            before_image_url: 'http://before7.img'
        }

        const resp = await request(app)
            .post(`/jobs/create`)
            .set('authorization', `Bearer ${u1Token}`)
            .send({job: newJob})
        
        expect(resp.body).toEqual({
            error: {
                message: [ 'instance.job requires property "title"' ],
                status: 500
              }
        })
    })
})

describe("PATCH /update", () => {
    test("works: admin updates single job by id", async () => {
        const job_id = testJobIds[0];

        const resp = await request(app)
            .get(`/jobs/${job_id}`)
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp.statusCode).toBe(200)
        expect(resp.body).toEqual({"job": {
            "id": testJobIds[0],
            "title": 'j4', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        }})

        const resp2 = await request(app)
            .patch(`/jobs/update/${job_id}`)
            .set('authorization', `Bearer ${adminToken}`)
            .send({job: {id: job_id, title: 'updatedTitle'}})

        const updateRes = {
            title: 'updatedTitle',
            body: 'jb4',
            status: 'posted',
            address: '444 j street'
        }
    
        expect(resp2.statusCode).toBe(200)
        expect(resp2.body).toEqual({ Message: `Updated job: ${updateRes}`})
        const resp3 = await request(app)
            .get(`/jobs/${job_id}`)
            .set('authorization', `Bearer ${u1Token}`)
        
        expect(resp3.statusCode).toBe(200)
        expect(resp3.body).toEqual({"job": {
            "id": testJobIds[0],
            "title": 'updatedTitle', 
            "body": 'jb4',
            "status": 'posted',
            "address": '444 j street',
            "postedBy": testUserIds[0],
            "startTime": null,
            "endTime": null,
            "assignedTo": null,
            "paymentDue": null,
            "beforeImageUrl": 'http://before4.img',
            "afterImageUrl": null
        }})
    })

    test("works: user cannot update single job by id", async () => {
        const job_id = testJobIds[0];

        const resp = await request(app)
            .patch(`/jobs/update/${job_id}`)
            .set('authorization', `Bearer ${u2Token}`)
            .send({job: {id: job_id, title: 'updatedTitle'}})

        expect(resp.status).toBe(500);
    })

    test("error if invalid schema", async () => {

        const newJob = { 
            body: 'jb7',
            address: '777 j street',
            posted_by: testUserIds[0],
            before_image_url: 'http://before7.img'
        }

        const resp = await request(app)
            .post(`/jobs/create`)
            .set('authorization', `Bearer ${adminToken}`)
            .send({newJob}) // missing 'job'
        
        expect(resp.body).toEqual({
            error: {
                message: [ 'instance requires property "job"' ],
                status: 500
              }
        })
    })
})

describe("DELETE /remove/:id", () => {
    test('works: admin can remove job by id', async () => {
        // expect.assertions(5);
        const job_id = testJobIds[0];

        // get all jobs -> length should be 3
        const resp = await request(app)
            .get(`/jobs`)
            .set('authorization', `Bearer ${u1Token}`)

        expect(resp.body.allJobs.length).toBe(3)

        // remove job at index 0
        const resp2 = await request(app)
            .delete(`/jobs/remove/${job_id}`)
            .set('authorization', `Bearer ${adminToken}`)
        
        expect(resp2.statusCode).toBe(201);
        expect(resp2.body).toEqual({ Message: `Job ${job_id} has been removed`})

        // get all jobs -> length should be 2
        const resp3 = await request(app)
            .get(`/jobs`)
            .set('authorization', `Bearer ${u1Token}`)

        expect(resp3.body.allJobs.length).toBe(2)
        
    })

    test('works: user cannot remove job by id', async () => {
        expect.assertions(1);
        const job_id = testJobIds[0];

        // remove job at index 0
        const resp2 = await request(app)
            .delete(`/jobs/remove/${job_id}`)
            .set('authorization', `Bearer ${u2Token}`)

        expect(resp2.status).toBe(500);
        
    })
})

