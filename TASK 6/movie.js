class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(arr){
        let pgfilms=arr.filter((ele)=>ele.rating=="PG");
        return pgfilms;
        //console.log(pgfilms);
    }

}
    var a=new movie("Avengers Endgame", "Marvel Studios");
    var b=new movie("Spiderman Into the Spiderverse", "Sony Pictures", "PG");
    var c=new movie("Batman","DC","G");
    console.log(movie.getPG([a,b,c]));

    var d=new movie("Casino Royale","Eon Production","PG13");
    console.log(d);


