import React from 'react';

function Image({ src}) {

    return (<img src={src} className='image' alt='Unccorect url'></img>);
}

export default Image;


// import React from 'react';
//
// function Image({ src }) {
//     const style = { backgroundImage: `url(${src})` };
//
//     return (<div className="image" style={style}></div>);
// }
//
// export default Image;