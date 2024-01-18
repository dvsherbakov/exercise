const domainName = url => url.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n.]+)/)[1]

const domainName1 = url =>  url.replace(/.*\/\/|www.|\..*/g, ``)

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName1("www.xakep.ru"), "xakep");
console.log(domainName1("https://youtube.com"), "youtube");

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string