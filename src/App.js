import './App.css';
import Row from "./components/Row";
import head1 from './components/img/head-2.jpg'
import head2 from './components/img/head-4.jpg'
import head3 from './components/img/head-55.jpg'
import body1 from './components/img/body-1.jpg'
import body2 from './components/img/body-44.jpg'
import body3 from './components/img/body-3.jpg'
import legs1 from './components/img/legs-6.jpg'
import legs2 from './components/img/legs-4.jpg'
import legs3 from './components/img/legs-55.jpg'


function App() {


    return (
        <div className={'app'}>
            <div>
                <Row img1={head1} img2={head2} img3={head3}/>
                <Row img1={body1} img2={body2} img3={body3}/>
                <Row img1={legs1} img2={legs2} img3={legs3}/>
            </div>
        </div>
    )
}

export default App;
