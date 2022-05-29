import React, { useState } from 'react';
import fire from '../config/fire-config';
import storage from '../config/fire-config';
import Nav from '../components/Nav';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [vin, setVin] = useState('');
  const [price, setPrice] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [odometer, setOdometer] = useState('');
  const [year, setYear] = useState('');
  const [transmissionType, setTransmissionType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  const [interiorColor, setInteriorColor] = useState('');
  const [paintColor, setPaintColor] = useState('');
  const [titleStatus, setTitleStatus] = useState('');
  const [passedSmog, setPassedSmog] = useState('');
  const [negotiablePrice, setNegotiablePrice] = useState('');
  const [drive, setDrive] = useState('');
  const [originalOwner, setOriginalOwner] = useState('');
  const [issueNoticed, setIssueNoticed] = useState('');
  const [notification, setNotification] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    fire.firestore()
      .collection('blogs')
      .add({
        title: title,
        content: content,
        vin: vin,
        price: price,
        fuelType: fuelType,
        odometer: odometer,
        year: year,
        transmissionType: transmissionType,
        vehicleType: vehicleType,
        make: make,
        model: model,
        condition: condition,
        interiorColor: interiorColor,
        paintColor: paintColor,
        titleStatus: titleStatus,
        passedSmog: passedSmog,
        negotiablePrice: negotiablePrice,
        drive: drive,
        originalOwner: originalOwner,
        issueNoticed: issueNoticed
      });
    setTitle('');
    setContent('');
    setVin('');
    setPrice('');
    setFuelType('');
    setOdometer('');
    setYear('');
    setTransmissionType('');
    setVehicleType('');
    setMake('');
    setModel('');
    setCondition('');
    setInteriorColor('');
    setPaintColor('');
    setTitleStatus('');
    setPassedSmog('');
    setNegotiablePrice('');
    setDrive('');
    setOriginalOwner('');
    setIssueNoticed('');
    setNotification('Your vehicle post was created!!');
    setTimeout(() => {
      setNotification('')
    }, 2000)
  }

  return (
    <>
      <Nav />
      <div>
        <h2>Add your vehicle post</h2>
        {notification}
        <form onSubmit={handleSubmit}>
          <div>
            Title<br />
            <input type="text" value={title}
              onChange={({ target }) => setTitle(target.value)} />
          </div>
          
          <div>
            Year<br />
            <input type='text' value={year}
            onChange={({ target }) => setYear(target.value)} />
          </div>

          <div>
            Make/Model<br />
            <input type='text' value={make}
            onChange={({ target }) => setMake(target.value)} />
          </div>

          <div>
            Model<br />
            <input type='text' value={model}
            onChange={({ target }) => setModel(target.value)} />
          </div>

          <div>
            Description<br />
            <textarea value={content}
              onChange={({ target }) => setContent(target.value)} />
          </div>

          <div>
            Price<br />
            <input type='text' value={price} 
            onChange={({ target }) => setPrice(target.value)} />
          </div>

          <div>
            VIN<br />
            <input type='text' value={vin} 
            onChange={({ target }) => setVin(target.value)} />
          </div>

          <div>
            Fuel Type<br />
            <input type='text' value={fuelType} 
            onChange={({ target }) => setFuelType(target.value)} />
          </div>

          <div>
            odometer<br />
            <input type='text' value={odometer} onChange={({ target }) => setOdometer(target.value)} />
          </div>

          <div>
            transmission type<br />
            <input type='text' value={transmissionType} onChange={({ target }) => setTransmissionType(target.value)}/>
          </div>

          <div>
            Vehicle type <br />
            <input type='text' value={vehicleType} onChange={({ target }) => setVehicleType(target.value)}/>
          </div>

          <div>
            Vehicle condition<br />
            <input type='text' value={condition} onChange={({ target }) => setCondition(target.value)}/>
          </div>

          <div>
            Interior color<br />
            <input type='text' value={interiorColor} onChange={({ target }) => setInteriorColor(target.value)}/>
          </div>

          <div>
            Paint color<br />
            <input type='text' value={paintColor} onChange={({ target }) => setPaintColor(target.value)}/>
          </div>

          <div>
            Original owner<br />
            <input type='text' value={originalOwner} onChange={({ target }) => setOriginalOwner(target.value)}/>
          </div>

          <div>
            Title status<br />
            <input type='text' value={titleStatus} onChange={({ target }) => setTitleStatus(target.value)}/>
          </div>

          <div>
            Passed smog<br />
            <input type='text' value={passedSmog} onChange={({ target }) => setPassedSmog(target.value)}/>
          </div>

          <div>
            Drive<br />
            <input type='text' value={drive} onChange={({ target }) => setDrive(target.value)}/>
          </div>

          <div>
            Noticed issue before<br />
            <input type='text' value={issueNoticed} onChange={({ target }) => setIssueNoticed(target.value)}/>
          </div>

          <div>
            Negotiable Price<br />
            <input type='text' value={negotiablePrice} onChange={({ target }) => setNegotiablePrice(target.value)}/>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}
export default CreatePost;