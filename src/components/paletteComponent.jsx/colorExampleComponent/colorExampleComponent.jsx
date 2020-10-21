import React from 'react';
import style from './colorExampleComponent.module.css'



function ColorExample() {
    return (

        <div className={style.color_element}>
            <button><img src={require("./../../../images/Icon.png")} alt="" /></button>
            <div className={style.color_element_example}></div>

        </div>
    );
}

export default ColorExample;
