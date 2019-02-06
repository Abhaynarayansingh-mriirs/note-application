         //automatic modules//
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

        //user made modules//
const add = require('./add.js');

const argv = yargs.argv;
const input = process.argv[2];
console.log('yargs', argv);
if (input=== 'add') {
    var note =  add.add(argv.title,argv.body);

if (note) {
   console.log('printing value');
   console.log('---');
   console.log(`the title is ${note.title}`);
   console.log(`the body is ${note.body}`);
   
} else {
    console.log('title already exists');
}
 }
 else if(input=== 'list') {
    console.log('input is for list');
    add.list();
}
else if(input=== 'remove') {
    console.log('input is for remove');
    add.remove(argv.title);
}
else{
    console.log('waiting for right command');
}
 