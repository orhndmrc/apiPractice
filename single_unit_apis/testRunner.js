
import { group, check, sleep } from 'k6';
import http from 'k6/http';
import { createRecord } from './functions/createRecord.js';
import { deleteAllRecord } from './functions/deleteAllRecords.js';
import { deleteRecord } from './functions/deleteRecord.js';
import { getSingleRecord } from './functions/getSingleRecord.js';
import { login } from './functions/login.js';

export default function () {
    let num = parseInt(Math.random() * 100)
    let firstname = `User${num}`
    let lastname = `Lastname${num}`
    let city = `City${num}`

    let token = login('orhan.demirci', '9dqcAUeKpv6ndV')
    let id = createRecord(token, firstname, lastname, city)
    getSingleRecord(token,id)
    //deleteRecord(token,id)
    //deleteAllRecord(token)
    

}