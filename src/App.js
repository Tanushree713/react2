import './App.css';
import Card from './Card.js';

function App() {
  return (
    <>
      <div className='App'>
      <Card imagesrc="https://m.media-amazon.com/images/M/MV5BZGI3NzQ5NTctZWQ4Ni00ZGJkLTg5N2UtYTBjNzcyN2EyOTM0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"  caption="Amazon Prime" title="Pathaan" link="https://www.primevideo.com/detail/0FIVK55HUFIIADBSNC585CZFDP/ref=atv_mv_hom_c_KRKMew_brws_2_1?jic=8%7CEgRzdm9k"/>

      <Card imagesrc="https://m.media-amazon.com/images/M/MV5BYjM0YTFmN2EtYTQ0Ny00NmU2LTk5NmQtODhjYzhkOTVjZDA5XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"  caption="Amazon Prime" title="RamSetu" link="https://www.primevideo.com/detail/0IP8XHT2M4ZBJ6OW6DY6HIO33M/ref=atv_dp_amz_c_Iw3Dma_1_5"/> 

      <Card imagesrc="https://m.media-amazon.com/images/M/MV5BNmQzOWZhOTMtZTcxNC00MTdkLWEwYmUtOWVmOTFhNTdkNjRkXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_FMjpg_UX1000_.jpg"  caption="Amazon Prime" title="The Covenant" link="https://www.primevideo.com/detail/0S6WBXNEAVBXBALXPMQ6CZ24BT/ref=atv_mv_hom_c_3N84Xx_HS44a3cd_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D"/> 
      </div>
      </>
  );
}

export default App;
