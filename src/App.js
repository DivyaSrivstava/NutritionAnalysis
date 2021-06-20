import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      cal:[],
      roe:[],
     
      input:'',
      str:'',
      url:'',
      fat:'',satfat:'',chole:'',na:'',carb:'',fiber:'',sug:'',pro:'',vit:'',ca:'',iron:'',pots:'',   
      totfat:'',totsatfat:'',totchole:'',totna:'',totcarb:'',totfiber:'',totsug:'',totpro:'',totvit:'',totca:'',totiron:'',totpots:'',     
       showing:false,
       new_recipe:false
       
      
    };
  }

  // window.onLoad = () => {
  //   $(".extra").hide();
  // };

  // $(document).ready(function =() =>{    
  //   $("#ana_button").click(function(){
  //     $(".extra").show();
  //   });
  // });


     getData = e =>{
       this.setState({input:e.target.value})
     }
    

     analysis = () =>{
      
    if ( this.state.input === ''){
      alert('Enter an ingredient like"1 cup rice, 10 oz chickpeas')
    }else{

      this.showing=true;
       let api='https://api.edamam.com/api/nutrition-data?app_id=0c843e35&app_key=18790343eb37093a195a8d8c998b5d2b&ingr='
       this.str=this.state.input;
       this.url=api+this.str;
      this.updateData();

       
     }
    }
  

     updateData = () =>{
  
      
       fetch(this.url)
       .then(response =>{
         return response.json()
        
       })
       .then(response =>{
        this.setState({data:response})
          this.setState({cal:response.calories,fat:response.totalNutrients.FAT,satfat:response.totalNutrients.FASAT,
            chole:response.totalNutrients.CHOLE,na:response.totalNutrients.NA, carb:response.totalNutrients.CHOCDF,
            fiber:response.totalNutrients.FIBTG,sug:response.totalNutrients.SUGAR,
            pro:response.totalNutrients.PROCNT,vit:response.totalNutrients.VITD,
            ca:response.totalNutrients.CA,iron:response.totalNutrients.FE,pots:response.totalNutrients.K})

            this.setState({totfat:response.totalDaily.FAT,totsatfat:response.totalDaily.FASAT,
              totchole:response.totalDaily.CHOLE,totna:response.totalDaily.NA, totcarb:response.totalDaily.CHOCDF,
              fiber:response.totalDaily.FIBTG,totpro:response.totalDaily.PROCNT,totvit:response.totalDaily.VITD,
              totca:response.totalDaily.CA,totiron:response.totalDaily.FE,totpots:response.totalDaily.K})
              this.setState({weight:response.totalWeight})

             

       })
       
      }
      reset= () =>
      {
        this.showing=false;
        this.setState({input:''})
      }


     
  

     
 





  render(){
    return (
      
      <div>
       
        <section>
          <div className="back_img">
          <h1 className="heading">Nutrition Chart</h1>
            <div className="container ">
            <div class="row">
            <div class=" col-md-12 ">
                    <div class="card">
                    
                      
                        <div class="card-body ">
                            <h1 class="nut_head text-center">Nutrition Analysis API Demo</h1>
                            <p class="text-center">Enter an ingredient list list for what you are cooking, like<span  style={{color:'rgba(7, 165, 21)'}}>"1 cup rice, 10 oz chickpeas"</span> , etc.</p>
                            <p class="text-center">Enter each ingredient on a new line.</p>
                        </div>
                      </div>
                      
                        
                    </div>
                </div>
            
              <div className="row">
                <div className="col-md-7">
                <div>
                   <div className="form-group">
                           <textarea  className="form-control" value={this.state.input} onChange={this.getData} id="datanutri" cols="10" rows="10" ></textarea>
                       </div>
                      
                       <div className="form-group col-md-12  mt-6">
                        
                        <button className="btn btn-success" onClick={this.analysis} id="ana_button">Analyze</button>&nbsp;&nbsp;

                     
                      <button  type="reset" className="btn btn-success extra " onClick={this.reset} id="anaa_button" style={{display:this.showing?"inline":"none"}}   >New Recipe</button>  
                    </div>
                  </div>

                  <div  style={{display:this.showing?"inline":"none"}} >
                  <p className="caution text-center" style={{color:'red'}}>
                  We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients

                 </p>
                 </div>

                  <div  style={{display:this.showing?"inline":"none"}} >
                  <p className=" ingd-quote" >
                  <sapn style={{color:'red'}}>TO ENSURE GOOD HEALTH:</sapn>   “ EAT LIGHTLY, BREATHE DEEPLY, LIVE MODERATELY, CULTIVATE CHEERFULNESS AND MAINTAIN AN INTEREST IN LIFE.”

                 </p>
            </div>
            </div>
                
               
                  <div className="col-md-5 " style={{ display:this.showing?"block":"none" }} >
                    <div className=" container">
                    <div className="col-md-11 extra"style={{border:'3px solid black' }}>
                   
                    <h1 className="text-center">Nutrition Facts</h1>
                    <hr style={{border:'8px solid black'}} ></hr>
                   
                    <table className="table responsive ">
                      <thead>
                        <tr>
                           <th colSpan="3">Amount Per Serving</th>
                         </tr>
                   </thead>
                   <tbody>
                    <tr style={{borderBottom:'8px solid black' }}>
                        <td colSpan="2" style={{fontSize:' xx-large'}}><b>Calories</b></td>
                        <td id="cal"  className="textRight">{this.state.cal}</td>
                    </tr>
                    <tr >
                        <td colSpan="3" className="text-right"> <b>% Daily Value*</b> </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{fontSize:' large'}}><b>Total Fats</b> {this.state.fat.quantity}{this.state.fat.unit}</td>
                        <td id="totalFats" className="text-right">{Math.round(this.state.totfat.quantity)}{this.state.totfat.unit}</td>
                    </tr>
                    <tr >
                        <td id="saturated" colSpan="2">saturated Fats{this.state.satfat.quantity}{this.state.satfat.unit}</td> 
                        <td  id="totalsaturated"className="text-right">{Math.round(this.state.totsatfat.quantity)}{this.state.totsatfat.unit}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Trans Fats-</td>
                        <td className="text-right"></td>
                    </tr>
                    <tr>
                        <td id="chole" colSpan="2" style={{fontSize:' xlarge'}}><b>Cholestrol</b>{this.state.chole.quantity}{this.state.chole.unit}</td>
                        <td id="totalcholestrol"  className="text-right"><b>{Math.round(this.state.totchole.quantity)}{this.state.totchole.unit}</b></td>
                    </tr>
                    <tr  >
                        <td id="sodium"  colSpan="2"  style={{fontSize:' xlarge'}}><b>Sodium</b>{this.state.na.quantity}{this.state.na.unit}</td>
                        <td id="totalsodium" className="text-right"><b>{Math.round(this.state.totna.quantity)}{this.state.totna.unit}</b></td>
                    </tr>
                    <tr>
                        <td id="carbohydrate"colSpan="2"  style={{fontSize:' large'}}><b>Carbohydrate</b>{this.state.carb.quantity}{this.state.carb.unit}</td>
                        <td id="totalcarbohydrate"  className="text-right"><b> {Math.round(this.state.totcarb.quantity)}{this.state.totcarb.unit}</b></td>
                    </tr>
                    <tr>
                        <td id="fiber" colSpan="2">DeitryFIbers -</td>
                        <td > -</td>
                        
                    </tr>
                   
                    <tr>
                        <td id="sugar"  colSpan="2">Sugar - </td>
                        <td > - </td>
                       
                    </tr>
                    <tr> 
                        <td colSpan="2">Include-Added Sugars</td>
                        <td id="" className="textRight"></td>
                    </tr>
                    <tr>
                        <td  id="protein" colSpan="2"  style={{fontSize:'large'}}><b>Protein</b>{this.state.pro.quantity}{this.state.pro.unit}</td>
                        <td id="totalprotein" className="text-right"><b>{Math.round(this.state.totpro.quantity)}{this.state.totpro.unit}</b></td>
                    </tr>
                </tbody>
            </table>

            <table className="table responsive">
                <tbody>
                    <tr>
                        <td  id="vitamin">Vitamin{this.state.vit.quantity}{this.state.vit.unit}</td>
                        <td  id="totalvitamin"className="text-right">{Math.round(this.state.totvit.quantity)}{this.state.totvit.unit}</td>
                    </tr>
                    <tr>
                        <td  id="calcium" >Calcium{this.state.ca.quantity}{this.state.ca.unit}</td>
                        <td id="totalcalcium" className="text-right">{Math.round(this.state.totca.quantity)}{this.state.totca.unit}</td>
                    </tr>
                    <tr>
                        <td id="iron">Iron{this.state.iron.quantity}{this.state.iron.unit}</td>
                        <td id="totaliron" className="text-right">{Math.round(this.state.totiron.quantity)}{this.state.totiron.unit}</td>
                    </tr>
                    <tr>
                        <td id="potassium">Potassium{Math.round(this.state.pots.quantity)}{this.state.pots.unit}</td>
                        <td id="totalpotassium" className="textRight">{Math.round(this.state.totpots.quantity)}{this.state.totpots.unit}</td>
                    </tr>
                </tbody>
            </table>
        <div>      
          <p className="text-center">*Percent Daily Values are based on a 2000 calorie diet</p>
        </div>
        </div>
        </div>
     </div>

     
          </div>
       

          </div>
          </div>
         
        </section>

      </div>
    )
    
    }
}
export default App;
