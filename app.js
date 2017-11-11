import React from 'react';

const articles = [{
    "articleTitle":"Article 1",
    "article":"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    "articleLink":"Link"
},
{
    "articleTitle":"Article 2",
    "article":"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    "articleLink":"Link"
}]

class App extends React.Component {
   render() {
      return (
         <div className="row">
            {
                articles.map(function(value, index){
                    return (<div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src="./sample-1.jpg" />
                        <span className="card-title">{value.articleTitle}</span>
                    </div>
                    <div className="card-content">
                        <p>{value.article}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">{value.articleLink}</a>
                    </div>
                </div>
                    </div>)
                })
            }
        </div>
      );
   }
}
export default App;