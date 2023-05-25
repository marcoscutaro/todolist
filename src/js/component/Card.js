import React from 'react';

const Card = (props) => {
    return (
      <>
        <div className="col-lg-3">
			<div className="card">
				<img
					className="card-img-top"
					src={props.src}
					alt="Card img cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href={props.url} className="btn btn-primary">
						read more
					</a>
				</div>
			</div>
		</div>
      </>
    );
}

export default Card;
