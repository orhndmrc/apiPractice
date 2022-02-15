import { group, check, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
	maxRedirects: 0,
};
let num = parseInt(Math.random() * 100)
let firstname = `User${num}`
let lastname = `Lastname${num}`
let city = `City${num}`

export default function () {

	group("Swimlane Creating New Record Workflow E2E", function () {
		let res, redirectUrl, json;
		// Request #0
		res = http.get("https://qa-practical.qa.swimlane.io/",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": "\"Windows\"",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #1
		res = http.get("https://qa-practical.qa.swimlane.io/dist/pkgs/importmap.json",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #2
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/features/enabled",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #3
		res = http.get("https://qa-practical.qa.swimlane.io/api/swagger",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #4
		res = http.get("https://qa-practical.qa.swimlane.io/dist/3b20dfd86a4517e02cb1e1fd939d6e65.woff2",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #5
		res = http.get("https://qa-practical.qa.swimlane.io/dist/73ae3a587f63679d851d802af58c615c.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #6
		res = http.get("https://qa-practical.qa.swimlane.io/dist/6e55570ef62be6919757264ff9ff3fa1.woff2",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #7
		res = http.get("https://qa-practical.qa.swimlane.io/dist/9fb307e32869e9835cf4c78c9f78eb7f.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #8
		res = http.get("https://qa-practical.qa.swimlane.io/dist/2012918f8a744a4d981588414a6762f4.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #9
		res = http.get("https://qa-practical.qa.swimlane.io/dist/a33fbd6477dd15d986aa909cc9664e2c.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #10
		res = http.get("https://qa-practical.qa.swimlane.io/dist/1f6134fb111280f010d9d0d206deb726.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #11
		res = http.get("https://qa-practical.qa.swimlane.io/dist/502ff88d8998859909e7a8f1dd223e8d.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #12
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7edc663e536a20faf1be79f9def00d34.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #13
		res = http.get("https://qa-practical.qa.swimlane.io/dist/5805e835c4434608a933a9d549aea4d8.ttf",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "font",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #14
		res = http.get("https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #15
		res = http.get("https://qa-practical.qa.swimlane.io/dist/pkgs/es-module-shims@0.4.6/dist/es-module-shims.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #16
		res = http.get("https://qa-practical.qa.swimlane.io/dist/0.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #17
		res = http.get("https://qa-practical.qa.swimlane.io/dist/app.a0a835fb4f74d0e58dac.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #18
		res = http.get("https://qa-practical.qa.swimlane.io/dist/d7e489cbceea2ac416088e7d6ab24850.svg",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #19
		res = http.get("https://qa-practical.qa.swimlane.io/dist/12.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "application/signed-exchange;v=b3;q=0.7,*/*;q=0.8",
					"purpose": "prefetch",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #20
		res = http.get("https://qa-practical.qa.swimlane.io/dist/6.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "application/signed-exchange;v=b3;q=0.7,*/*;q=0.8",
					"purpose": "prefetch",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #21
		res = http.get("https://qa-practical.qa.swimlane.io/dist/8.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "application/signed-exchange;v=b3;q=0.7,*/*;q=0.8",
					"purpose": "prefetch",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #22
		res = http.get("https://qa-practical.qa.swimlane.io/dist/13.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "application/signed-exchange;v=b3;q=0.7,*/*;q=0.8",
					"purpose": "prefetch",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #23
		res = http.get("https://qa-practical.qa.swimlane.io/dist/14.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "application/signed-exchange;v=b3;q=0.7,*/*;q=0.8",
					"purpose": "prefetch",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #24
		res = http.get("https://qa-practical.qa.swimlane.io/dist/13.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #25
		res = http.get("https://qa-practical.qa.swimlane.io/dist/14.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #26
		res = http.get("https://qa-practical.qa.swimlane.io/dist/12.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #27
		res = http.get("https://qa-practical.qa.swimlane.io/dist/6.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #28
		res = http.get("https://qa-practical.qa.swimlane.io/dist/8.a0a835fb4f74d0e58dac.chunk.js",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #29
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #30
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/login-banner",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "c06476fd2ca62dabf2836205e77ac508",
					"traceparent": "00-c06476fd2ca62dabf2836205e77ac508-d92daa4b8e613cfd-00",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"uber-trace-id": "c06476fd2ca62dabf2836205e77ac508:d92daa4b8e613cfd:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "d92daa4b8e613cfd",
					"x-b3-sampled": "0",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #31
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/password-complexity",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "06c0911bc56b9447e4de22005421deaf",
					"traceparent": "00-06c0911bc56b9447e4de22005421deaf-b9d30e4e135cbc6c-01",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"uber-trace-id": "06c0911bc56b9447e4de22005421deaf:b9d30e4e135cbc6c:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "b9d30e4e135cbc6c",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #32
		res = http.get("https://qa-practical.qa.swimlane.io/api/user/authorize",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "9eb5e77327398768ba070a458dc4f0f3",
					"traceparent": "00-9eb5e77327398768ba070a458dc4f0f3-7ecec72166474a5b-01",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"uber-trace-id": "9eb5e77327398768ba070a458dc4f0f3:7ecec72166474a5b:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "7ecec72166474a5b",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 401": (r) => r.status === 401 });
		// Request #33
		res = http.get("https://qa-practical.qa.swimlane.io/api/saml/enabled",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "df3e6c6fe5d38c7caa8ee8b8c0e46c0a",
					"traceparent": "00-df3e6c6fe5d38c7caa8ee8b8c0e46c0a-4a9f17b4f56d73df-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer",
					"uber-trace-id": "df3e6c6fe5d38c7caa8ee8b8c0e46c0a:4a9f17b4f56d73df:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "4a9f17b4f56d73df",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #34
		res = http.get("https://qa-practical.qa.swimlane.io/dist/62a247d96ec3b6e47c17529a28aa4e20.svg",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #35
		res = http.get("https://qa-practical.qa.swimlane.io/dist/91a2f39fb60024f6a1e6a2b4e04308a8.svg",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #36
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #37
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"d8ca29f16e3cb3e9\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"documentFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478409300000,\"endTimeUnixNano\":1644856478901100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2307}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":7420}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478409300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478701600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478798400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478798700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478900300000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478901100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"52814a6bade43e37\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478932600000,\"endTimeUnixNano\":1644856479032400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/pkgs/importmap.json\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":251}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1434}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478932600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939800000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479031700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479032400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"9a60d8bc61e1333c\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478933300000,\"endTimeUnixNano\":1644856479208400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/settings/features/enabled\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478933300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478941100000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"7a28a3b9345a45fa\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478933700000,\"endTimeUnixNano\":1644856485496800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/swagger\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":37331}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":422200}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478933700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478942300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485464700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485496800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"55302569074e2cec\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478934400000,\"endTimeUnixNano\":1644856479125800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/3b20dfd86a4517e02cb1e1fd939d6e65.woff2\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":22056}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478934400000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478942700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"a39772e963e3bc95\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478935000000,\"endTimeUnixNano\":1644856479208000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/6e55570ef62be6919757264ff9ff3fa1.woff2\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":29916}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478935000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478944200000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"b1c43c594398d8c3\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478935700000,\"endTimeUnixNano\":1644856479391800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/73ae3a587f63679d851d802af58c615c.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":149972}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478935700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478944700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479209800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479391800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"04bbce23e52d4914\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478936200000,\"endTimeUnixNano\":1644856480007000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/2012918f8a744a4d981588414a6762f4.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":117328}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478936200000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478945600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479829200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480007000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"26a914e4084f0ea1\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478936800000,\"endTimeUnixNano\":1644856479664000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/9fb307e32869e9835cf4c78c9f78eb7f.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":292680}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478936800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479391500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479664000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"1f5e5708712462cd\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478937300000,\"endTimeUnixNano\":1644856479829000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/a33fbd6477dd15d986aa909cc9664e2c.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":104156}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478937300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479664100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479829000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"d073260c76fd181b\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478937600000,\"endTimeUnixNano\":1644856480240100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/1f6134fb111280f010d9d0d206deb726.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":149636}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478937600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480007100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480240100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"ee6d5461183d7076\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938000000,\"endTimeUnixNano\":1644856480438700000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/502ff88d8998859909e7a8f1dd223e8d.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":116424}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946900000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480240200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480438700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"dbc2d406753feca7\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938300000,\"endTimeUnixNano\":1644856480706500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/7edc663e536a20faf1be79f9def00d34.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":148932}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947000000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480438900000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480706500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"5d8ed5db1278366d\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938600000,\"endTimeUnixNano\":1644856482180200000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/5805e835c4434608a933a9d549aea4d8.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":116192}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481925200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482180200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"3660c2d278c6e2c8\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938900000,\"endTimeUnixNano\":1644856482394400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":165268}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1040279}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480706600000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482394400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"19a91c59a1208ebd\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478939200000,\"endTimeUnixNano\":1644856480869900000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/pkgs/es-module-shims@0.4.6/dist/es-module-shims.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":9396}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":26801}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478939200000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480869900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"0f5034ad5c5c79f9\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478939500000,\"endTimeUnixNano\":1644856481925100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/0.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2580}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":28263}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478939500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481923700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481925100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"cca81ffaf16fb2ba\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478940100000,\"endTimeUnixNano\":1644856485464500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/app.a0a835fb4f74d0e58dac.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2320721}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":10633377}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478940100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480869999900,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485464500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"29e81d65866fd37b\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478952300000,\"endTimeUnixNano\":1644856480864600000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/d7e489cbceea2ac416088e7d6ab24850.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":925}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":2529}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478952300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478953300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"b44f3e7210175c6c\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486003800000,\"endTimeUnixNano\":1644856486090000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/12.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":12720}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":47150}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486003800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486089400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486090000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"8ffbcd0a62a49681\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004100000,\"endTimeUnixNano\":1644856486178799900,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/6.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":24006}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":104667}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486177700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486178799900,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"fd2b84eaa5ed73cc\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004399900,\"endTimeUnixNano\":1644856486256800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/8.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":15876}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":66003}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004399900,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486255400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"79ea16e74eb9de77\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004700000,\"endTimeUnixNano\":1644856486256700000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/13.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":8998}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":37884}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486006400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"a2e985222f760adf\",\"parentSpanId\":\"e305a08ba4bbc14c\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004900000,\"endTimeUnixNano\":1644856486257900000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/14.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1575}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":4774}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486006500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486257500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486257900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6be14d5120019e1e85dcbed49928f6a5\",\"spanId\":\"e305a08ba4bbc14c\",\"name\":\"documentLoad\",\"kind\":1,\"startTimeUnixNano\":1644856478409300000,\"endTimeUnixNano\":1644856487598500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478409300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478408000000,\"name\":\"unloadEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478408000000,\"name\":\"unloadEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005400000,\"name\":\"domInteractive\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486007800000,\"name\":\"domContentLoadedEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487386500000,\"name\":\"domContentLoadedEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"domComplete\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"loadEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"loadEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482479100000,\"name\":\"firstPaint\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482479100000,\"name\":\"firstContentfulPaint\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"c0f534ebee88cfa7\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"documentFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478409300000,\"endTimeUnixNano\":1644856478901100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2307}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":7420}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478409300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478597800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478701600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478798400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478798700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478900300000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478901100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"05b325228f49d680\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478932600000,\"endTimeUnixNano\":1644856479032400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/pkgs/importmap.json\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":251}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1434}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478932600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478932600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939800000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479031700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479032400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"76d80b6226921615\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478933300000,\"endTimeUnixNano\":1644856479208400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/settings/features/enabled\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478933300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478941100000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"e129924b1c49cf95\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478933700000,\"endTimeUnixNano\":1644856485496800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/swagger\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":37331}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":422200}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478933700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478933700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478942300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485464700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485496800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"fbd25f09d7d2c97b\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478934400000,\"endTimeUnixNano\":1644856479125800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/3b20dfd86a4517e02cb1e1fd939d6e65.woff2\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":22056}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478934400000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478934400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478942700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"74ec0b1fa0a75050\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478935000000,\"endTimeUnixNano\":1644856479208000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/6e55570ef62be6919757264ff9ff3fa1.woff2\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":29916}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478935000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478944200000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479125800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479208000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"173cb6f4fa205bce\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478935700000,\"endTimeUnixNano\":1644856479391800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/73ae3a587f63679d851d802af58c615c.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":149972}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478935700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478935700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478944700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479209800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479391800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"9a668fa3833e84b2\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478936200000,\"endTimeUnixNano\":1644856480007000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/2012918f8a744a4d981588414a6762f4.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":117328}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478936200000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936200000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478945600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479829200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480007000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"68c31f5b2f0661a6\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478936800000,\"endTimeUnixNano\":1644856479664000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/9fb307e32869e9835cf4c78c9f78eb7f.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":292680}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478936800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478936800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479391500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479664000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"4a2dc23ae1451180\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478937300000,\"endTimeUnixNano\":1644856479829000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/a33fbd6477dd15d986aa909cc9664e2c.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":104156}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478937300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479664100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856479829000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"19875d9b20225129\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478937600000,\"endTimeUnixNano\":1644856480240100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/1f6134fb111280f010d9d0d206deb726.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":149636}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478937600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478937600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480007100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480240100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"08952c43b5850ac6\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938000000,\"endTimeUnixNano\":1644856480438700000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/502ff88d8998859909e7a8f1dd223e8d.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":116424}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478946900000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480240200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480438700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"14bb0e9235562d68\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938300000,\"endTimeUnixNano\":1644856480706500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/7edc663e536a20faf1be79f9def00d34.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":148932}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947000000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480438900000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480706500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"105ca9b24ae414f3\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938600000,\"endTimeUnixNano\":1644856482180200000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/5805e835c4434608a933a9d549aea4d8.ttf\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":116192}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481925200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482180200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"0674b5df9e130a2d\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478938900000,\"endTimeUnixNano\":1644856482394400000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":165268}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1040279}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478938900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478938900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480706600000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482394400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"daba45ef00aac129\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478939200000,\"endTimeUnixNano\":1644856480869900000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/pkgs/es-module-shims@0.4.6/dist/es-module-shims.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":9396}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":26801}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478939200000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939200000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480869900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"b876e05522823d2d\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478939500000,\"endTimeUnixNano\":1644856481925100000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/0.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2580}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":28263}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478939500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478939500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481923700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856481925100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"aa61607b71ff2d7c\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478940100000,\"endTimeUnixNano\":1644856485464500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/app.a0a835fb4f74d0e58dac.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2320721}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":10633377}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478940100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478940100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478947400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480869999900,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856485464500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"4bee6d900e890991\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856478952300000,\"endTimeUnixNano\":1644856480864600000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/d7e489cbceea2ac416088e7d6ab24850.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":925}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":2529}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478952300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478952300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478953300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856480864600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"690cd47bc75ec373\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486003800000,\"endTimeUnixNano\":1644856486090000000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/12.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":12720}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":47150}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486003800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486003800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486089400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486090000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"0d2c6cdcd562faac\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004100000,\"endTimeUnixNano\":1644856486178799900,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/6.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":24006}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":104667}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486177700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486178799900,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"f630383129c34b52\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004399900,\"endTimeUnixNano\":1644856486256800000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/8.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":15876}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":66003}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004399900,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004399900,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486255400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"493ac5f528ced718\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004700000,\"endTimeUnixNano\":1644856486256700000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/13.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":8998}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":37884}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486006400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486256700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"3c265d18a45cfbe8\",\"parentSpanId\":\"212b26655efd76ef\",\"name\":\"resourceFetch\",\"kind\":1,\"startTimeUnixNano\":1644856486004900000,\"endTimeUnixNano\":1644856486257900000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/dist/14.a0a835fb4f74d0e58dac.chunk.js\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1575}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":4774}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856486004900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486004900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486006500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486257500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486257900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"362599e9fd5d40d6d36883504d9e49d0\",\"spanId\":\"212b26655efd76ef\",\"name\":\"documentLoad\",\"kind\":1,\"startTimeUnixNano\":1644856478409300000,\"endTimeUnixNano\":1644856487598500000,\"attributes\":[{\"key\":\"component\",\"value\":{\"stringValue\":\"document-load\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856478409300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478408000000,\"name\":\"unloadEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856478408000000,\"name\":\"unloadEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486005400000,\"name\":\"domInteractive\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856486007800000,\"name\":\"domContentLoadedEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487386500000,\"name\":\"domContentLoadedEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"domComplete\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"loadEventStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856487598500000,\"name\":\"loadEventEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482479100000,\"name\":\"firstPaint\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856482479100000,\"name\":\"firstContentfulPaint\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-document-load\",\"version\":\"0.25.0\"}},{\"spans\":[{\"traceId\":\"df3e6c6fe5d38c7caa8ee8b8c0e46c0a\",\"spanId\":\"4a9f17b4f56d73df\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856489929000000,\"endTimeUnixNano\":1644856490027900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/saml/enabled\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":5}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856489929100000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489929900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489931300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490023700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490024500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490027900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"06c0911bc56b9447e4de22005421deaf\",\"spanId\":\"b9d30e4e135cbc6c\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856489923700000,\"endTimeUnixNano\":1644856490030900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/settings/password-complexity\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856489923700000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924000000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489924600000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490024900000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490025199900,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490030900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"9eb5e77327398768ba070a458dc4f0f3\",\"spanId\":\"7ecec72166474a5b\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856489925100000,\"endTimeUnixNano\":1644856490075200000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/user/authorize\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":20}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":0}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":401}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856489925100000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489925800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856489926500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490033100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490033500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856490075200000,\"name\":\"error\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #38
		res = http.post("https://qa-practical.qa.swimlane.io/api/user/login",
			"{\"username\":\"orhan.demirci\",\"password\":\"9dqcAUeKpv6ndV\"}",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "a2503d17c430a2cb2d93b185a583243b",
					"traceparent": "00-a2503d17c430a2cb2d93b185a583243b-d06428a3183a9557-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer",
					"uber-trace-id": "a2503d17c430a2cb2d93b185a583243b:d06428a3183a9557:0:00",
					"content-type": "application/json",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "d06428a3183a9557",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "Auth returns 200": (r) => r.status === 200 });
		//console.log(res.body)
		let resJson = JSON.parse(res.body)
		let token = resJson.token
		console.log(token)

		// Request #39
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "71c9ddbadea4eb3dec088b5d125fbfee",
					"traceparent": "00-71c9ddbadea4eb3dec088b5d125fbfee-9472e40528511966-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "71c9ddbadea4eb3dec088b5d125fbfee:9472e40528511966:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "9472e40528511966",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #40
		res = http.get("https://qa-practical.qa.swimlane.io/dist/d7e489cbceea2ac416088e7d6ab24850.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #41
		res = http.get("https://qa-practical.qa.swimlane.io/dist/ff3251da796508ace20838b158bc7ea3.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "9a67c941890e9011c76c7e67ca3e7934",
					"traceparent": "00-9a67c941890e9011c76c7e67ca3e7934-ebfcb0eaed425079-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "9a67c941890e9011c76c7e67ca3e7934:ebfcb0eaed425079:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "ebfcb0eaed425079",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #42
		res = http.get("https://qa-practical.qa.swimlane.io/dist/c8aa6e4d455f898f0fc8db0adc71ef91.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "6bf4303748c537acfa5c260852c369c2",
					"traceparent": "00-6bf4303748c537acfa5c260852c369c2-b7a76387baf5da74-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "6bf4303748c537acfa5c260852c369c2:b7a76387baf5da74:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "b7a76387baf5da74",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #43
		res = http.get("https://qa-practical.qa.swimlane.io/dist/48001553ac3e0ef04a2aea7d9610e9d6.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "c07bc1f606cf347d69913b99fc2ebe65",
					"traceparent": "00-c07bc1f606cf347d69913b99fc2ebe65-e0e579027795d8c0-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "c07bc1f606cf347d69913b99fc2ebe65:e0e579027795d8c0:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "e0e579027795d8c0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #44
		res = http.get("https://qa-practical.qa.swimlane.io/dist/1a233aab901a3edac757f3683fbd6780.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "2b44c4f85c468088ead3a56cee435860",
					"traceparent": "00-2b44c4f85c468088ead3a56cee435860-f21bc6f236aaf262-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "2b44c4f85c468088ead3a56cee435860:f21bc6f236aaf262:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "f21bc6f236aaf262",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/login",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #45
		res = http.get("https://qa-practical.qa.swimlane.io/dist/62a247d96ec3b6e47c17529a28aa4e20.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #46
		res = http.get("https://qa-practical.qa.swimlane.io/dist/337cc7fd47cfccc8b8644d66c6fdc360.png",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #47
		res = http.get("https://qa-practical.qa.swimlane.io/api/workspaces/nav",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "d40b2b60d40114c2ba67c6e489905fe1",
					"traceparent": "00-d40b2b60d40114c2ba67c6e489905fe1-d43c08f406e9eef9-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "d40b2b60d40114c2ba67c6e489905fe1:d43c08f406e9eef9:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "d43c08f406e9eef9",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #48
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/features",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "f0f91813afa58fbd84d0ffd26fe2a477",
					"traceparent": "00-f0f91813afa58fbd84d0ffd26fe2a477-ab6536b4d6a7a93e-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "f0f91813afa58fbd84d0ffd26fe2a477:ab6536b4d6a7a93e:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "ab6536b4d6a7a93e",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #49
		res = http.get("https://qa-practical.qa.swimlane.io/dist/757866b3037593b59962a383e8c66f24.svg",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/welcome",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #50
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/welcome",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #51
		res = http.get("https://qa-practical.qa.swimlane.io/api/reports/status/workspace/aTLTrHM1X27l1wiAk",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "0119723b9526512c8fbdfdfc8a3c1150",
					"traceparent": "00-0119723b9526512c8fbdfdfc8a3c1150-ff082d96f072389e-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "0119723b9526512c8fbdfdfc8a3c1150:ff082d96f072389e:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "ff082d96f072389e",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #52
		res = http.get("https://qa-practical.qa.swimlane.io/api/dashboard/status/workspace/aTLTrHM1X27l1wiAk",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "b4638562450437954c9940ef75745d6f",
					"traceparent": "00-b4638562450437954c9940ef75745d6f-3161c016d58ecb32-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "b4638562450437954c9940ef75745d6f:3161c016d58ecb32:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "3161c016d58ecb32",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #53
		// Request #54
		// Request #55
		// Request #56
		res = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "4698a369eb0c7cfebf04702fae3f4501",
					"traceparent": "00-4698a369eb0c7cfebf04702fae3f4501-3ea9edd6bfe21ae0-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "4698a369eb0c7cfebf04702fae3f4501:3ea9edd6bfe21ae0:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "3ea9edd6bfe21ae0",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #57
		res = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record",
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
					"authorization": "Bearer " + token + "",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		resJson = JSON.parse(res.body)
		let recordId = resJson.id
		console.log(`Record id is ==> ${recordId} `)
		// Request #58
		res = http.get("https://qa-practical.qa.swimlane.io/api/workflow/aF5sqnNFCc36kO9_J",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "564cbd9918686e8bd0e3817578f7abe0",
					"traceparent": "00-564cbd9918686e8bd0e3817578f7abe0-d5c7ca734d4bbb3b-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "564cbd9918686e8bd0e3817578f7abe0:d5c7ca734d4bbb3b:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "d5c7ca734d4bbb3b",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #59
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/timezones/",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "18181abf1e92776ae2970cdf95a8c9cc",
					"traceparent": "00-18181abf1e92776ae2970cdf95a8c9cc-d76137167eb54ad6-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "18181abf1e92776ae2970cdf95a8c9cc:d76137167eb54ad6:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "d76137167eb54ad6",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #60
		res = http.get("https://qa-practical.qa.swimlane.io/api/settings/",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "dba2dd17b83e082c31fff8bb859c37e4",
					"traceparent": "00-dba2dd17b83e082c31fff8bb859c37e4-f07b9cd32a7bd0ff-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "dba2dd17b83e082c31fff8bb859c37e4:f07b9cd32a7bd0ff:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "f07b9cd32a7bd0ff",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #61
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #62
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"\",\"aHxOeHmCTIGd_hg1b\":\"\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\"},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":0,\"totalTimeSpent\":0,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "5bccb1025ec5df899fdf6d65fe83b740",
					"traceparent": "00-5bccb1025ec5df899fdf6d65fe83b740-2bc4a0ff39d6d397-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "5bccb1025ec5df899fdf6d65fe83b740:2bc4a0ff39d6d397:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "2bc4a0ff39d6d397",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #63
		res = http.get("https://qa-practical.qa.swimlane.io/api/history?type=Records&id=" + recordId + "",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "cd980a2972867c3f0de78f6baaadf0e3",
					"traceparent": "00-cd980a2972867c3f0de78f6baaadf0e3-b4d1e19065ddb57b-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "cd980a2972867c3f0de78f6baaadf0e3:b4d1e19065ddb57b:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "b4d1e19065ddb57b",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #64
		res = http.get("https://qa-practical.qa.swimlane.io/dist/c07457739c183c845cacbf55dae2808e.png",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #65
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/tinymce.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #66
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"71c9ddbadea4eb3dec088b5d125fbfee\",\"spanId\":\"9472e40528511966\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543399800000,\"endTimeUnixNano\":1644856543536800000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/settings\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":925}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1937}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543399800000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400000000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543400500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543401600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543533500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543533999900,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543536800000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"9a67c941890e9011c76c7e67ca3e7934\",\"spanId\":\"ebfcb0eaed425079\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543428700000,\"endTimeUnixNano\":1644856543543100000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"dist/ff3251da796508ace20838b158bc7ea3.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":285}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":759}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543428700000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429200000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543429700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543431100000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543537700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543538300000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543543100000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"6bf4303748c537acfa5c260852c369c2\",\"spanId\":\"b7a76387baf5da74\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543431300000,\"endTimeUnixNano\":1644856543545900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"dist/c8aa6e4d455f898f0fc8db0adc71ef91.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1743}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":4783}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543431300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543431599900,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543432300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543433300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543538300000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543538700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543545900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"c07bc1f606cf347d69913b99fc2ebe65\",\"spanId\":\"e0e579027795d8c0\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543433700000,\"endTimeUnixNano\":1644856543548800000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"dist/48001553ac3e0ef04a2aea7d9610e9d6.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":314}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":862}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543433700000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434000000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543434500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543435900000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543538700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543539100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543548800000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"2b44c4f85c468088ead3a56cee435860\",\"spanId\":\"f21bc6f236aaf262\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543438500000,\"endTimeUnixNano\":1644856543551100000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"dist/1a233aab901a3edac757f3683fbd6780.svg\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":366}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":842}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543438600000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543438800000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543439300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543440500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543539200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543539600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543551100000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"f0f91813afa58fbd84d0ffd26fe2a477\",\"spanId\":\"ab6536b4d6a7a93e\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543454800000,\"endTimeUnixNano\":1644856543714500000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/settings/features\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543454800000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455000000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543455400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543468900000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543707400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543707700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543714500000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"d40b2b60d40114c2ba67c6e489905fe1\",\"spanId\":\"d43c08f406e9eef9\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543453000000,\"endTimeUnixNano\":1644856543729400000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/workspaces/nav\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":207}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":322}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543453000000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453200000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543453800000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543468200000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543707800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543708100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543729400000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"0119723b9526512c8fbdfdfc8a3c1150\",\"spanId\":\"ff082d96f072389e\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856543717500000,\"endTimeUnixNano\":1644856543847400000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/reports/status/workspace/aTLTrHM1X27l1wiAk\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":109}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":156}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856543717600000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718100000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543718700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543719800000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543839200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543839500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856543847400000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"4698a369eb0c7cfebf04702fae3f4501\",\"spanId\":\"3ea9edd6bfe21ae0\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856548381100000,\"endTimeUnixNano\":1644856548485999900,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/app/aF5sqnNFCc36kO9_J\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2842}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":16831}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856548381100000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548381700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382900000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548481900000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548482500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548485999900,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"9acf0131bfa2f37fea633941b5b76a45\",\"spanId\":\"e887145b68a9049a\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856548382200000,\"endTimeUnixNano\":1644856548488900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/app/aF5sqnNFCc36kO9_J/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":622}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1662}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856548382200000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548382700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548383599900,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548485700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548486200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548488900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #67
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/themes/silver/theme.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #68
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/icons/default/icons.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #69
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/advlist/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #70
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/autolink/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #71
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/lists/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #72
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/link/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #73
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/image/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #74
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/fullscreen/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #75
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/table/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #76
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/paste/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #77
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/plugins/code/plugin.min.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #78
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/skin.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #79
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #80
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/content/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #81
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"18181abf1e92776ae2970cdf95a8c9cc\",\"spanId\":\"d76137167eb54ad6\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856548553300000,\"endTimeUnixNano\":1644856548649100000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/settings/timezones/\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2111}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":5987}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856548553300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548553600000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548554100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548555500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548646200000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548646800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548649100000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"5bccb1025ec5df899fdf6d65fe83b740\",\"spanId\":\"2bc4a0ff39d6d397\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856548671400000,\"endTimeUnixNano\":1644856548821999900,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856548671400000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548671599900,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548672100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548673199900,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548774600000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548775200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548821999900,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"cd980a2972867c3f0de78f6baaadf0e3\",\"spanId\":\"b4d1e19065ddb57b\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856548695400000,\"endTimeUnixNano\":1644856548864300000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/history?type=Records&id=" + recordId + "\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":2}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856548695400000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548695500000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548696000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548697300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548790100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548790600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856548864300000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #82
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"New\",\"aHxOeHmCTIGd_hg1b\":\"\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\"},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":0,\"totalTimeSpent\":0,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "d9fcae77e0e189c1c2a55b47d8c63212",
					"traceparent": "00-d9fcae77e0e189c1c2a55b47d8c63212-fdbbf6c77e653c2c-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "d9fcae77e0e189c1c2a55b47d8c63212:fdbbf6c77e653c2c:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "fdbbf6c77e653c2c",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #83
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\"},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":0,\"totalTimeSpent\":0,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "62b0c225c2639d2166b9c6d2313e1255",
					"traceparent": "00-62b0c225c2639d2166b9c6d2313e1255-805d4a88b8af3477-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "62b0c225c2639d2166b9c6d2313e1255:805d4a88b8af3477:0:00",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "805d4a88b8af3477",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #84
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"d9fcae77e0e189c1c2a55b47d8c63212\",\"spanId\":\"fdbbf6c77e653c2c\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856563291900000,\"endTimeUnixNano\":1644856563400700000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856563291900000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563292200000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563293100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563295300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563397700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563398200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856563400700000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #85
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"Test123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\"},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":0,\"totalTimeSpent\":0,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "84dc46a40ccc69fc6c58afb155c8d28e",
					"traceparent": "00-84dc46a40ccc69fc6c58afb155c8d28e-c2b8c6fbf301732d-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "84dc46a40ccc69fc6c58afb155c8d28e:c2b8c6fbf301732d:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "c2b8c6fbf301732d",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #86
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"84dc46a40ccc69fc6c58afb155c8d28e\",\"spanId\":\"c2b8c6fbf301732d\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856578318300000,\"endTimeUnixNano\":1644856578431599900,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856578318300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578318500000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578319100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578320700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578428100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578428700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856578431599900,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #87
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"Orlando\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"Test123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\"},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":7,\"totalTimeSpent\":0,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "6c92ff26f2d0692ad4fd756cdde4953e",
					"traceparent": "00-6c92ff26f2d0692ad4fd756cdde4953e-80ab7d16dc971270-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "6c92ff26f2d0692ad4fd756cdde4953e:80ab7d16dc971270:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "80ab7d16dc971270",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #88
		res = http.post("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record",
		"{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\""+city+"\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\""+firstname+"\",\"aHxOeHmCTIGd_hg1b\":\""+lastname+"\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":9,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\""+recordId+"\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}",
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
					"authorization": "Bearer " + token + "",
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
		check(res, { "create new record returns 200": (r) => r.status === 200 });
		console.log(`The new record with username==>${firstname} and lastname==>${lastname} created`)
	

		// Request #89
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"allowed\":[],\"trackingId\":0,\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"referencedRecordIds\":[],\"referencedByIds\":[],\"isNew\":true,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"Orlando\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"Test123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":0,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:35:46.8771132Z\",\"modifiedDate\":\"0001-01-01T00:00:00\",\"sessionTimeSpent\":9,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "4586432e9f5c3236eb983055ac5d8ecb",
					"traceparent": "00-4586432e9f5c3236eb983055ac5d8ecb-5b9298d6e60b329f-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "4586432e9f5c3236eb983055ac5d8ecb:5b9298d6e60b329f:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "5b9298d6e60b329f",
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
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #90
		res = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record/" + recordId + "",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "b05e1b6329a118470a4fa0983bae8f03",
					"traceparent": "00-b05e1b6329a118470a4fa0983bae8f03-fefcf221ec20233e-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "b05e1b6329a118470a4fa0983bae8f03:fefcf221ec20233e:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "fefcf221ec20233e",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "get record details returns 200": (r) => r.status === 200 });
		// Request #91
		res = http.get("https://qa-practical.qa.swimlane.io/api/workflow/aF5sqnNFCc36kO9_J",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "59b8a1e04af21e685ece2230a9c0eec4",
					"traceparent": "00-59b8a1e04af21e685ece2230a9c0eec4-2866edbc2c16fa6f-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "59b8a1e04af21e685ece2230a9c0eec4:2866edbc2c16fa6f:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "2866edbc2c16fa6f",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #92
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #93
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"name\":\"NES-54\",\"allowed\":[],\"trackingId\":54,\"trackingFull\":\"NES-54\",\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"isNew\":false,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"Orlando\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"Test123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9,\"aKnvRnA9jzUAG0B3t\":\"NES-54\",\"aG2imcqZIAScppfg4\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"60ff08fa481377f08703b9eb\":{\"$type\":\"Core.Models.Workflow.History.ActionHistory, Core\",\"jobId\":\"aWZ3i6ZUX6BPTqST2\",\"userId\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"dateExecuted\":\"2022-02-14T16:36:27.619Z\"}},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":1,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:36:27.635Z\",\"modifiedDate\":\"2022-02-14T16:36:27.635Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"sessionTimeSpent\":0,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "e71195fad3ff325663a3318afeb7d0c8",
					"traceparent": "00-e71195fad3ff325663a3318afeb7d0c8-15ad8b88c22f6322-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "e71195fad3ff325663a3318afeb7d0c8:15ad8b88c22f6322:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "15ad8b88c22f6322",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #94
		res = http.get("https://qa-practical.qa.swimlane.io/api/history?type=Records&id=" + recordId + "",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "4403fe9880e4ae94545d37d9ed61a9ce",
					"traceparent": "00-4403fe9880e4ae94545d37d9ed61a9ce-eb0074d84ed27159-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "4403fe9880e4ae94545d37d9ed61a9ce:eb0074d84ed27159:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "eb0074d84ed27159",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #95
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/skin.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #96
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #97
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/content/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #98
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"name\":\"NES-54\",\"allowed\":[],\"trackingId\":54,\"trackingFull\":\"NES-54\",\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"isNew\":false,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"Orlando\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"TEST123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9,\"aKnvRnA9jzUAG0B3t\":\"NES-54\",\"aG2imcqZIAScppfg4\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"60ff08fa481377f08703b9eb\":{\"$type\":\"Core.Models.Workflow.History.ActionHistory, Core\",\"jobId\":\"aWZ3i6ZUX6BPTqST2\",\"userId\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"dateExecuted\":\"2022-02-14T16:36:27.619Z\"}},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":1,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:36:27.635Z\",\"modifiedDate\":\"2022-02-14T16:36:27.635Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"sessionTimeSpent\":0,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "8d16165b131295e8701d5e1f35ea628a",
					"traceparent": "00-8d16165b131295e8701d5e1f35ea628a-5eb07e24c98e1d13-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "8d16165b131295e8701d5e1f35ea628a:5eb07e24c98e1d13:0:00",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "5eb07e24c98e1d13",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #99
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"6c92ff26f2d0692ad4fd756cdde4953e\",\"spanId\":\"80ab7d16dc971270\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856585698400000,\"endTimeUnixNano\":1644856585846700000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856585698500000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585698700000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585699200000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585700700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585843700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585844000000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856585846700000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"09e52d78576636e6e265186aa3b5316e\",\"spanId\":\"d018454785c34ac4\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856589087599900,\"endTimeUnixNano\":1644856589278200000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/app/aF5sqnNFCc36kO9_J/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":834}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":2386}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856589087599900,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589087900000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589088300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589090000000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589256500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589257100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589278200000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"4586432e9f5c3236eb983055ac5d8ecb\",\"spanId\":\"5b9298d6e60b329f\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856589223599900,\"endTimeUnixNano\":1644856589331200000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856589223599900,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589223800000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589224300000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589225199900,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589327400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589327900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589331200000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"b05e1b6329a118470a4fa0983bae8f03\",\"spanId\":\"fefcf221ec20233e\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856589264200000,\"endTimeUnixNano\":1644856589392500000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/app/aF5sqnNFCc36kO9_J/record/" + recordId + "\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":834}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":2386}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856589264200000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264500000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589264900000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589266000000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589389500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589389900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589392500000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"4403fe9880e4ae94545d37d9ed61a9ce\",\"spanId\":\"eb0074d84ed27159\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856589581800000,\"endTimeUnixNano\":1644856589787900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/history?type=Records&id=" + recordId + "\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1008}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":6053}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856589581800000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589581900000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589582400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589583599900,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589691000000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589691600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589787900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"e71195fad3ff325663a3318afeb7d0c8\",\"spanId\":\"15ad8b88c22f6322\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856589569199900,\"endTimeUnixNano\":1644856589793400000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/task/execute/record\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":43}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":17}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856589569199900,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589569500000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589570100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589571300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589693400000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589693800000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856589793400000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #100
		res = http.get("https://qa-practical.qa.swimlane.io/api/reports/app/aF5sqnNFCc36kO9_J/default",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "186a6340fefb36c97c59eb1d502eefc8",
					"traceparent": "00-186a6340fefb36c97c59eb1d502eefc8-ce9643c74c0a3b19-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "186a6340fefb36c97c59eb1d502eefc8:ce9643c74c0a3b19:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "ce9643c74c0a3b19",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/record/aF5sqnNFCc36kO9_J/" + recordId + "",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #101
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #102
		res = http.get("https://qa-practical.qa.swimlane.io/api/reports/aSiaZ3NU8KWkeJN3E",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "20a4738701deeaa182ce4941e37b5f5a",
					"traceparent": "00-20a4738701deeaa182ce4941e37b5f5a-ad07d8e0f4a1a00a-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "20a4738701deeaa182ce4941e37b5f5a:ad07d8e0f4a1a00a:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "ad07d8e0f4a1a00a",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #103
		res = http.post("https://qa-practical.qa.swimlane.io/api/search/",
			"{\"permissions\":{\"$type\":\"Core.Models.Security.PermissionMatrix, Core\",\"aOnAr9mbylnGzChgu\":{\"$type\":\"Core.Models.Security.Authorization, Core\",\"type\":\"Role\",\"id\":\"aOnAr9mbylnGzChgu\",\"name\":\"Practical\",\"access\":2,\"fields\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[Core.Models.Security.Access, Core]], System.Private.CoreLib\"}}},\"allowed\":[],\"groupBys\":[],\"aggregates\":[],\"applicationIds\":[\"aF5sqnNFCc36kO9_J\"],\"columns\":[\"aFPpUOs0uSrcRCKYZ\",\"aFjm80LnbJf780V6p\",\"aGMfQEKK_1G7WdqEK\",\"aGgc3qp6gt3dDR_na\",\"aG_YiSItNjs7vGALq\",\"aHdR_gHQmRT8ItVTL\",\"aHxOeHmCTIGd_hg1b\",\"aIaHwVkkr_seOK096\",\"aIuEa7EWYrg958AiM\",\"aJDBDjjIFiTemxLGc\",\"aJX7sLD3xZH9TlVps\",\"aJr4VxhqeQ4fAZgO7\",\"aKA19ZBcLGt9sNqxN\",\"aKTyoAgO27gfZC0Vd\",\"aKnvRnA9jzUAG0B3t\"],\"sorts\":{\"aHdR_gHQmRT8ItVTL\":\"ascending\"},\"filters\":[],\"$type\":\"Core.Models.Search.StatsReport, Core\",\"countByApplicationFacet\":false,\"pageSize\":7,\"offset\":0,\"defaultSearchReport\":true,\"createdDate\":\"2022-02-10T18:59:55.22Z\",\"modifiedDate\":\"2022-02-10T18:59:55.22Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"statsDrillin\":false,\"uid\":\"default-58145\",\"version\":1,\"id\":\"aSiaZ3NU8KWkeJN3E\",\"name\":\"Default\",\"disabled\":false,\"chartOptions\":{\"autoScale\":false,\"showLegend\":true,\"showLabels\":true,\"showXAxis\":true,\"showYAxis\":true,\"showXAxisLabel\":false,\"showYAxisLabel\":false,\"xAxisLabelText\":\"\",\"yAxisLabelText\":\"\",\"sort\":{\"directionD0\":\"labelAscending\",\"directionD1\":\"labelAscending\"},\"zoom\":false,\"explodeSlices\":false,\"showOtherGroup\":true,\"curveType\":\"Linear\",\"showAxis\":true,\"min\":0,\"max\":100,\"minRadius\":5,\"maxRadius\":50,\"units\":\"Total\",\"bigSegments\":10,\"smallSegments\":5,\"angleSpan\":240,\"startAngle\":-120,\"code\":\"\",\"gradient\":true,\"chartType\":\"verticalBar\",\"colorScheme\":\"swimlane\"}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "8f191d5ea7f9028df5ec459826d4dd83",
					"traceparent": "00-8f191d5ea7f9028df5ec459826d4dd83-0bfdda1ae9073d54-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "8f191d5ea7f9028df5ec459826d4dd83:0bfdda1ae9073d54:0:00",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "0bfdda1ae9073d54",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #104
		res = http.post("https://qa-practical.qa.swimlane.io/api/search/",
			"{\"permissions\":{\"$type\":\"Core.Models.Security.PermissionMatrix, Core\",\"aOnAr9mbylnGzChgu\":{\"$type\":\"Core.Models.Security.Authorization, Core\",\"type\":\"Role\",\"id\":\"aOnAr9mbylnGzChgu\",\"name\":\"Practical\",\"access\":2,\"fields\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[Core.Models.Security.Access, Core]], System.Private.CoreLib\"}}},\"allowed\":[],\"groupBys\":[],\"aggregates\":[],\"applicationIds\":[\"aF5sqnNFCc36kO9_J\"],\"columns\":[\"aFPpUOs0uSrcRCKYZ\",\"aFjm80LnbJf780V6p\",\"aGMfQEKK_1G7WdqEK\",\"aGgc3qp6gt3dDR_na\",\"aG_YiSItNjs7vGALq\",\"aHdR_gHQmRT8ItVTL\",\"aHxOeHmCTIGd_hg1b\",\"aIaHwVkkr_seOK096\",\"aIuEa7EWYrg958AiM\",\"aJDBDjjIFiTemxLGc\",\"aJX7sLD3xZH9TlVps\",\"aJr4VxhqeQ4fAZgO7\",\"aKA19ZBcLGt9sNqxN\",\"aKTyoAgO27gfZC0Vd\",\"aKnvRnA9jzUAG0B3t\"],\"sorts\":{\"aHdR_gHQmRT8ItVTL\":\"ascending\"},\"filters\":[],\"$type\":\"Core.Models.Search.StatsReport, Core\",\"countByApplicationFacet\":false,\"pageSize\":14,\"offset\":0,\"defaultSearchReport\":true,\"createdDate\":\"2022-02-10T18:59:55.22Z\",\"modifiedDate\":\"2022-02-10T18:59:55.22Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"statsDrillin\":false,\"uid\":\"default-58145\",\"version\":1,\"id\":\"aSiaZ3NU8KWkeJN3E\",\"name\":\"Default\",\"disabled\":false,\"chartOptions\":{\"autoScale\":false,\"showLegend\":true,\"showLabels\":true,\"showXAxis\":true,\"showYAxis\":true,\"showXAxisLabel\":false,\"showYAxisLabel\":false,\"xAxisLabelText\":\"\",\"yAxisLabelText\":\"\",\"sort\":{\"directionD0\":\"labelAscending\",\"directionD1\":\"labelAscending\"},\"zoom\":false,\"explodeSlices\":false,\"showOtherGroup\":true,\"curveType\":\"Linear\",\"showAxis\":true,\"min\":0,\"max\":100,\"minRadius\":5,\"maxRadius\":50,\"units\":\"Total\",\"bigSegments\":10,\"smallSegments\":5,\"angleSpan\":240,\"startAngle\":-120,\"code\":\"\",\"gradient\":true,\"chartType\":\"verticalBar\",\"colorScheme\":\"swimlane\"}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "5e6bd82bb23f15357223f16bcfce7bf5",
					"traceparent": "00-5e6bd82bb23f15357223f16bcfce7bf5-49e5c8bdbd5e5a14-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "5e6bd82bb23f15357223f16bcfce7bf5:49e5c8bdbd5e5a14:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "49e5c8bdbd5e5a14",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #105
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #106
		res = http.post("https://qa-practical.qa.swimlane.io/api/search/",
			"{\"permissions\":{\"$type\":\"Core.Models.Security.PermissionMatrix, Core\",\"aOnAr9mbylnGzChgu\":{\"$type\":\"Core.Models.Security.Authorization, Core\",\"type\":\"Role\",\"id\":\"aOnAr9mbylnGzChgu\",\"name\":\"Practical\",\"access\":2,\"fields\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[Core.Models.Security.Access, Core]], System.Private.CoreLib\"}}},\"allowed\":[],\"groupBys\":[],\"aggregates\":[],\"applicationIds\":[\"aF5sqnNFCc36kO9_J\"],\"columns\":[\"aFPpUOs0uSrcRCKYZ\",\"aFjm80LnbJf780V6p\",\"aGMfQEKK_1G7WdqEK\",\"aGgc3qp6gt3dDR_na\",\"aG_YiSItNjs7vGALq\",\"aHdR_gHQmRT8ItVTL\",\"aHxOeHmCTIGd_hg1b\",\"aIaHwVkkr_seOK096\",\"aIuEa7EWYrg958AiM\",\"aJDBDjjIFiTemxLGc\",\"aJX7sLD3xZH9TlVps\",\"aJr4VxhqeQ4fAZgO7\",\"aKA19ZBcLGt9sNqxN\",\"aKTyoAgO27gfZC0Vd\",\"aKnvRnA9jzUAG0B3t\"],\"sorts\":{\"aHdR_gHQmRT8ItVTL\":\"ascending\"},\"filters\":[],\"$type\":\"Core.Models.Search.StatsReport, Core\",\"countByApplicationFacet\":false,\"pageSize\":14,\"offset\":0,\"defaultSearchReport\":true,\"createdDate\":\"2022-02-10T18:59:55.22Z\",\"modifiedDate\":\"2022-02-10T18:59:55.22Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"statsDrillin\":false,\"uid\":\"default-58145\",\"version\":1,\"id\":\"aSiaZ3NU8KWkeJN3E\",\"name\":\"Default\",\"disabled\":false,\"chartOptions\":{\"autoScale\":false,\"showLegend\":true,\"showLabels\":true,\"showXAxis\":true,\"showYAxis\":true,\"showXAxisLabel\":false,\"showYAxisLabel\":false,\"xAxisLabelText\":\"\",\"yAxisLabelText\":\"\",\"sort\":{\"directionD0\":\"labelAscending\",\"directionD1\":\"labelAscending\"},\"zoom\":false,\"explodeSlices\":false,\"showOtherGroup\":true,\"curveType\":\"Linear\",\"showAxis\":true,\"min\":0,\"max\":100,\"minRadius\":5,\"maxRadius\":50,\"units\":\"Total\",\"bigSegments\":10,\"smallSegments\":5,\"angleSpan\":240,\"startAngle\":-120,\"code\":\"\",\"gradient\":true,\"chartType\":\"verticalBar\",\"colorScheme\":\"swimlane\"}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "b0989d7da15a1b3eeef758ffa482db2b",
					"traceparent": "00-b0989d7da15a1b3eeef758ffa482db2b-5f5aacc2d18e0ab8-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "b0989d7da15a1b3eeef758ffa482db2b:5f5aacc2d18e0ab8:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "5f5aacc2d18e0ab8",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #107
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"20a4738701deeaa182ce4941e37b5f5a\",\"spanId\":\"ad07d8e0f4a1a00a\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856593903700000,\"endTimeUnixNano\":1644856594071900000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/reports/aSiaZ3NU8KWkeJN3E\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":769}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":1533}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856593903700000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593903900000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593904500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593905500000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594001700000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594002100000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594071900000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"5e6bd82bb23f15357223f16bcfce7bf5\",\"spanId\":\"49e5c8bdbd5e5a14\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856593959200000,\"endTimeUnixNano\":1644856594097199900,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/search/\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1766}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":18255}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856593959300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593959599900,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593960500000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856593961600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594073100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594074200000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594097199900,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"b0989d7da15a1b3eeef758ffa482db2b\",\"spanId\":\"5f5aacc2d18e0ab8\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856594110800000,\"endTimeUnixNano\":1644856594304100000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/search/\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1766}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":18255}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856594110800000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594111300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594112100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594113300000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594228800000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594229600000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856594304100000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #108
		res = http.get("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record/" + recordId + "",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "d0bb858bfcb8d773195de61048d07364",
					"traceparent": "00-d0bb858bfcb8d773195de61048d07364-944b9f33b67c3813-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "d0bb858bfcb8d773195de61048d07364:944b9f33b67c3813:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "944b9f33b67c3813",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #109
		res = http.get("https://qa-practical.qa.swimlane.io/api/workflow/aF5sqnNFCc36kO9_J",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "c0a0b1658862171e4703e3699402f57f",
					"traceparent": "00-c0a0b1658862171e4703e3699402f57f-539ee9dc97c59853-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "c0a0b1658862171e4703e3699402f57f:539ee9dc97c59853:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "539ee9dc97c59853",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #110
		res = http.post("https://qa-practical.qa.swimlane.io/api/task/execute/record",
			"{\"taskId\":\"a4X7xppBj1J9UkVVo\",\"record\":{\"$type\":\"Core.Models.Record.Record, Core\",\"name\":\"NES-54\",\"allowed\":[],\"trackingId\":54,\"trackingFull\":\"NES-54\",\"applicationId\":\"aF5sqnNFCc36kO9_J\",\"isNew\":false,\"values\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"aFjm80LnbJf780V6p\":\"Orlando\",\"aGgc3qp6gt3dDR_na\":\"\",\"aG_YiSItNjs7vGALq\":\"\",\"aHdR_gHQmRT8ItVTL\":\"NewUser\",\"aHxOeHmCTIGd_hg1b\":\"TEST123\",\"aIaHwVkkr_seOK096\":\"\",\"aJDBDjjIFiTemxLGc\":\"\",\"aJX7sLD3xZH9TlVps\":\"\",\"aJr4VxhqeQ4fAZgO7\":\"\",\"5fed3a0c7571db02a9226400\":9,\"aKnvRnA9jzUAG0B3t\":\"NES-54\",\"aG2imcqZIAScppfg4\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}},\"repeatFieldCurrentValues\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\"},\"actionsExecuted\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib\",\"60ff08fa481377f08703b9eb\":{\"$type\":\"Core.Models.Workflow.History.ActionHistory, Core\",\"jobId\":\"aWZ3i6ZUX6BPTqST2\",\"userId\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"dateExecuted\":\"2022-02-14T16:36:27.619Z\"}},\"visualizations\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"applicationRevision\":1,\"locked\":false,\"comments\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib\"},\"createdDate\":\"2022-02-14T16:36:27.635Z\",\"modifiedDate\":\"2022-02-14T16:36:32.058Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"},\"sessionTimeSpent\":0,\"totalTimeSpent\":9,\"timeTrackingEnabled\":true,\"isHangfireCreatedAndUnpersisted\":false,\"infiniteLoopFlag\":false,\"id\":\"" + recordId + "\",\"disabled\":false,\"readOnly\":false,\"coeditSession\":{\"editors\":[{\"id\":\"aXB5wwKEYfJWTWHzw\",\"name\":\"orhan.demirci\"}],\"values\":{},\"fields\":{}}}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "6a230689bc795b75309df3712f269526",
					"traceparent": "00-6a230689bc795b75309df3712f269526-b2afec6ee7e18b4f-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "6a230689bc795b75309df3712f269526:b2afec6ee7e18b4f:0:00",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "b2afec6ee7e18b4f",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #111
		res = http.get("https://qa-practical.qa.swimlane.io/api/history?type=Records&id=" + recordId + "",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "95ec24f3fcc3ee0b41e2db577a8d2c7a",
					"traceparent": "00-95ec24f3fcc3ee0b41e2db577a8d2c7a-8465b46e57efdcb2-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "95ec24f3fcc3ee0b41e2db577a8d2c7a:8465b46e57efdcb2:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "8465b46e57efdcb2",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #112
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/skin.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #113
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/ui/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #114
		res = http.get("https://qa-practical.qa.swimlane.io/dist/tinymce/skins/content/swimlane/content.min.css",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "style",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #115
		res = http.post("https://qa-practical.qa.swimlane.io/api/search/",
			"{\"permissions\":{\"$type\":\"Core.Models.Security.PermissionMatrix, Core\",\"aOnAr9mbylnGzChgu\":{\"$type\":\"Core.Models.Security.Authorization, Core\",\"type\":\"Role\",\"id\":\"aOnAr9mbylnGzChgu\",\"name\":\"Practical\",\"access\":2,\"fields\":{\"$type\":\"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[Core.Models.Security.Access, Core]], System.Private.CoreLib\"}}},\"allowed\":[],\"groupBys\":[],\"aggregates\":[],\"applicationIds\":[\"aF5sqnNFCc36kO9_J\"],\"columns\":[\"aFPpUOs0uSrcRCKYZ\",\"aFjm80LnbJf780V6p\",\"aGMfQEKK_1G7WdqEK\",\"aGgc3qp6gt3dDR_na\",\"aG_YiSItNjs7vGALq\",\"aHdR_gHQmRT8ItVTL\",\"aHxOeHmCTIGd_hg1b\",\"aIaHwVkkr_seOK096\",\"aIuEa7EWYrg958AiM\",\"aJDBDjjIFiTemxLGc\",\"aJX7sLD3xZH9TlVps\",\"aJr4VxhqeQ4fAZgO7\",\"aKA19ZBcLGt9sNqxN\",\"aKTyoAgO27gfZC0Vd\",\"aKnvRnA9jzUAG0B3t\"],\"sorts\":{\"aHdR_gHQmRT8ItVTL\":\"ascending\"},\"filters\":[],\"$type\":\"Core.Models.Search.StatsReport, Core\",\"countByApplicationFacet\":false,\"pageSize\":7,\"offset\":0,\"defaultSearchReport\":true,\"createdDate\":\"2022-02-10T18:59:55.22Z\",\"modifiedDate\":\"2022-02-10T18:59:55.22Z\",\"createdByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"modifiedByUser\":{\"$type\":\"Core.Models.Utilities.UserGroupSelection, Core\",\"id\":\"aGMLnDjS6DDKCo4jP\",\"name\":\"admin\"},\"statsDrillin\":false,\"uid\":\"default-58145\",\"version\":1,\"id\":\"aSiaZ3NU8KWkeJN3E\",\"name\":\"Default\",\"disabled\":false,\"chartOptions\":{\"autoScale\":false,\"showLegend\":true,\"showLabels\":true,\"showXAxis\":true,\"showYAxis\":true,\"showXAxisLabel\":false,\"showYAxisLabel\":false,\"xAxisLabelText\":\"\",\"yAxisLabelText\":\"\",\"sort\":{\"directionD0\":\"labelAscending\",\"directionD1\":\"labelAscending\"},\"zoom\":false,\"explodeSlices\":false,\"showOtherGroup\":true,\"curveType\":\"Linear\",\"showAxis\":true,\"min\":0,\"max\":100,\"minRadius\":5,\"maxRadius\":50,\"units\":\"Total\",\"bigSegments\":10,\"smallSegments\":5,\"angleSpan\":240,\"startAngle\":-120,\"code\":\"\",\"gradient\":true,\"chartType\":\"verticalBar\",\"colorScheme\":\"swimlane\"}}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "bce935860199d41f29164280a92a81d3",
					"traceparent": "00-bce935860199d41f29164280a92a81d3-25841bc9cb12f40c-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "bce935860199d41f29164280a92a81d3:25841bc9cb12f40c:0:01",
					"content-type": "application/json;charset=UTF-8",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "25841bc9cb12f40c",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #116
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"d0bb858bfcb8d773195de61048d07364\",\"spanId\":\"944b9f33b67c3813\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856601702300000,\"endTimeUnixNano\":1644856601807000000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/app/aF5sqnNFCc36kO9_J/record/" + recordId + "\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":839}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":2386}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856601702300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601702700000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601703000000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601704800000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601800500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601800900000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601807000000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"c0a0b1658862171e4703e3699402f57f\",\"spanId\":\"539ee9dc97c59853\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856601716800000,\"endTimeUnixNano\":1644856601858400000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"https://qa-practical.qa.swimlane.io/api/workflow/aF5sqnNFCc36kO9_J\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1551}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":6836}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856601716800000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717000000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601717400000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601718700000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601815000000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601815400000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856601858400000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"95ec24f3fcc3ee0b41e2db577a8d2c7a\",\"spanId\":\"8465b46e57efdcb2\",\"name\":\"HTTP GET\",\"kind\":3,\"startTimeUnixNano\":1644856602002000000,\"endTimeUnixNano\":1644856602442300000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"GET\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/history?type=Records&id=" + recordId + "\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1021}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":6010}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856602002000000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602002700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602004600000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602100100000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602100700000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602442300000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0},{\"traceId\":\"bce935860199d41f29164280a92a81d3\",\"spanId\":\"25841bc9cb12f40c\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856602976000000,\"endTimeUnixNano\":1644856603117200000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/search/\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":1647}},{\"key\":\"http.response_content_length_uncompressed\",\"value\":{\"intValue\":15912}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":200}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856602976000000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976300000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602976700000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856602978400000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856603098799900,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856603099300000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856603117200000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #117
		res = http.del("https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record/" + recordId + "",
			"",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "d9595d78901e721e1691ba71bccfab8f",
					"traceparent": "00-d9595d78901e721e1691ba71bccfab8f-de80deffe3231574-00",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "d9595d78901e721e1691ba71bccfab8f:de80deffe3231574:0:00",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "de80deffe3231574",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "0",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "delete record returns 204": (r) => r.status === 204 });
		console.log(`Deleted record with username==>${firstname} and lastname==>${lastname} created`)
		// Request #118
		res = http.get("https://qa-practical.qa.swimlane.io/dist/34.a0a835fb4f74d0e58dac.chunk.js",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "script",
					"referer": "https://qa-practical.qa.swimlane.io/logout",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #119
		res = http.get("https://qa-practical.qa.swimlane.io/dist/7684cc289299bc8839b3ab2359e493bb.ico",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/logout",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #120
		res = http.post("https://qa-practical.qa.swimlane.io/api/user/logout",
			"",
			{
				"cookies": {
					".AspNetCore.Identity.Application": "CfDJ8DqFlAGawyNFmQbnSDm-ZXyNlfHf_MYCLoeXDJ7AC3In2xmIX28O7Ez1Q1xGaeBDoVEAW-J4eKlRllsDMe2gVEJMx_sOyhPxM2HGJuVRk8_OWpvvDCfMb5Q5-z1epuZd2WBpEkQCSuD_lh1brzj4PrjzWp2oJmXl9DWTse7I-L8B70PXAN2IsWQum92rA5mbJj9HCRcSeLBoJAf3xCysBCzX7cD135joxviSSjDPOVNXwcqwxxMWqV1c5-GdM9cReykmfE1mXz5PV-PE4MuXefbQxQVWH4hyWkTLk9HgZC-1hYdQostsyGy6T5LyUlIUr9A_JrDUqtQBPIZ8ZFvHao2_L8U2V1MIPEdiRb2M_dBsL3mK2TUbyHsj9oypgdDFZSWLCTiWr_CqZgj1CYpo-uVne8GxsC4hJFES7fMDDPXlz6cikMMVSvumHTMkOCgnvo25f975Q-9oMsEGzf3FTrrcxS4HqIacSj74nW2Zc13Bxu68WgxDzD5QXxElkR0M0CRHeQj20xvODDxZ-INMK5k_JGSnYrptLPYUbtpN7MvQMKAixRUI2yHOjtHFgY8w3zMadEFxdt_qrAAJX2wh_5s"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"x-b3-traceid": "0223914922e6aa3d71c9533300d9df6a",
					"traceparent": "00-0223914922e6aa3d71c9533300d9df6a-20482093d22c319c-01",
					"sec-ch-ua-mobile": "?0",
					"authorization": "Bearer " + token + "",
					"uber-trace-id": "0223914922e6aa3d71c9533300d9df6a:20482093d22c319c:0:01",
					"accept": "application/json, text/plain, */*",
					"x-b3-spanid": "20482093d22c319c",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"x-b3-sampled": "1",
					"timezone": "America/New_York",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/logout",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 204": (r) => r.status === 204 });
		// Request #121
		res = http.get("https://qa-practical.qa.swimlane.io/dist/d7e489cbceea2ac416088e7d6ab24850.svg",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/logout",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #122
		res = http.get("https://qa-practical.qa.swimlane.io/dist/62a247d96ec3b6e47c17529a28aa4e20.svg",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"accept": "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://qa-practical.qa.swimlane.io/dist/styles.a0a835fb4f74d0e58dac.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
		// Request #123
		res = http.post("https://qa-practical.qa.swimlane.io/otel/v1/traces",
			"{\"resourceSpans\":[{\"resource\":{\"attributes\":[{\"key\":\"service.name\",\"value\":{\"stringValue\":\"Swimlane.Frontend\"}},{\"key\":\"telemetry.sdk.language\",\"value\":{\"stringValue\":\"webjs\"}},{\"key\":\"telemetry.sdk.name\",\"value\":{\"stringValue\":\"opentelemetry\"}},{\"key\":\"telemetry.sdk.version\",\"value\":{\"stringValue\":\"0.24.0\"}}],\"droppedAttributesCount\":0},\"instrumentationLibrarySpans\":[{\"spans\":[{\"traceId\":\"0223914922e6aa3d71c9533300d9df6a\",\"spanId\":\"20482093d22c319c\",\"name\":\"HTTP POST\",\"kind\":3,\"startTimeUnixNano\":1644856623016300000,\"endTimeUnixNano\":1644856623173200000,\"attributes\":[{\"key\":\"http.method\",\"value\":{\"stringValue\":\"POST\"}},{\"key\":\"http.url\",\"value\":{\"stringValue\":\"api/user/logout\"}},{\"key\":\"http.response_content_length\",\"value\":{\"intValue\":0}},{\"key\":\"http.status_code\",\"value\":{\"intValue\":204}},{\"key\":\"http.status_text\",\"value\":{\"stringValue\":\"\"}},{\"key\":\"http.host\",\"value\":{\"stringValue\":\"qa-practical.qa.swimlane.io\"}},{\"key\":\"http.scheme\",\"value\":{\"stringValue\":\"https\"}},{\"key\":\"http.user_agent\",\"value\":{\"stringValue\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50\"}}],\"droppedAttributesCount\":0,\"events\":[{\"timeUnixNano\":1644856623016300000,\"name\":\"open\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623016500000,\"name\":\"send\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"fetchStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"domainLookupStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"domainLookupEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"connectStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"secureConnectionStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623017100000,\"name\":\"connectEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623018100000,\"name\":\"requestStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623146500000,\"name\":\"responseStart\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623147500000,\"name\":\"responseEnd\",\"attributes\":[],\"droppedAttributesCount\":0},{\"timeUnixNano\":1644856623173200000,\"name\":\"loaded\",\"attributes\":[],\"droppedAttributesCount\":0}],\"droppedEventsCount\":0,\"status\":{\"code\":0},\"links\":[],\"droppedLinksCount\":0}],\"instrumentationLibrary\":{\"name\":\"@opentelemetry/instrumentation-xml-http-request\",\"version\":\"0.24.0\"}}]}]}",
			{
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Microsoft Edge\";v=\"98\"",
					"accept": "application/json",
					"content-type": "application/json",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50",
					"sec-ch-ua-platform": "\"Windows\"",
					"origin": "https://qa-practical.qa.swimlane.io",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://qa-practical.qa.swimlane.io/logout",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		)
		check(res, { "status is 200": (r) => r.status === 200 });
	});

}
