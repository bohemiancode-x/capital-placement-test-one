import React, {useState} from 'react'
import { Card } from "antd"
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import AddDetail from '../AddDetail';
import AddQuestion from '../AddQuestion';

interface Props {
    additionalQ: any[];
    setAdditionalQ: React.Dispatch<React.SetStateAction<any[]>>
}

const AdditionalInfo = ({ additionalQ, setAdditionalQ }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <Card
        style={{ paddingBottom: 30}}
        title='Additional questions' 
        bordered={false} 
        headStyle={{ backgroundColor: '#D0F7FA'}}
        >
        {additionalQ?.map((question, index) => (
            <AddDetail key={index} question={question.question} questionType={question.type} />
        ))}

        {open && <AddQuestion setOpen={setOpen} setAdditionalQ={setAdditionalQ} additionalQ={additionalQ} />}

        <div style={{marginTop: '20px'}}>
            <button onClick={() => setOpen(true)} className='btn'>
            <PlusOutlined style={{fontSize: '23px'}} />
            <span style={{fontWeight: 600}}>Add a question</span>
            </button>
        </div>
        
    </Card>
  )
}

export default AdditionalInfo