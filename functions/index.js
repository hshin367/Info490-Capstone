const functions = require("firebase-functions");
const express = require('express')
const { response, request } = require("express");

const app = express();
const FBAuth = require('./util/fbAuth')

const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream } = require('./handlers/screams')

const { getAllEvents, postOneEvent, getEvent, commentOnEvent, goingEvent, ungoingEvent, interestedEvent, uninterestedEvent, getGoingEvents, getNotGoingEvents } = require('./handlers/events')

const  { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users')

// Scream Routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream)
app.get('/scream/:screamId', getScream);
app.get('/scream/:screamId/like', FBAuth, likeScream)
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream)
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)

// Event Routes
app.get('/events', getAllEvents)
app.post('/event', FBAuth, postOneEvent)
app.get('/event/:eventId', getEvent);
app.post('/event/:eventId/going', FBAuth, goingEvent)
app.post('/event/:eventId/ungoing', FBAuth, ungoingEvent)
app.post('/event/:eventId/interested', FBAuth, interestedEvent)
app.post('/event/:eventId/uninterested', FBAuth, uninterestedEvent)
app.post('/event/:eventId/comment', FBAuth, commentOnEvent)
app.get('/events/going', FBAuth, getGoingEvents)
app.get('/events/notgoing', FBAuth, getNotGoingEvents)

// Users Routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)

exports.api = functions.https.onRequest(app);
