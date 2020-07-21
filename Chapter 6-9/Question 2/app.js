var a = 2, b = 1;
var result = --a - --b + ++b + b--;//a=1 - b=1 + b=2 + 2: 1-1+2+2=4 
// Explanation the output at each stage: 
// --
// a; a=2
// --a - --b; a=1 - b=0 = 1; 
// --a - --b + ++b; (--a - --b)=1 + b=1: 2 
// --a  - --b + ++b + b--;  (-a - --b=1 + b=1)= 2 + b=1: 3
document.write('a is '+ a);
document.write('<br>b is '+ b); 
document.write('<br>Result is '+result); 
