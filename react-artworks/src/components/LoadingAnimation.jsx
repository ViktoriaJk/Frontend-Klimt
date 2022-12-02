import "./LoadingAnimation.css"


export default function LoadingAnimation (){
    return (
        <div className="loader">
	<div className="loader-inner">
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
	</div>
</div>
    )
}