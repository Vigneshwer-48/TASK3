//json using for in loop

var obj1={
    "name":"john doe",
    "age":"23",
    "salary":"33.33"
  };
  console.log(obj1.name);
  for(var key in obj1){
  console.log(key,obj1[key]);
  }
 
  //json using for loop

var arr1=[
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
  
      "id": 2,
      "title": "qui est esse"
    },
    {
    
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    },
    {
     
      "id": 4,
      "title": "eum et est occaecati"
    }];

    for(var i=0;i<arr1.length;i++){
        console.log(arr1[i].id);
        }
        
 
        //   var resume {
        //     "name": "Vigneshwer J",
        //     "email": "vickynanban48@gmail.com",
        //     "location": {
        //       "city": "Chennai",
        //       "countryCode": "IN"
        //     },
        //     "profiles": [
        //       {
        //         "url": "https://github.com/Vigneshwer-48",
        //         "username": "Vigneshwer-48",
        //         "network": "github"
        //       }
        //     ]
        //   },
        //   "education": [
        //     {
        //        "institution": "Sri Venkateswara Institute of Science and Technology",
        //        "area": "Electronic Communication Engineering",
        //       "studyType": "Bachelors",
        //     }
        //   ],
      
        //   "skills": [
        //     {
        //       "keywords": [
        //         "HTML",
        //         "CSS",
        //         "Javascript / Typescript",
        //         "React",
      
        //       ],
        //       "level": "Senior",
        //       "name": "Frontend"
        //     },
      
        //   ],
      
        //   "work expirience": [
        //     {
        //       "name": "Sutherland Global Service",
        //       "location": "Chennai",
        //       "position": "Technical support",
        //       "startYear": "Jan 2017",
        //     },
      
      
        //   ],
        //   "interests": [
        //     {
        //       "name": "Travelling"
        //     },
        //     {
        //       "name": "Music"
        //     },
        //     {
        //       "name": "Web series"
        //     },
        //     {  
        //       "name": "Open Source"
        //     }
        //   ]
        // }
      