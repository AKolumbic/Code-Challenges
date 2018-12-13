function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

// To address those who want the "root domain," use this function:
function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain 
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

//test the code
console.log("== Testing extractHostname: ==");
console.log(extractHostname("http://www.blog.classroom.me.uk/index.php"));
console.log(extractHostname("http://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("https://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("ftps://ftp.websitename.com/dir/file.txt"));
console.log(extractHostname("websitename.com:1234/dir/file.txt"));
console.log(extractHostname("ftps://websitename.com:1234/dir/file.txt"));
console.log(extractHostname("example.com?param=value"));
console.log(extractHostname("https://facebook.github.io/jest/"));
console.log(extractHostname("//youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("http://localhost:4200/watch?v=ClkQA2Lb_iE"));

//test extractRootDomain
console.log("== Testing extractRootDomain: ==");
console.log(extractRootDomain("http://www.blog.classroom.me.uk/index.php"));
console.log(extractRootDomain("http://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractRootDomain("https://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractRootDomain("www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractRootDomain("ftps://ftp.websitename.com/dir/file.txt"));
console.log(extractRootDomain("websitename.com:1234/dir/file.txt"));
console.log(extractRootDomain("ftps://websitename.com:1234/dir/file.txt"));
console.log(extractRootDomain("example.com?param=value"));
console.log(extractRootDomain("https://facebook.github.io/jest/"));
console.log(extractRootDomain("//youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractRootDomain("http://localhost:4200/watch?v=ClkQA2Lb_iE"));