const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv').config();
const port = 4000;
const app = express();
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

app.use(express.json())
app.use(cors());

// Mongoose client connection
mongoose.connect(process.env.MONGO_CON_STRING)
.then (console.log('Connected to database !')).catch (err => console.log(err));

const emailQuoteSchema = new Schema({
    registrationNumber: String,
    startPolicy: Date,
    dateOfBirth: Date,
    gender: String,
    licenceType: String,
    currentInsurance: String,
    howManyYears: String,
    howCarUsed: String,
    isCarMod: String,
    anyFinance: String,
    anyDefects: String,
    storageAddress: String
}, {timestamps: true})

const EmailQuote = mongoose.model('quote', emailQuoteSchema);

const authSchema = {
    email: String,
    password: String
}
const Auth = mongoose.model('auth', authSchema);


const userSchema = new Schema ({
    firstName: String,
    lastName: String,
    emailAddress: String,
    contactNum: String,
    homeAddress: String,
    billingCustomer: String,
    bankName: String,
    accountNumber: String,
    selectedPolicy: String,
    policyStart: Date,
    policyPrice: String,
    paySchedule: String,
    vehicleModel: String,
    carStorageAdd: String,
    anyDefects: String,
    anyFinance: String,
    currentInsurance: String,
    dateOfBirth: Date,
    gender: String,
    howCarUsed: String,
    howManyYears: String,
    isCarMod: String,
    licenceType: String,
    previousInc: String,
    registrationNumber: String
}, {timestamps: true});
const User = mongoose.model('user', userSchema);

app.post('/rego', (req, res) => {

    const regNum = req.body.regNum;
    console.log(regNum)

    axios.get('https://www.carjam.co.nz/car/?plate=' + regNum)
        .then (response => {
            // Caedan's code
            const htmlData = response.data + ""
            const regex = /(?<=Report - )(.*)(?=\| CARJAM)/g;
			const carData = htmlData.match(regex)[0]
            const vehicleModel = (carData.split('-')[1].trim())
            res.send(vehicleModel);
        })
        .catch (err => {
            console.log(err)
            res.status(401).send('Unable to find rego')
        });
});

app.post('/quote', (req, res) => {

    const userBreak = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        contactNum: req.body.contactNum,
        homeAddress: req.body.homeAddress,
        billingCustomer: req.body.billingCustomer,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        selectedPolicy: req.body.selectedPolicy,
        policyStart: req.body.policyStart,
        policyPrice: req.body.policyPrice,
        paySchedule: req.body.paySchedule,
        vehicleModel: req.body.vehicleModel,
        carStorageAdd: req.body.carStorageAdd,
        anyDefects: req.body.anyDefects,
        anyFinance: req.body.anyFinance,
        currentInsurance: req.body.currentInsurance,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        howCarUsed: req.body.howCarUsed,
        howManyYears: req.body.howManyYears,
        isCarMod: req.body.isCarMod,
        licenceType: req.body.licenceType,
        previousInc: req.body.previousInc,
        registrationNumber: req.body.registrationNumber
    }

    try {
        User.create(userBreak, function(err, doc) {
            console.log(err, doc);
            res.status(201).send('User created in database');
        })
    } catch (error) {
        console.log(error);
    }
});

app.post('/email', (req, res) => {
    // Nodemailer set up
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const polDate = new Date(req.body.userData.date);
    const dob = new Date(req.body.userData.dateOfBirth);

    const userDataBreak = {
        registrationNumber : req.body.userData.regNum,
        startPolicy : polDate,
        dateOfBirth : dob,
        gender : req.body.userData.gender,
        licenceType : req.body.userData.licenceType,
        currentInsurance : req.body.userData.currentInsurance,
        howManyYears : req.body.userData.howManyYears,
        previousInc : req.body.userData.previousInc,
        howCarUsed : req.body.userData.howCarUsed,
        isCarMod : req.body.userData.isCarMod,
        anyFinance : req.body.userData.anyFinance,
        anyDefects : req.body.userData.anyDefects,
        storageAddress : req.body.storageAddress,
    }
    const mail = {
        from: process.env.EMAIL,
        to: req.body.emailAddress,
        subject: `Your Quote - ${req.body.emailAddress}`,
        text: `registration number: ${userDataBreak.regNum}\npolicy start date: ${new Date(userDataBreak.date).toDateString()}\ndate of birth: ${new Date(userDataBreak.dateOfBirth).toDateString()}\ngender: ${userDataBreak.gender}\nlicence: ${userDataBreak.licenceType}\ncurrent insurance? ${userDataBreak.currentInsurance}\nhow many years on licence? ${userDataBreak.howManyYears}\npreviously insured? ${userDataBreak.previousInc}\nhow is car used? ${userDataBreak.howCarUsed}\nis your car modded? ${userDataBreak.isCarMod}\nany finance owing on car? ${userDataBreak.anyFinance}\nany defects on car? ${userDataBreak.anyDefects}\nvehicle storage address: ${userDataBreak.storageAddress}\nI NEED TO FIGURE OUT HOW TO SEND THIS NORMALLY`
    }

    transporter.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error)
            res.status(401).send('Unable to send email');
        }
        else {
            console.log('Email sent');
            try {
                EmailQuote.create(userDataBreak, function(err, doc) {
                console.log(err, doc);
                res.status(201).send('Info sent to database and email sent')
                })
            } catch (error) {
                console.log(error);
            }
        };
    })
});

app.post('/login', (req, res) => {

    const userDetails = {
        email: req.body.email,
        password: req.body.password
    }

    console.log(userDetails);

    Auth.find()
    .then (users => {
        const data = users
        data.forEach(data => {
            console.log(data.email)
            if (userDetails.email === data.email) {
                const passCheck = bcrypt.compareSync(userDetails.password, data.password);
                if (passCheck) {
                    res.status(201).send('Login successful')
                } else {
                    res.status(401).send('Authentication failed')
                }
            } else {
                console.log('Unable to find email');
            }
        })
    })
    .catch (err => console.log(err));


})

app.post('/signup', (req, res) => {
    const hashPass = bcrypt.hashSync(req.body.password, 12);

    const userSignUp = {
        email: req.body.email,
        password: hashPass
    }

    try {
        Auth.create(userSignUp, function(err, doc) {
            console.log(err, doc);
            res.status(200).send('User Sign Up Successful');
        })
    } catch (error) {
        console.log(error);
    }
    

})

app.listen(port, () => console.log('Server running on port', port));