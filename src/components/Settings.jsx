import React from 'react';

import Range from './Range';

function Settings({ settings, handleChange,getUrl,resetSettings,getFile }) {
    const { contrast, hue, brightness, saturate, sepia } = settings;

    return (
        <aside className="settings">
            <form className='url' onSubmit={getUrl}>
                <input className='urlInput' autoComplete='off' type='link' placeholder='Enter url of image' name='image'/>
                <button className='urlButton'>Load</button>
            </form>
            <Range
                name="contrast"
                value={contrast}
                min={0}
                max={200}
                onChange={handleChange} />

            <Range
                name="hue"
                value={hue}
                min={-360}
                max={360}
                onChange={handleChange} />

            <Range
                name="brightness"
                min={0}
                max={200}
                value={brightness}
                onChange={handleChange} />

            <Range
                name="saturate"
                min={0}
                max={100}
                value={saturate}
                onChange={handleChange} />

            <Range
                name="sepia"
                min={0}
                max={100}
                value={sepia}
                onChange={handleChange} />

            <div className='closure'>
                <form method="post" className='file_upload'>
                    <input type="file" id="file" name="file" onChange={(event)=>{getFile(event)}}/>
                    <label className='label' htmlFor="file"><span>Upload</span></label>
                </form>
                <button className='label_btn' onClick={resetSettings}>Reset settings</button>
            </div>
        </aside>
    );
}

export default Settings;