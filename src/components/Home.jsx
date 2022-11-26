import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import Navibar from './Navibar';
import PopUpBox from './PopUpBox';
import Electronics from './Electronics';
import Boutique from './Boutique';
import Groceries from './Groceries';
import Automobiles from './Automobiles';

const Home = () => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      {(sessionStorage.getItem('user-info') && sessionStorage.getItem("loggedin-count")==='0')?
        <>
          <PopUpBox
            show={modalShow}
            onHide={() => setModalShow(false)}
            statement = {"Welcome to Hai "+ sessionStorage.getItem('username')+". Feel the comfort :)"}
          />
        </>
        :null
      }
      
      <Navibar />
            
      <div>
        <Carousel interval={2000} nextIcon={<span aria-hidden="false" >
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAACurq77+/vKyspOTk739/daWlrQ0NA9PT2srKzNzc329vZXV1dbW1tMTEyDg4NHR0fX19dSUlLj4+NjY2NCQkI0NDRpaWnu7u5wcHC9vb14eHjp6ekQEBB9fX0ZGRkqKiqVlZWNjY2dnZ2/v78WFhbQ34k4AAAEYklEQVR4nO2di24iMQxFE6awy6Mty2soUGjL4/8/cVnKSrSFiRMjee6dnA9APoodOxMpOKfhpTWcdt/8e3vx0S9Uv1RLJtuZv2S+tI7ovrwM/Q+6TI7bn34nx5F1YHdiUl4XPLKzju0u/L7pd2RhHd0d6FcJev9oHZ+aSbWg923rCJUM1iFD/4jdG6dBQe9/WQepYS8Q9H5sHaaCrsgQWHEpEzwmKmotvkkNUZvGSCyI2jR2EYaYTWMW9rrgCU/xNUoQcUeNKcMTcLUYmLmvgNY0WtGGaAPcR7whWKJGNYv/jJESVTyzfQGpFis/X9wGaICL7hZncGpxIB+8v60iTKJKDvhXganFhIZ4BmWAGyQbwtRicprCJGrwY2mVonXwMlYKRYxEjT0ifgFjgOtpFDFO/XONIsYA19YoQtRioVKEGOAGzxpFiKZRCG8vroMxwP3RKELUYkdVixADXEe1ihhNQ1WLEIlaqHZUjKahqkWIAa6Iu4r6BkbTUClC1KKuaUDUYicPcNVAJKpugIM49ecBLkAe4OpBEwY4XdNAUMyn/gAQtZibRkjROnwRuWlU04ABDuLU31EdiTEGOP5Tf762CQDRNPIAFwCiFvMAFwCjaeQBrhqIAS5f24RW0Tp8EXmAqwZigMvXNgEgElV5bWMdvYQ8wAXIA1w9aMK1TQMGuHzqrwaiFnPTCClahy+hAQNcA079TahF3bUNgqLu1O/71uEL0J36fc86fgG6axu/tY5fgK5pYLw7qWr9fm8dvgBd01i/WscvQDfAza3DF6GqRYSeoRvgutbRi1DVIsZTxZprm6F18ELSFUvr0IUoBriJdexC0q9tEMbTE8kD3Mo6cjmJrR+j6Z9IbBpP1nFHkKY4sw47hocUwxLie8YnSYIYnxY/SRP0U+u4xSS+UYjz7wvxz72eQRlME1P0yIN16DLSBdcv1rGLSK3BI8/WsYtIX0GQwVsj6AfW0QtI3kX/gXCyUNQgxhKqUhShCnWCACcnXYr6+vdC1Sbjff1vLXQpeqj/x2DdCpb1X0FdDW6sww+T2wS6oK4GW9bhh9EJAqwgfYrqBAFSVNcmAFaQfpOhr0H6FaSvQfpdlL4GdSkKsIL0mwx9itJvMvQ1SL+C9IL0u2iuwSxYc+hTlH6ToU9R+hWkr0H6FKUXzDWILkifovSC9ClKv8nQpyj9CtLXIH2K0gvSpyj9JkOfovSCuQbRBelTlH4F6WuQPkXpBelTlH6ToU9R+hWcsAu+sgu6Mbvgjl2wwy7otuyCA3ZBTRViCCoekAURTO+FIIJuyS7ohuyCbsEu6KbsgmnPqiIJFiW5oHOP7IJuzi7oVuyC0WMpnKAbsQs6984u6DbsgjFf8zEFnRM/bYwqKN5rYAWlTR9YUPZNH1nQuRa7oOCgjy4YnE7xBQMfvpfW0d2F27W4rv/ThjImN+7YVkCP+ofoX5luFij/ACNkvzhc6pVDlgS9oBjtVuNyfSifNr3avrz5F8oWSbQ6kOLIAAAAAElFTkSuQmCC'
            alt="" style={{'blockSize':'70px'}} 
            ></img>
          </span>}
          prevIcon={<span aria-hidden="false" >
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAACurq77+/tOTk7Kysr39/fQ0NA9PT1XV1esrKz29vbNzc1PT09aWlpTU1NDQ0ODg4NpaWk3Nzdubm68vLzl5eVJSUlCQkLY2NhgYGC0tLSNjY0QEBB8fHykpKSVlZUpKSkZGRkhISHf39+Kiop1dXXpR2SaAAAEkUlEQVR4nO2diVIqMRBFJw4q7gIyiLKpyP9/4oMoVVhClm5fdW66zxfcW70mQ4WmKZP2dvXUe3Pv/ZfB2Y20mP/A69Ad8jjrpBX9LeOR+8WgokBeHvG3YyYt7K9YHfe3ZVRHqj6dNLjlUlrdH3AVMujcrbQ+Nndhg86tpRXyaCMR3DLHbqn3UYPODaVFcoimqOdcWiadNIOuL62TSpuSop6xtFQi8Saz50NaKo3EFPVMpcUSSBgTB6yk5eaTXoOeR2m9+TxkGXQObgPvZRpEK8S8GvSA7d95Neg5k9acRXaKOqxm2uY2Gc9SWnY6mWNiD9Delt9kPDiXGZQa3IEyLQhj4osPkHM+sQYdzjGf1EU9r9LS06DW4BaIJKWnKEqSUpvMDoiTBSNF3UJafAK0VQ0ohJwadO5aWn4CnBqEaDOcGnQ9afVxyKval8FWWn8cVg1OAGZ9zsXvL/oAEWTV4ERafRzemOhdSOuPw2oyEwCDrBQF+GrIW9Um5TcZZg0CjAlWBJ/LjyCvBgG+pjFXNYAuamMiBMCq1rJ2UVvVCoBVg48ABqtf1Wo/0duqFgRgTNiqFqT6MVH/qiatPo6d6IMg1CArgtWvas/S6uPUv6rxDAKsavbxJQTCid5WtWAEAQzaqhaMYPlNxk70Qezjizy2qgWpf0wARNBWtRC2qhWArWohqh8TCKuanehD1L+qAXRRGxMhAGqQ+TsZAIO11+BF7R9fbjn+ED6+LFkGAVa1Gc9g+asaL4IAY2LMMghwou/mHIMAY6IZxm0EIghgkDUnAE70TdPnRLD8JtM0U4ZBhBpsmgHdIMLHly0n3mlOMSgtPY012SDAqua5phpEGBOeDdEgwKr2DXHcA6xqe2if6jHGxBfPtRtsScMC6vVm2gUiksUXkkMki8F/LgiA8w4geS2FeVT1nOoQJlFv6FcYKBYZX2NAapFzk4gRxRuGQxCLC45FiI7KCiJGLfLu9CESlfVjZwiLjJm4AyFRO5ZDiHazfmdZREjUjn5tihJFzt23w6jF5oxlESFRzWIMiFo0ixEUJKoCiwqGhtViGVgUIyioRQWJqsCigkRV0G4UJKoCiwpqUUEUFVhU0FGtFsvALEZQkKgK2o2CRFUQRQW1qCBRFVi0WiwDS1SzqCBRFbQbBYmqIIoKalFBoiqwqCBRFbQbBYmqwKLVYhlYoloUFdSigkRVYFFBoipoNwoSVUEU19LyU+BZ7KTlp8CyeCetPgmWxaW0+iRYFjHe8+FYnEmLT4Njsfw3bD0MixiVyLEI8zYa3SLETNxBtjiWVp4M1eJAWng6RItP0rozoL2l+SItOwdSFAH+vuUAShRHMG+FeggWr6Q1Z5KfqENpyblkR3EjrTib3CiiLKYHZEZxKq2XQFYU36TVksiJ4kJaLI2MKELc7h8hOYo9aaVkUqOI2Ge+SbMIN+4PSUpUmAP+URKi+CqtkUk0ip/SCtlEooi3kf4m+H9ZINfdEaann9ZEr8E97Ym/CXnA7qI/6I48bn8H8YE7nengx+ua7xucS+B0uuXifjSfvz1sVlPWzdM/KFFJxFJQ1QMAAAAASUVORK5CYII='
          alt="" style={{'blockSize':'70px'}} 
          ></img></span>}>
          <Carousel.Item>
            <img className="d-block w-100" src={'https://wallpapercave.com/wp/wp9024371.jpg'} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2aW67BIB4k6a9r_TtT4BaoLep_zW_JT7Xw&usqp=CAU"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezynQMNrD-6iIILEDmkHAUhKII--W4CHwSQ&usqp=CAU"
              alt="Third slide"
            />
          </Carousel.Item>
    
        </Carousel>
        
      </div> 
      {/* <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt=""/> */}
      <div style={{'marginTop':'70px'}} className="shadow-lg p-5 mb-5 bg-body rounded">
        <Electronics/>
      </div>
      <div className="shadow-lg p-5 mb-5 bg-body rounded">
        <Boutique/>
      </div>
      <div className="shadow-lg p-5 mb-5 bg-body rounded">
        <Groceries/>
      </div>
      <div className="shadow-lg p-5 mb-5 bg-body rounded">
        <Automobiles/>
      </div>
    </>
  )
}

export default Home
