import React from 'react'

class Home extends React.Component{

    render(){
        return(
            <section id="header">
				<div className="inner">
					<span className="icon solid major fa-cloud"></span>
					<h1>Hey what's your favourite escape? <strong>Travel?</strong> <br />well let's go
					for an adventure</h1>
					<p>Discover the most vibrant destinations,<br />
					Feed your wanderlust</p>
					<ul className="actions special">
						<li><a href="#one" className="button scrolly">Discover</a></li>
					</ul>
				</div>
			</section>
        )

            

        }   
    
}

export default Home;