const buf1 = Buffer.from([1, 2, 3, 4, 5, 6]);
const json = JSON.stringify(buf1);
const jsontest = buf1.toJSON();

console.log('josn: ' + json);
console.log('josntest: ' + jsontest);
console.log('josntest: ' + JSON.stringify(jsontest));

console.log('json.Buffer: ' + json.type); //undefined
console.log('jsontest.Buffer: ' + jsontest.type); //Buffer

console.log('json[\'data\']: ' + json['data']); //undefined
console.log('jsontest[\'data\']: ' + jsontest['data']); //Buffer

const copy = JSON.parse(json, (key, value) => {
    console.log('key: ' + key + ', value: ' + value + ', value.type: ' + value.type + ', value.data: ' + value.data);
    if (value && value.type === 'Buffer') console.log(Buffer.from(value.data));
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);

var test = function(key, value) {
    console.log('key: ' + key + ', value: ' + value);
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
}
const copy2 = JSON.parse(json, function(key, value) {
    test(key, value);
});
console.log(copy2);

const copy3 = JSON.parse(json);
console.log(copy3);