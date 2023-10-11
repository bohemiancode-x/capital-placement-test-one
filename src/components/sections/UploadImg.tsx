import React, {useState} from 'react';
import { Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface Props {
  viewImage: string;
  setViewImage: React.Dispatch<React.SetStateAction<string>>
}

const UploadImg = ({viewImage, setViewImage}: Props) => {


  const uploadButton = (
        <label className='dashed'>
            <UploadOutlined style={{ fontSize: '33px'}} />
            <p style={{fontWeight: 600}}>Upload cover image</p>
            <p style={{ color: '#979797'}}>16:9 ratio is recommended. Max image size 1mb</p>
            <input
                style={{display: 'none'}}
                type="file"
                name="coverImage"
                onChange={handleImageChange}
                accept="image/*"
                id="coverImage"
                className="hidden"
                />
        </label>
  );

  function handleImageChange(event: any) {
    const file = event.currentTarget.files[0];
    //console.log(file)
    setViewImage(file);
  }


  return (
    <Card 
        title={!viewImage? 'Upload cover image' : '' }
        bordered={false} 
        headStyle={{ backgroundColor: '#D0F7FA'}}
        bodyStyle={{height: 'fit-content', width: '100%'}}
        >
        <div>
        {!viewImage ? 
          null  : typeof viewImage === "string" ? (
              <img
              src={viewImage}
              alt="CoverImage"
            />) : (
              <img
                  src={URL.createObjectURL(viewImage)}
                  alt="uploadedimage"
                />
            )
        }
        </div>
        <div style={{display: 'block', width: '100%'}}>
            {viewImage ? null : uploadButton}
        </div>
        {viewImage && 
        <button style={{color: '#A80000', fontWeight: 600}} className='btn' onClick={() => setViewImage('')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M9.55672 9.42862L8.54309 8.42749L17.0037 16.7854L25.4644 25.1434" stroke="#A80000" stroke-width="5"/>
                <path d="M23.5279 10.1184L24.5299 9.10559L16.165 17.5594L8.37691 25.3474" stroke="#A80000" stroke-width="5"/>
            </svg>
            Delete and re-upload
        </button>
      }
          
    </Card>
  )
}

export default UploadImg