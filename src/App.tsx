import React, {useState} from 'react';
import './App.css';
import TopNav from './components/TopNav';
import PersonalInfo from './components/sections/PersonalInfo';
import ProfileInfo from './components/sections/ProfileInfo';
import AdditionalInfo from './components/sections/AdditionalInfo';
import UploadImg from './components/sections/UploadImg';
import FormInfo from './model/model';
import { message } from 'antd';

const profile = {
  "education": {
      "mandatory": true,
      "show": true
  },
  "experience": {
      "mandatory": true,
      "show": true
  },
  "resume": {
      "mandatory": true,
      "show": true
  },
  "profileQuestions": []
}

const personalInformation = {
  "firstName": {
      "internalUse": false,
      "show": true
  },
  "lastName": {
      "internalUse": false,
      "show": true
  },
  "emailId": {
      "internalUse": false,
      "show": true
  },
  "phoneNumber": {
      "internalUse": false,
      "show": true
  },
  "nationality": {
      "internalUse": false,
      "show": true
  },
  "currentResidence": {
      "internalUse": false,
      "show": true
  },
  "idNumber": {
      "internalUse": false,
      "show": true
  },
  "dateOfBirth": {
      "internalUse": false,
      "show": true
  },
  "gender": {
      "internalUse": false,
      "show": true
  },
  "personalQuestions": []
}

const App: React.FC = () => {
  const [viewImage, setViewImage] = useState("");
  const [additionalQ, setAdditionalQ] = useState<any[]>([])
  const [profileQ, setProfileQ] = useState<any[]>([...profile.profileQuestions])
  const [personalQ, setPersonalQ] = useState<any[]>([...personalInformation.personalQuestions])
  const dataId = "497f6eca-6276-4993-bfeb-53cbbbba6f08";

  const onSubmit = () => {
    const data: FormInfo = {
      id: dataId || "",
      type: "applicationForm",
      attributes: {
        coverImage: viewImage,
        personalInformation: {...personalInformation, personalQuestions: personalQ},
        profile: {...profile, profileQuestions: profileQ},
        customizedQuestions: additionalQ
      },
    }

    console.log(data)
    message.success('data logged')
  }

  return (
  <div className='container'>
    <TopNav />
    <div className='bodyContent'>
      <UploadImg viewImage={viewImage} setViewImage={setViewImage} />
      <PersonalInfo personalQ={personalQ} setPersonalQ={setPersonalQ} />
      <ProfileInfo profileQ={profileQ} setProfileQ={setProfileQ} />
      <AdditionalInfo additionalQ={additionalQ} setAdditionalQ={setAdditionalQ} />

      <button className='submit' onClick={onSubmit}>log to console</button>
    </div>
  </div>
)};

export default App;
