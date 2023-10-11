import React, {useState} from 'react'
import Detail from '../Detail'
import { Card } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import AddDetail from '../AddDetail';
import AddQuestion from '../AddQuestion';

interface Props {
  personalQ: any[];
  setPersonalQ: React.Dispatch<React.SetStateAction<any[]>>;
}

const PersonalInfo = ({personalQ, setPersonalQ}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card
        style={{ paddingBottom: 30}}
        title='Personal Information' 
        bordered={false} 
        headStyle={{ backgroundColor: '#D0F7FA'}}
        >
          <Detail info='First Name' />
          <Detail info='Last Name' />
          <Detail info='email' />
          <Detail info='Phone (without dial code)' checkText='internal' checkboxes />
          <Detail 
            info='Nationality'
            checkText='internal'
            checkboxes
          />
          <Detail 
            info='Current Residence'
            checkText='internal'
            checkboxes
          />
          <Detail 
            info='ID Number'
            checkText='internal'
            checkboxes
          />
          <Detail 
            info='Dates of Birth'
            checkText='internal'
            checkboxes
          />
          <Detail 
            info='Gender'
            checkText='internal'
            checkboxes
          />
          {personalQ?.map((question, index) => (
            <AddDetail key={index} question={question.question} questionType={question.type} />
        ))}

        {open && <AddQuestion setOpen={setOpen} setAdditionalQ={setPersonalQ} additionalQ={personalQ} />}
          <div style={{marginTop: '20px'}}>
            <button onClick={() => setOpen(true)} className='btn'>
            <PlusOutlined style={{fontSize: '23px'}} />
            <span style={{fontWeight: 600}}>Add a question</span>
            </button>
          </div>
      </Card>
  )
}

export default PersonalInfo