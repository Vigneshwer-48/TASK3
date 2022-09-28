var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
//a.Get all the countries from the Asia continent /region using the Filter function
    var region=result.filter((ele)=>ele.region=="Asia");
    console.log(region);
//b.Get all the countries with a population of less than 2 lakhs using Filter function
    var pop=result.filter((ele)=>ele.population<200000);
    console.log(pop);
//c.Print the following details name, capital, flag using forEach function

//d.Print the total population of countries using reduce function
    var pop1=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(pop1);
//e.Print the country which uses US Dollars as currency.
    var currency=result.filter((ele)=>ele.currencies)//.map((ele)=>ele.code="USD");
    console.log(currency);
}