import Sidebar from "../Sidebar/Sidebar"
import "../AddScenario/AddScenario.css"
import { useState } from "react";
import axios from "axios";

const AddScenario=()=>{
    const [idno,setIdno]=useState(0)
    const [scenario, setScenario] = useState({
        id: idno,
        name: '',
        time: '',
      });
    
      const handleChange = (e) => {
        setScenario({ ...scenario, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/scenarios', scenario)
        .then((response) => {
            console.log('Scenario created:', response.data);
            setIdno(idno+1)
            setScenario({ id: idno, name: '', time: '' })
        })
        .catch((error) => {
            console.error('Error creating scenario:', error);
        });
        }
    return(
        <div className='main1'>
            <Sidebar/>
            <form onSubmit={handleSubmit}>
                <h4>Scenario/Add</h4>
                <h2>Add Scenario</h2>
                <div className="form-table">
                    <div className="form-div">
                        <label htmlFor="scenario-name">Scenario Name</label>
                        <input placeholder='Test scenario' type="text" id="scenario-name" name="name" value={scenario.name} onChange={handleChange}/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="scenario-time">Scenario Time (seconds)</label>
                        <input placeholder='Time' type="text" id="scenario-time" name="time" value={scenario.time} onChange={handleChange}/>
                    </div>
                </div>
                    <button id="btn1" type="submit">Add</button>
                    <button id="btn2">Reset</button>
                    <button id="btn3">Go back</button>
            </form>
        </div>
    )
}

export default AddScenario

// const scenario = [

//     {
    
//     scenarioId: 1,
    
//     scenarioName: 'Scenario 1',
    
//     time: 29378590827,
    
//     },
    
//     {
    
//     scenarioId: 2,
    
//     scenarioName: 'Scenario 1',
    
//     time: 29378590827,
    
//     }
    
//     ];
    
//     const vehicles = [
    
//     {
    
//     id: '1',
    
//     name: 'Safari',
    
//     positionX: 10,
    
//     positionY: 0,
    
//     speed: 2,
    
//     direction: 'towards',
    
//     scenarioId: 1
    
//     },
    
//     {
    
//     id: '2',
    
//     name: 'Alto',
    
//     positionX: 8,
    
//     positionY: 2,
    
//     speed: 3,
    
//     direction: 'backwards',
    
//     scenarioId: 1
    
//     },
    
//     {
    
//     id: '3',
    
//     name: 'Eon',
    
//     positionX: 8,
    
//     positionY: 2,
    
//     speed: 3,
    
//     direction: 'backwards',
    
//     scenarioId: 2
    
//     }
    
//     ];
    
//     const currentScenario = 2;
    
//     const vehiclesOfCurrentScenario = vehicles.filter((vehicle) => {
    
//     return vehicle.scenarioId === currentScenario;
    
//     });
    
//     console.log(vehiclesOfCurrentScenario);
    
//     document.getElementsByClassName('car-1')[0].style.left = '100px';

//     Tushar Shukla
//     just now
//     <div class="graph">
    
//     <div class="car car-1"></div>
    
//     <div class="car car-2"></div>
    
//     </div>
//     .graph {

//         width: 800px;
        
//         height: 500px;
        
//         background: black;
        
//         border: 1px solid green;
        
//         position: relative;
        
//         overflow: hidden;
        
//         }
        
//         .car {
        
//         width: 30px;
        
//         height: 30px;
        
//         border-radius: 50%;
        
//         background: red;
        
//         position: absolute;
        
//         transition: ease-in-out 10s top;
        
//         }
        
//         .car-2 {
        
//         background: green;
        
//         }
//         const playgroundW = window.screen.clientWidth;

// const playgroundH = window.screen.clientHeight;

// const car1 = document.getElementsByClassName('car-1');
// const moveVehicles = (vehicles) => {

//     vehicles.forEach((vehicle) => {
    
//     if (vehicle.direction === 'towards') {
    
//     vehicle.positionX += vehicle.speed;
    
//     } else {
    
//     vehicle.positionX -= vehicle.speed;
    
//     }
    
//     if (vehicle.direction === 'downwards') {
    
//     vehicle.positionY += vehicle.speed;
    
//     } else {
    
//     vehicle.positionY -= vehicle.speed;
    
//     }
    
//     });
    
//     };
    
//     moveVehicles(vehiclesOfCurrentScenario);
    
    