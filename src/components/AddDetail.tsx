import React from 'react';
import { EditOutlined } from '@ant-design/icons';

interface Props {
    question: string;
    questionType: string;
}

const AddDetail = (props: Props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', borderBottom: '1px solid #C4C4C4'}}>
    <span style={{fontSize: '14px', color: '#979797'}}>{props.questionType}</span>
    <div className='flexed' style={{justifyContent: 'space-between', width: '100%'}}>
        <p style={{fontWeight: 600}}>{props.question}</p>
        <EditOutlined />
    </div>
</div>
  )
}

export default AddDetail