import React from 'react';


const Display=(props)=>{
  
 
    const renderItem =({datalist})=>{
        
        if(datalist){
            return datalist.map((item)=>{
               
                return(
                   
                       <div key={item.id}>
                         <div className="container">
                        <h3>Name: {item.real_name}</h3>
                        <p>Place: {item.tz}</p>
                        
  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Click Me</button>


  <div className="modal fade" id="myModal" role="dialog">

    <div className="modal-dialog">
    <div className="modal-content">
     
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Displays
all the time ranges during which they were active </h4>
        </div>
        <div className="modal-body">
                <p>Start Time: {item.activity_periods[0].start_time}</p>
                <p>End Time: {item.activity_periods[0].end_time}</p>
                <p>Start Time: {item.activity_periods[1].start_time}</p>
                <p>End Time: {item.activity_periods[1].end_time}</p>
                <p>Start Time: {item.activity_periods[2].start_time}</p>
                <p>End Time: {item.activity_periods[2].end_time}</p>
               
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    
    </div>
  </div>
  
</div>
    </div>
         )
     })
 }
  }
    return(
        <div>
            {renderItem(props)}
        </div>
    )
    
}

export default Display;