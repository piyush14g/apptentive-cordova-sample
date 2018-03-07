/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        Apptentive.deviceReady(app.successLogger, app.errorAlert);
        app.deviceReady('deviceready');
        app.addUnreadMessagesListener(app.unreadMessagesListener);
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    unreadMessagesListener: function (unreadMessages) {
        console.log("UnreadMessages: " + unreadMessages);
        var parentElement = document.getElementById("unreadMessages");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        receivedElement.firstElementChild.innerHTML = unreadMessages;
    },
    successLogger: function (arg) {
        console.log("success(): " + arg);
    },
    successAlert: function (arg) {
        console.log("success(): " + arg);
        alert("Success: \"" + arg + "\"");
    },
    errorAlert: function (arg) {
        console.log("error(): " + arg);
        alert("Error: \"" + arg + "\"");
    },
    showMessageCenter: function () {
        Apptentive.showMessageCenter(app.successLogger, app.errorAlert);
    },
    canShowMessageCenter: function () {
        Apptentive.canShowMessageCenter(app.successAlert, app.errorAlert);
    },
    showMessageCenterWithCustomData: function (customData) {
        Apptentive.showMessageCenter(app.successLogger, app.errorAlert, customData);
    },
    addCustomDeviceData: function (key, value) {
        Apptentive.addCustomDeviceData(app.successAlert, app.errorAlert, key, value);
    },
    addCustomPersonData: function (key, value) {
        Apptentive.addCustomPersonData(app.successAlert, app.errorAlert, key, value);
    },
    engage: function (event) {
        Apptentive.engage(app.successAlert, app.errorAlert, event);
    },
    engageWithCustomData: function (event, customData) {
        Apptentive.engage(app.successAlert, app.errorAlert, event, customData);
    },
    getUnreadMessageCount: function () {
        Apptentive.getUnreadMessageCount(app.successAlert, app.errorAlert);
    },
    putRatingProviderArg: function (key, value) {
        Apptentive.putRatingProviderArg(app.successAlert, app.errorAlert, key, value);
    },
    removeCustomDeviceData: function (key) {
        Apptentive.removeCustomDeviceData(app.successAlert, app.errorAlert, key);
    },
    removeCustomPersonData: function (key) {
        Apptentive.removeCustomPersonData(app.successAlert, app.errorAlert, key);
    },
    getPersonEmail: function () {
        Apptentive.getPersonEmail(app.successAlert, app.errorAlert);
    },
    setPersonEmail: function (email) {
        Apptentive.setPersonEmail(app.successAlert, app.errorAlert, email);
    },
    getPersonName: function () {
        Apptentive.getPersonName(app.successAlert, app.errorAlert);
    },
    setPersonName: function (name) {
        Apptentive.setPersonName(app.successAlert, app.errorAlert, name);
    },
    setRatingProvider: function (providerName) {
        Apptentive.setRatingProvider(app.successAlert, app.errorAlert, providerName);
    },
    canShowInteraction: function (eventName) {
        Apptentive.canShowInteraction(app.successAlert, app.errorAlert, eventName);
    },
    addUnreadMessagesListener: function (unreadMessageslistener) {
        Apptentive.addUnreadMessagesListener(unreadMessageslistener, app.errorAlert);
    },
    login: function (token) {
        Apptentive.login(app.successAlert, app.errorAlert, token);
    },
    logout: function () {
        Apptentive.logout(app.successAlert, app.errorAlert);
    }
};
