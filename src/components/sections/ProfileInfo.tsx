import React, {useState} from 'react';
import Detail from '../Detail'
import { Card } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import AddQuestion from '../AddQuestion';
import AddDetail from '../AddDetail';

interface Props {
    profileQ: any[];
    setProfileQ: React.Dispatch<React.SetStateAction<any[]>>
}

const ProfileInfo = ({profileQ, setProfileQ}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <Card
        style={{ paddingBottom: 30}}
        title='Profile' 
        bordered={false} 
        headStyle={{ backgroundColor: '#D0F7FA'}}
        >
          <Detail 
            info='Education'
            checkText='mandatory'
            checkboxes
          />
          <Detail 
            info='Experience'
            checkText='mandatory'
            checkboxes
          />
          <Detail 
            info='Resume'
            checkText='mandatory'
            checkboxes
          />
          {profileQ?.map((question, index) => (
            <AddDetail key={index} question={question.question} questionType={question.type} />
         ))}
          {open && <AddQuestion setOpen={setOpen} setAdditionalQ={setProfileQ} additionalQ={profileQ} />}
          <div style={{marginTop: '20px'}}>
            <button onClick={() => setOpen(true)} className='btn'>
            <PlusOutlined style={{fontSize: '23px'}} />
            <span style={{fontWeight: 600}}>Add a question</span>
            </button>
          </div>
      </Card>
  )
}

export default ProfileInfo