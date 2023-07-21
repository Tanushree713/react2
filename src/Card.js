import React from 'react' ;

function Card(props){
  return(
    <>
    <div className='cards'>
        <div className='card'>
            <img src={props.imagesrc} className='card_img'/>
            <div className='card_info'>
                <h3 className='card_category'>{props.caption}</h3>
                <h2 className='card_title'>{props.title}</h2>
                <a href={props.link} target='_blank'>
                <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
export default Card ;