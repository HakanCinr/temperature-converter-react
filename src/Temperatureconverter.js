import React, { useState } from 'react'

function Temperatureconverter() {



const [numberone, setnumberone] = useState("")
const [temperatselect, settemperatselect] = useState("Celsius")
const [temperatout, settemperatout] = useState("Celsius")

const calculator = () => {
  if (temperatselect === "") {
    return "";
  }
  let tempresult;
  if (temperatselect === "Celsius") {
    if (temperatout === "Fahrenheit") {
      tempresult = (numberone * 9) / 5 + 32;
      return (tempresult);
    } else if (temperatout === "Kelvin") {
      tempresult = numberone + 273.15;
      return (tempresult);
    } else {
      tempresult = numberone;
      return (tempresult);
    }
  } else if (temperatselect === "Fahrenheit") {
    if (temperatout === "Celsius") {
      tempresult = (numberone - 32) * 5 / 9;
      return (tempresult);
    } else if (temperatout === "Kelvin") {
      tempresult = (numberone - 32) * 5 / 9 + 273.15;
      return (tempresult);
    } else {
      tempresult = numberone;
      return (tempresult);
    }
  } else if (temperatselect === "Kelvin") {
    if (temperatout === "Celsius") {
      tempresult = numberone - 273.15;
      return (tempresult);
    } else if (temperatout === "Fahrenheit") {
      tempresult = (numberone - 273.15) * 9 / 5 + 32;
      return (tempresult);
    } else {
      tempresult = numberone;
      return (tempresult);
    }
  }
};
 
  return (
    <>
    
    <div style={{display:'flex'}}>
    <div>
      <h2>Sıcaklığı Dönüştür</h2>
      <label>
        Sıcaklık:
        <input type="number"  onChange={(e)=>setnumberone(e.target.value)} />
      </label>
      <br />
      <label>
        Giriş:
        <select value={temperatselect} onChange={(e)=>settemperatselect(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </label><br></br>
      <label>
        Çıkış:
        <select value={temperatout} onChange={(e)=>settemperatout(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </label>

      <br />
      <label>Sıcaklık</label>
      <input type='number' value={calculator()} ></input>
    </div>
    <div> 
        
    <h2></h2>
</div></div>
    
    
    </>
  )
}

export default Temperatureconverter