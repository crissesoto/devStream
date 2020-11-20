import { Fragment, React }                from 'react';
import {BrowserRouter, Route}   from "react-router-dom";
import StreamCreate from './streams/streamCreate';
import StreamEdit from './streams/streamEdit';
import StreamList from './streams/streamList';
import StreamShow from './streams/streamShow';
import StreamDelete from './streams/streamDelete';
import Header from './header';



const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streamCreate" exact component={StreamCreate} />
                <Route path="/streamEdit" exact component={StreamEdit} />
                <Route path="/streamDelete" exact component={StreamDelete} />
                <Route path="/streamShow" exact component={StreamShow} />
            </BrowserRouter>
        </div>
    )
}

export default App;