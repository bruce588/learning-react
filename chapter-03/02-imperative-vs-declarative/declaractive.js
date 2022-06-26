/*
Create by rabbi on 2022/6/26 
*/


const doStuff = _.compose(
    join(' '),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
)

doStuff('Welcome to FP world');