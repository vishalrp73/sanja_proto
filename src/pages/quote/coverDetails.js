import { FormControl, MenuItem, Select } from '@mui/material';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../functions/scrollToTop';
import axios from 'axios';

import './quoteCSS/coverDetails.css';
import "react-datepicker/dist/react-datepicker.css";

import { handleCleanse } from '../../functions/stringCleanse/handleCleanse';
import SearchLocationInput from '../../functions/searchAddress/SearchLocationInput.js';

import QuotePanel from '../../components/quotePanel/quotePanel';

const CoverDetails = () => {

    // Hooks for storing details
    const [regNum, setRegNum] = useState();
    const [vehicleModel, setVehicleModel] = useState([]);
    const [date, setDate] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();

    // Select input hooks
    const [howCar, setHowCar] = useState('');
    const [carMod, setCarMod] = useState('');
    const [finance, setFinance] = useState('');
    const [defects, setDefects] = useState('');
    const [gender, setGender] = useState('');
    const [licence, setLicence] = useState('');
    const [currIns, setCurrIns] = useState('');
    const [licYears, setLicYears] = useState('');
    const [prevInc, setPrevInc] = useState('');
    const [errDis, setErrDis] = useState(false);

    const handleChange = (event, boxId) => {
        if (boxId === 'how-car-used') {
            setHowCar(event.target.value);
        }
        else if (boxId === 'reg-num') {
            const cleanString = handleCleanse(event.target.value);
            setRegNum(cleanString);
            console.log(regNum)
        }
        else if (boxId === 'car-mod') {
            setCarMod(event.target.value);
        }
        else if (boxId === 'finance') {
            setFinance(event.target.value);
        }
        else if (boxId === 'defects') {
            setDefects(event.target.value);
        }
        else if (boxId === 'gender') {
            setGender(event.target.value);
        }
        else if (boxId === 'curr-lic') {
            const cleanString = handleCleanse(event.target.value);
            setLicence(cleanString);
            console.log(licence)
        }
        else if (boxId === 'curr-ins') {
            setCurrIns(event.target.value);
        }
        else if (boxId === 'how-many-lic') {
            setLicYears(event.target.value);
        }
        else if (boxId === 'prev-inc') {
            setPrevInc(event.target.value);
        }
        else {
            console.log('box not matched')
        }
    };

    const handleCont = () => {

        const detailsBundle = {
            regNum: regNum,
            date: date,
            dateOfBirth: dateOfBirth,
            gender: gender,
            licenceType: licence,
            currentInsurance: currIns,
            howManyYears: licYears,
            previousInc: prevInc,
            howCarUsed: howCar,
            isCarMod: carMod,
            anyFinance: finance,
            anyDefects: defects,
        }

        localStorage.setItem('User Cover Details', JSON.stringify(detailsBundle));

    }

    const checkRego = () => {
        const regoPost = {
            regNum: regNum
        }
        axios.post('http://localhost:4000/rego', regoPost)
        .then (response => {
            setErrDis(false);
            const splitData = ((response.data).split('in')).reverse();
            setVehicleModel(splitData);
            localStorage.setItem('vehicleModel', splitData);
        })
        .catch(err => {
            console.log(err);
            setErrDis(true);
        });
    }


    return (
        <div className = 'cover-details-wrapper'>

            <div className = 'detail-panel'>
                
                <h4 className = 'detail-panel-title'>About Your Car</h4>

                <div className = 'detail-panel-core'>
                    <QuotePanel
                        title = {`What is your car's registration number? *`}
                        caption = 'Enter your car registration number'
                        input = {
                            <>
                                <div className = 'rego-check-wrap'>
                                    <input type = 'text' className = 'ind_question-text-input'
                                        placeholder = 'ABC123' onChange = {(e) => handleChange(e, 'reg-num')} />
                                    <input type = 'button' className = 'reg-check-btn' value = 'Lock In'
                                        onClick = {() => checkRego()} />
                                </div>
                                    {
                                        vehicleModel ? 
                                            <><div className = 'model-text-wrap'>
                                                {
                                                    vehicleModel.map(text => (
                                                        <p className = 'model-text' id = 'reg-display'>
                                                            {text}
                                                        </p>
                                                    ))
                                                }
                                            </div></> : <></>
                                    }
                                <p onClick = { () => checkRego() }>Don't know your registration number?</p>
                            </>} />

                    <QuotePanel
                        title = {`How do you use your car? *`}
                        caption = 'Select if your car is used for personal or business use'
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'how-car-used-labelId' id = 'how-car-used-select'
                                        value = { howCar } onChange = {(e) => handleChange(e, 'how-car-used')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Personal'>Personal</MenuItem>
                                            <MenuItem value = 'Business'>Business</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        } />

                    <QuotePanel
                        title = {`Where do you keep your car? *`}
                        caption = 'Type in the address of where you keep your car.'
                        input = {
                            <>
                                <SearchLocationInput
                                    location = 'cov' />
                            </>} />


                    <QuotePanel
                        title = {`When do you want your policy to start? *`}
                        caption = 'Enter the date you would like your policy to begin.'
                        input = {
                            <div className = 'datepick-wrap'>
                                <DatePicker selected = {date} placeholderText = 'e.g. 27/11/2021'
                                    onChange = {(date) => setDate(date)}
                                    className = 'datepicker' />
                            </div>
                        } />

                    <QuotePanel
                        title = {`Does your car have modifications? *`}
                        caption = 'If the modification is under $500, select no.'
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'car-modifications-labelId' id = 'car-mods-select'
                                        value = { carMod } onChange = {(e) => handleChange(e, 'car-mod')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Yes'>Yes</MenuItem>
                                            <MenuItem value = 'No'>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        } />

                    <QuotePanel
                        title = {`Is there any finance on this car? *`}
                        caption = 'If you borrowed from friends/family, select no.'
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'finance-labelId' id = 'finance-select'
                                        value = { finance } onChange = {(e) => handleChange(e, 'finance')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Yes'>Yes</MenuItem>
                                            <MenuItem value = 'No'>No</MenuItem>
                                    </Select>
                                </FormControl>
                                {(finance === 'Yes') ? <><p>lmao broke ass</p></> : <></>}
                            </div>
                        } />

                    <QuotePanel
                        title = {`Does your car have any unrepaired damage or mechanical defects? *`}
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'defects-labelId' id = 'defects-select'
                                        value = { defects } onChange = {(e) => handleChange(e, 'defects')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Yes'>Yes</MenuItem>
                                            <MenuItem value = 'No'>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        } />
                </div>
            </div>

            <div className = 'detail-panel'>
                <h4 className = 'detail-panel-title'>About You</h4>

                <h3 className = 'main-driver'>The Main Driver +</h3>
                <div className = 'detail-panel-core' id = 'dp-ay'>

                    <QuotePanel
                        title = 'What is your date of birth?'
                        input = {
                            <div className = 'datepick-wrap'>
                                <DatePicker selected = {dateOfBirth} placeholderText = 'e.g. 19/10/1997'
                                    onChange = {(dateOfBirth) => setDateOfBirth(dateOfBirth)}
                                    className = 'datepicker' />
                            </div>
                        } />
                    
                    <QuotePanel
                        title = {`Are you female or male? *`}
                        input = {
                            <>
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'gender-labelId' id = 'gender-select'
                                        value = { gender } onChange = {(e) => handleChange(e, 'gender')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Female'>Female</MenuItem>
                                            <MenuItem value = 'Male'>Male</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                                {(gender === 'Male') ? <><p>+ $100 added to quote for shitty hypermasculine vroom vroom</p></> : <></>}
                            </>
                        } />

                    <QuotePanel
                        title = {`What licence do you currently hold? *`}
                        input = {
                            <>
                                <input type = 'text' className = 'ind_question-text-input'
                                    placeholder = 'e.g. Learners, Restricted, Full' 
                                    onChange = {(e) => handleChange(e, 'curr-lic')} />
                            </>} />

                    <QuotePanel
                        title = {`Are you currently insured? *`}
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'curr-ins-labelId' id = 'curr-ins-select'
                                        value = { currIns } onChange = {(e) => handleChange(e, 'curr-ins')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Yes'>Yes</MenuItem>
                                            <MenuItem value = 'No'>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        } />

                    <QuotePanel
                        title = {`How many years have you had your drivers licence, inlcuding your learners licence? *`}
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'how-many-lic-labelId' id = 'how-many-lic-select'
                                        value = { licYears } onChange = {(e) => handleChange(e, 'how-many-lic')}
                                        className = 'select-container' >
                                            <MenuItem value = 'less1'>Less than a year</MenuItem>
                                            <MenuItem value = '1-2'>1 - 2 years</MenuItem>
                                            <MenuItem value = '2-4'>2 - 4 years</MenuItem>
                                            <MenuItem value = '5-10'>5 - 10 years</MenuItem>
                                            <MenuItem value = '10+'>10+ years</MenuItem>
                                            <MenuItem value = '20+'>20+ years</MenuItem>
                                    </Select>
                                </FormControl>
                                {(licYears === 'less1') ? <><p>Great, institutionalise them while they're young</p></> : <></>}
                            </div>
                        } />

                    <QuotePanel
                        title = {`In the last 5 years, have you had any incidents involving damage or theft of a vehicle? *`}
                        input = {
                            <div className = 'mui-select-wrap'>
                                <FormControl fullWidth>
                                    <Select labelId = 'prev-inc-labelId' id = 'prev-inc-select'
                                        value = { prevInc } onChange = {(e) => handleChange(e, 'prev-inc')}
                                        className = 'select-container' >
                                            <MenuItem value = 'Yes'>Yes</MenuItem>
                                            <MenuItem value = 'No'>No</MenuItem>
                                    </Select>
                                </FormControl>
                                {(prevInc === 'Yes') ? <><p>We insure criminals as long as they pay up front</p></> : <></>}
                            </div>
                        } />
                </div>

                <div className = 'add-driver-wrapper'>
                        <h4 className = 'add-driver-text'>Add Another Driver</h4>
                        <h4 className = 'add-driver-plus'>+</h4>
                </div>

                {
                    ((regNum !== '') && 
                        (date !== '') && 
                        (dateOfBirth !== '') &&
                        (howCar !== '') && 
                        (carMod !== '') && 
                        (finance !== '') && 
                        (defects !== '') && 
                        (gender !== '') && 
                        (licence !== '') && 
                        (currIns !== '') && 
                        (licYears !== '') && 
                        (prevInc !== '')) ? 
                            <>
                            <Link to = '/yourQuote.js' className = 'con-quote-link'>
                                <input type = 'button' value = 'Continue to Quote' 
                                    className = 'con_quote-btn' onClick = {() => handleCont()} />
                            </Link>
                            </> : <><p className = 'required-warn'>Please fill all the required fields</p></>
                }

                
            
            </div>
           <ScrollToTop />
        </div>
    )
}

export default CoverDetails;