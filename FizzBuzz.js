for(i=1; i<101; i++) {
    string='';
    if (i % 3 == 0) string = 'fizz';
    if (i % 5 == 0) string += 'buzz';
    string ? console.log(string) : console.log(i);
}