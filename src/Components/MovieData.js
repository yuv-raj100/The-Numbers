

export default function MovieData(props){
    const rating=props.ratings.map((s)=>{
        var src=s.Source
        var val=s.Value
        if(src==="Internet Movie Database")
            src="IMDB"
        return <h3 key={val} className="rating-bg">{src}: {val}</h3>
    }) 
    const str=props.genre
    var s=[];
    var strt=0;
    for(var i=0;i<str.length;i++){
        if(str[i]===','){
            var temp=str.slice(strt,i);
            s.push(temp)
            strt=i+2
        }
    }
    var temp=str.slice(strt,str.length)
    s.push(temp)

    const genre=s.map((i)=>{
        return <h3 key={i} className="genre">{i}</h3>
    })

    var money=props.box.substring(1);
    var num = parseFloat(money.replaceAll(',', ''));
    num=Math.round(((num)*80)/10000000);

    return(
        <div className="content">
           
            <div className="poster">
                <img src={props.poster} alt="" className="poster-img"/>
            </div>

            <div className="rating" >

               
                <div className="title">
                    <h1 className="title-heading">{props.title}</h1>
                    {genre}
                </div>
                
                <br/>
                <div id="rate">{rating}</div>
                <br/>
                
            </div>
           
                <div className="info">

                    <p className="plot">{props.plot}</p>
                    <div className="info-div">

                        <div className="part1">
                            <p className="gap"><b>Released:</b> {props.release}</p>
                            <p className="gap"><b>Awards:</b> {props.award}</p>
                            <p className="gap"><b>Casts:</b> {props.cast}</p>
                        </div>

                        <div className="part2">
                            <p className="gap"><b>Duration:</b> {props.duration}</p>
                            <p className="gap"><b>Country:</b> {props.country}</p>
                            <p className="gap"><b>Box Office:</b> {num}Cr</p>
                        </div>
                        
                    </div>
                   
                </div>

        </div>
    )
}