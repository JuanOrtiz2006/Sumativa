import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarjetas=[
    {
      titulo:"Artefacto explosivo detonó en puente peatonal del norte de Quito", 
      descripcion:"Según informó la Policía Nacional del Distrito Metropolitano, ante la alerta de detonación de un dispositivo en el puente peatonal de la avenida Panamericana norte se realizó la verificación de daños materiales.", 
      img:"https://www.eluniverso.com/resizer/HiRRj3Gru-cgdIdEsG8V6r7ghno=/0x0:1024x838/1024x838/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/67GOEK5YDNELDBZ4JTZF4HC3EA.jpg"},
    {
      titulo:"La jornada de violencia en Ecuador, en imágenes", 
      descripcion:"El presidente de Ecuador, Daniel Noboa, declara el estado de emergencia tras la crisis de seguridad que se vive en el país luego de la fuga de ‘El Fito’ de una de sus prisiones", 
      img:"https://imagenes.elpais.com/resizer/VLcBuGdnpwRf_T1mrYlJWyHEVJA=/828x466/cloudfront-eu-central-1.images.arcpublishing.com/prisa/O6COIRZAJND4FAAOUVEA4AKT6M.jpg"
    },
    {
      titulo:"Puerto y aeropuerto de Manta funcionan bajo medidas de seguridad", 
      descripcion:"El puerto y el aeropuerto de Manta realizan sus actividades de manera normal, pero bajo estrictas medidas de seguridad.", 
      img:"https://www.eluniverso.com/resizer/XHe27I-Ql1Ks2g70nzjCZVPGl04=/979x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/4PUO6LWBIBFOXE4OAQJIEMDZMY.jpg"
    }
  ]
  constructor() {}

}
