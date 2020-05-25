/*Component imports */
import React,{useState} from 'react';

/*css imports */
import './Footer.css';

/* Img imports*/
import Instagram from '../imgs/Instagran_icon.png';

    export default function Footer() {
        document.title = 'Erick';
        return (
            <>
              <footer className="class_footer_container">
                <div className="class_footer_img_container_left">
                    img
                </div>
                <div className="class_footer_info_container_right">
                     <div className="class_footer_info_list1">
                        <dt className="class_footer_info_dt_list">Comunidade</dt>
                        <dd className="class_footer_info_dd_list">Parceiro</dd>
                        <dd className="class_footer_info_dd_list">Colaboradores</dd>
                     </div>
                     <div className="class_footer_info_list2">
                        <dt className="class_footer_info_dt_list">Empresa</dt>
                        <dd className="class_footer_info_dd_list">Sobre nos</dd>
                        <dd className="class_footer_info_dd_list"> Contato</dd>
                     </div>

                </div>
                <div className="class_footer_line"></div>
                <p className="class_footer_left_copyr">©Developed by sua mae</p> 
                <div className="class_footer_right_imgs_container">
                  Nos siga nas redes sociais
                  <img className="class_footer_right_img1" src={Instagram}></img>
                  <img className="class_footer_right_img2" src={Instagram}></img>
                  <img className="class_footer_right_img3" src={Instagram}></img>
                  <img className="class_footer_right_img4" src={Instagram}></img>
                </div>
              </footer>   
            </>
        )

    }

