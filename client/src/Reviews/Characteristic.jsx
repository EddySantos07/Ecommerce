import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';

let Characteristic = (props) => {

  // console.log('CHARACTERISTIC PROPS: ', props);

  if (props.charach) {
    return (
      <div className='CharacterComponent'>

        {/* {<div>{props.charach}</div>} */}


        {(props.charach === 'Size') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Too Small</label>
              <label className='MiddleLabel'>Perfect</label>
              <label className='RightLabel'>Too Big</label>
            </div>

          </div>}


        {(props.charach === 'Width') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Too narrow</label>
              <label className='MiddleLabel'>Perfect</label>
              <label className='RightLabel'>Too wide</label>
            </div>

          </div>}

        {(props.charach === 'Comfort') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Uncomfortable</label>
              <label className='RightLabel'>Perfect</label>
            </div>

          </div>}

        {(props.charach === 'Quality') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Poor</label>
              <label className='RightLabel'>Perfect</label>
            </div>

          </div>

        }


        {(props.charach === 'Length') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Runs Short</label>
              <label className='MiddleLabel'>Perfect</label>
              <label className='RightLabel'>Runs Long</label>
            </div>

          </div>}

        {(props.charach === 'Fit') &&
          <div className='CharachBarContainer'>
            <div>{props.charach}</div>
            <div className='CharachContainer'>
              <div className='CharachBar'></div>
              <div  style={{zIndex: '3', height: '15px', width: `${props.value/5*100}%`, borderRight: '5px solid navy'}}></div>
            </div>
            <div className='labelContainer'>
              <label className='LeftLabel'>Runs tight</label>
              <label className='MiddleLabel'>Perfect</label>
              <label className='RightLabel'>Runs long</label>
            </div>

          </div>}







      </div>


    )
  } else {
    return <div>Loading characteristic...</div>
  }

}

export default Characteristic;