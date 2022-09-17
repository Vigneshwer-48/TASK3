
var object1 = {
    name: 'Person 1',
    age: '5'
  };
      
  var object2 = {

    age: '5',
    name: 'Person 2'
  };
  JSON.stringify(object1) === JSON.stringify(object2)
      
  console.log(object1, object2);
  

  var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
};
