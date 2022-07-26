import React from 'react';
import ReactDOM from 'react-dom';
import { Teacher } from './Teacher';
import { Person } from './Person';
const element = <h1>Hello World</h1>;
//console.log(element);
ReactDOM.render(element,document.getElementById('root'));

const person = new Person('Michael');
console.log(person);

const techer = new Teacher('MIke', 'MSc');
console.log(techer);