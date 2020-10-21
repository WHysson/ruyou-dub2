import React from 'react';
import ColorExample from './colorExampleComponent/colorExampleComponent';
import style from './paletteComponent.module.css'



function PaletteComponent() {
  return (
    <div className="PaletteComponent">
      <div className={style.palette_wrapper}>
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <ColorExample />
        <button className={style.contact_form_button}>Добавить цвет</button>
      </div>

      <div>
      </div>
    </div>
  );
}

export default PaletteComponent;
