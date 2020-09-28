//Modifing object, insert new key
function insert(object, keyName, value) {
    const key = keyName;
    object[key] = value;
    return object
}

let jobs = {
    firstName : 'Steev',
    lastName: 'jobs'
}

console.log(insert(jobs, 'job', 'ceo'));