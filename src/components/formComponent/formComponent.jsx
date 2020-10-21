import React from 'react';
import style from './formComponent.module.css'



function FormComponent() {
  return (
   

            <div className="formComponent">
            <form className={style.content_form} action="">
                <div>
                    <label htmlFor="Name">Имя</label>
                    <input type="text" placeholder="Имя" />
                </div>
                <div>
                    <label htmlFor="Surname">Фамилия</label>
                    <input type="text" placeholder="Фамилия" />
                </div>
                <div>
                    <label htmlFor="MiddleName">Отчество</label>
                    <input type="text" placeholder="Отчество" />
                </div>
                <div>
                    <label htmlFor="Photo">Фото</label>
                    <input className={style.content_form_imageUpload} type="image" src={require("./../../images/Vector.png")} width="60" height="56" placeholder="Отчество" />
                </div>
                <div>
                    <button className={style.contact_form_button}>Сохранить</button>
                </div>
                <div>
                    <label htmlFor="Response">Response</label>
                    <textarea type="text" />
                </div>
            </form>
        </div>
       
    
  );
}

export default FormComponent;
