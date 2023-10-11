import React, {useState} from 'react';
import { Switch, Checkbox, ConfigProvider } from 'antd';

interface Props {
    info: string;
    checkText?: string;
    checkboxes?: boolean;
};
const switchStyles: React.CSSProperties = {
    backgroundColor: '#087B2F',
}


const Detail = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [switchCheck, setSwitchCheck] = useState<boolean>(false);


    const onChange = () => {
        setChecked(!checked);
    };

    const onChangeSwitch = () => {
        setSwitchCheck(!switchCheck)
    };
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #C4C4C4'}}>
        <h3>{props.info}</h3>
        {props.checkboxes && 
            <div className='flexed' style={{gap: 45, flexDirection: 'row-reverse'}}>
                <span className='flexed'>
                <ConfigProvider
                        theme={{
                            components: {
                                Switch: {
                                    colorPrimary: "#087b2f",
                                    colorPrimaryHover: '#087b2f',
                                }
                            }
                        }}
                    >
                        <Switch defaultChecked onChange={onChangeSwitch} />    
                    </ConfigProvider>
                    {switchCheck ? <p>Show</p> : <p>Hide</p>}
                </span>
                <span className='flexed'>
                    <ConfigProvider
                        theme={{
                            components: {
                                Checkbox: {
                                    colorPrimary: "#087b2f",
                                    colorPrimaryHover: '#087b2f'
                                }
                            }
                        }}
                    >
                        <Checkbox onChange={onChange}/>
                    </ConfigProvider>
                    <p>{props.checkText}</p>
                </span>
            </div>        
        }
    </div>
  )
}

export default Detail