import React from 'react'

// https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  description: '2014/11/30/14/11/',
  imageId: 'cat-551554_1280.jpg',
  name: '아기고양이',
  ImageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}



function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
          src={cat.catUrl + cat.description + cat.imageId} 
          alt={cat.name} 
          width={cat.ImageTheme.width} 
          height={cat.ImageTheme.height} 
        />
      </div>
    </>
  )
}

export default E_JSX