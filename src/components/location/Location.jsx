import React from 'react'
import './location.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import {RiShareBoxLine} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'

const Location = () => {
/*const placeId = 'ChIJsS-1Ei_DrAcRh4VOUTpkuNY'
const apiKey = 'AIzaSyC4CLf295lqj_QYJaM8H-wFbcR8Uj8JG7Y'*/

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAHraO4VRq3ZWzgFGA9XVG8FtQmUVmjYJE"
  })
  const position = {
    lat: -7.1276227,
    lng: -34.8285682
  }

  return (
    
    <section className='section' id='location'>
      

      <div className="maps">
        <div className="map-info">
          <h1>Nossa Localização</h1>
          <p>
            A Faccia Odontologia fica perto de tudo no Altiplano Nobre. A clínica está localizada no 16º andar do Edifício Altiplex José Olímpio, com vista privilegiada da orla de João Pessoa.
            Agende já a sua consulta com um dos nossos dentistas e desfrute de um atendimento com qualidade e praticidade, no mais acolhedor ambiente da Paraíba. 
            Sua saúde bucal e bem-estar merecem o melhor! Bem perto de você. 
            Clique e encontre o melhor caminho até a Faccia Odontologia.
          </p>
          <div className="map-wrap">
          <a href="https://goo.gl/maps/evK9EwMhz81Tupme6" target={'blank'}><MdOutlineLocationOn/><span>Abrir no Maps</span> <RiShareBoxLine/> </a>
          </div>
        </div>
        <div className='map-location'>
        
          <div className="map">
            {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={position}
              zoom={15}>
              <Marker className="marker" position={position} options={{
                label: {
                  text: "Faccia Odontologia",
                  className: "map-marker"
                }
              }}/>
            </GoogleMap>) : <></>}
          </div>
        </div>
      </div>
      
    </section>
    
  )
}

export default Location