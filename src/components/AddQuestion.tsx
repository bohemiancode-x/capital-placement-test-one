import React, {useState} from 'react';
import { Button,  Checkbox, Form, Input, Select } from 'antd';
import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons'
import type { FormInstance } from 'antd/es/form';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { FormItemProps } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 24 },
};

interface Props {
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
    additionalQ: any[];
    setAdditionalQ: React.Dispatch<React.SetStateAction<any[]>>;
}


const AddQuestion = ({ setOpen, setAdditionalQ, additionalQ }: Props) => {
    const formRef = React.useRef<FormInstance>(null);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [choice, setChoice] = useState<string>('')
    const [choices, setChoices] = useState<string[]>([]);
    const [other, setOther] = useState<boolean>(false);
    const [disqualify, setDisqualify] = useState<boolean>(false);
    const [maxChoice, setMaxChoice] = useState<number>(0);
    const [questionType, setQuestionType] = useState<string>('');
    const [question, setQuestion] = useState<string>('');
    const [maxDuration, setMaxDuration] = useState<number | string>('');
    const [durationType, setDurationType] = useState<string>('');


    const saveQuestion = () => {
        let newQuestion;
        if (questionType === 'video question') {
             newQuestion = {
                type: questionType,
                question: question,
                maxDuration,
                durationType,
            };    
        } else {
            newQuestion = {
            type: questionType,
            question: question,
            choices: choices,
            other,
            maxChoice,
            disqualify,
        }
    };
        if(question) {
            setAdditionalQ([...additionalQ, newQuestion]);
            onReset();
            setQuestion('');
            setQuestionType('');
        };
        //console.log(newQuestion)
    
    }
    const handleDurationTypeChange = (value: string) => {
        switch(value){
            case 'seconds':
            setDurationType(value)
            break;
            case 'minutes':
            setDurationType(value)
            break; 
        }
    }


    const handleValueChange = (value: string) => {
        setQuestionType(value);
        switch (value) {
            case 'dropdown':
            setSelectedValue(value)
            break;
          case 'multiple choice':
            setSelectedValue(value)
            break;
          case 'video question':
            setSelectedValue(value)
            break;
        case 'yes/no': 
        setSelectedValue(value)
        break;
          default:
            setSelectedValue('default')
            break;
        }
    };

    const onChangeCheck = (e: CheckboxChangeEvent) => {
        setOther(e.target.checked);
    }

    const onChangeDisqualify = (e: CheckboxChangeEvent) => {
        setDisqualify(e.target.checked);
    }

    const onReset = () => {
        formRef.current?.resetFields();
        setChoices([]);
        setSelectedValue('');
        setOpen(false);
      };

  return (
    <div>
        <Form
        layout='vertical'
         {...layout}
         ref={formRef}
         name="control-ref"
        //  onFinish={onFinish}
         style={{ maxWidth: 900, margin: 'auto', padding: 10 }}
        >
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                <Select
                placeholder="Select a option"
                onChange={handleValueChange}
                allowClear
                >
                    <Option value="paragraph">Paragraph</Option>
                    <Option value="short answer">Short Answer</Option>
                    <Option value="yes/no">Yes/No</Option>
                    <Option value="dropdown">Dropdown</Option>
                    <Option value="multiple choice">Multiple choice</Option>
                    <Option value="date">Date</Option>
                    <Option value="number">Number</Option>
                    <Option value="file upload">File upload</Option>
                    <Option value="video question">Video question</Option>
                </Select>
            </Form.Item>
            <Form.Item name="question" label="Question" rules={[{ required: true }]}>
                <Input onChange={(e) => setQuestion(e.target.value)} value={question} />
            </Form.Item>
            {(selectedValue === 'multiple choice' || selectedValue === 'dropdown') && <form style={{width: '100%', marginBottom: 10}} name="choice">
                <label>
                    Choices
                    {choices.map((choice) => (
                        <input readOnly style={{width: '100%', padding: 8, marginBottom: 12}} value={choice} />
                    ))}
                    <div className="flexed">
                        <UnorderedListOutlined />
                        <input style={{width: '100%', padding: 8}} value={choice} onChange={(e) => setChoice(e.target.value)} />
                        <PlusOutlined 
                            onClick={() => {
                                choice && setChoices([...choices, choice])
                                setChoice('')
                            }} 
                        />
                    </div>
                    <div className='flexed' style={{marginTop: 5}}>
                        <Checkbox onChange={onChangeCheck} />
                        <span>Enable "other" option</span>
                    </div>
                    {selectedValue === 'multiple choice' && <div style={{marginTop: 10}}>
                        <Form.Item label='Max choice allowed'>
                            <Input onChange={(e) => setMaxChoice(e.target.valueAsNumber)} value={maxChoice} type="number" placeholder='Enter number of choice allowed here' />
                        </Form.Item>
                    </div>}
                </label>
            </form>}
            {selectedValue === 'yes/no' && 
                <div className='flexed' style={{marginTop: 5, marginBottom: 10}}>
                <Checkbox onChange={onChangeDisqualify} />
                <span>Disqualify candidate if the answer is no</span>
                </div>
            }
            {selectedValue === 'video question'&& (<div className='flexed'>
                <Form.Item>
                    <Input type='number' placeholder='Max duration of video' onChange={(e) => setMaxDuration(e.target.valueAsNumber)} value={maxDuration}/>
                </Form.Item>
                <Form.Item>
                    <Select onChange={handleDurationTypeChange} placeholder='in (sec/min)'>
                        <Option value='seconds'>Seconds</Option>
                        <Option value='minutes'>Minutes</Option>
                    </Select>
                </Form.Item>
            </div>)}

            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                <button onClick={onReset} style={{color: '#A80000', fontWeight: 600}} className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M9.55672 9.42862L8.54309 8.42749L17.0037 16.7854L25.4644 25.1434" stroke="#A80000" stroke-width="5"/>
                        <path d="M23.5279 10.1184L24.5299 9.10559L16.165 17.5594L8.37691 25.3474" stroke="#A80000" stroke-width="5"/>
                    </svg>
                    Delete question
                </button>
                <button onClick={saveQuestion} style={{background: '#087B2F', padding: 15, color: '#fff', borderRadius: 5}} className='btn'>
                save
                </button>
            </div>
        </Form>

    </div>
  )
}

export default AddQuestion