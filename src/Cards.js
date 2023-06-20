function Cards(){
    const img1 = require('../src/img/redcar.jpg');
    var items = [ 
      { header: "Card title 1", description: "Holy shit", img: img1 },
      { header: "Card title 2", description: "Holy shit", img: img1 },
      { header: "Card title 3", description: "Holy shit", img: img1 }
   ]
  
   const listItems = items.map((number) =>
   <div class="col-md-4 pb-5">
   <div class="card">
     <img class="card-img-top" src={img1} alt="Card image cap"/>
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <a href="#" class="btn btn-primary">Know more</a>
     </div>
   </div>
   </div>
   );
    
    return (
      <div class="container">
        <div class="row">      
          {listItems}
        </div>
        </div>
    );
  }