import { group, check, sleep } from 'k6';
import http from 'k6/http';
/**
 * This method creates a new record in the system
 * @param {*} token 
 * @param {*} name 
 * @param {*} lastname 
 * @param {*} city 
 * @returns record id
 */
let createRecord = function(token,name,lastname, city){
    let response, redirectUrl, json;
    response = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record",
    {
        "cookies": {
        ".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
    },
    "headers": {
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
            "x-b3-traceid": "9acf0131bfa2f37fea633941b5b76a45",
            "traceparent": "00-9acf0131bfa2f37fea633941b5b76a45-e887145b68a9049a-01",
            "sec-ch-ua-mobile": "?0",
            "authorization": "Bearer "+token+"",
            "uber-trace-id": "9acf0131bfa2f37fea633941b5b76a45:e887145b68a9049a:0:01",
            "accept": "application/json, text/plain, */*",
            "x-b3-spanid": "e887145b68a9049a",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
            "x-b3-sampled": "1",
            "timezone": "America/New_York",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://qa-practical.qa.swimlane.io/welcome",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9"
        }
    }
)
if(!check(response, {
    "Auth returns 200": response => response.status.toString() === "200",
  })){
      let checker = {}
      checker[`Error Code: ${response.error_code} - URL: ${response.url} - Response: ${response.body} - Request: ${response.request.body}`] = () => { return false }
      check(response, checker)
    };
let resJson = JSON.parse(response.body)
let recordId = resJson.id
console.log(`Record id is ==> ${recordId} `)

response= http.post("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record",
"{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\""+city+"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\""+name+"\",\"aHxOeHmCTIGd_hg1b\":\""+lastname+"\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":9,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\""+recordId+"\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}",
    {
        "cookies": {
        ".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
    },
    "headers": {
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
            "x-b3-traceid": "09e52d78576636e6e265186aa3b5316e",
            "traceparent": "00-09e52d78576636e6e265186aa3b5316e-d018454785c34ac4-01",
            "sec-ch-ua-mobile": "?0",
            "authorization": "Bearer "+token+"",
            "uber-trace-id": "09e52d78576636e6e265186aa3b5316e:d018454785c34ac4:0:01",
            "content-type": "application/json;charset=UTF-8",
            "accept": "application/json, text/plain, */*",
            "x-b3-spanid": "d018454785c34ac4",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
            "x-b3-sampled": "1",
            "timezone": "America/New_York",
            "sec-ch-ua-platform": "\"Windows\"",
            "origin": "https://qa-practical.qa.swimlane.io",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9"
        }
    }
)
if(!check(response, {
    "create new record returns 200": response => response.status.toString() === "200",
  })){
      let checker = {}
      checker[`Error Code: ${response.error_code} - URL: ${response.url} - Response: ${response.body} - Request: ${response.request.body}`] = () => { return false }
      check(response, checker)
    };
    console.log(`Created record with username==>${name} and lastname==>${lastname} created`)
    return recordId
}
export{createRecord}