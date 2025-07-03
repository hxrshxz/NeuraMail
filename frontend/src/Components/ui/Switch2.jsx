import React from 'react';
import styled from 'styled-components';

const Switch2 = () => {
  return (
    <StyledWrapper  className='size-sm justify-end mr-[-15px]'>
        <div className='size-sm mt-3 justify-end'>
        <p className="component-title"></p>
        <div className="container">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label className="switch" htmlFor="checkbox">
            <span className="slider" />
          </label>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Remove this container when use*/
  .component-title {

    position: absolute;
    z-index: 999;
    top: 30px;
    left: 0;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #888;
    text-align: center;
  }

  /* The switch - the box around the slider */
  .container {
    width: 51px;
    height: 31px;
    position: relative;
    
  }

  /* Hide default HTML checkbox */
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .switch {
    width: 60%;
    height: 60%;
    display: block;
    background-color: #111113;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  /* The slider */
  .slider {
    width: 13px;
    height: 13px;
    position: absolute;
    left: calc(50% - 27px/2 - 10px);
    top: calc(50% - 27px/2);
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .checkbox:checked + .switch {
    background-color: #34C759;
  }

  .checkbox:checked + .switch .slider {
    left: calc(50% - 27px/2 + 3px);
    top: calc(50% - 27px/2);
  }`;

export default Switch2;