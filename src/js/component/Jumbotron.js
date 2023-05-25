import React from 'react';

const Jumbotron = (props) => {
    return (
       <>
        <div className="jumbotron">
			<h1 className="display-4 px-4 py-4">{props.title}</h1>
			<p className="lead"></p>
			<hr className="my-4" />
			<p className='px-4 py-4'>{props.text}</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg mx-4 my-4"
					href="https://www.pexels.com/photo/monochrome-photography-of-classic-citroen-car-953826/"
					role="button">
					Learn more
				</a>
			</p>
		</div>
       </>
    );
}

export default Jumbotron;
