import star from '../../img/home/star.png';
import './review.css';

const Review = (props) => {
    return (
        <div className = 'ind_review'>
            <div className = 'review-top_bar'>
                <h5 className = 'review-name'>{props.name}</h5>
                <div classname = 'review-stars'>
                    <img src = { star } className = 'review_star_img' alt = 'star' />
                    <img src = { star } className = 'review_star_img' alt = 'star' />
                    <img src = { star } className = 'review_star_img' alt = 'star'/>
                    <img src = { star } className = 'review_star_img' alt = 'star'/>
                    {
                        props.five ? 
                        <>
                            <img src = { star } className = 'review_star_img' alt = 'star' />
                        </> : <></>
                    }
                </div>
            </div>
            <p className = 'review-loc'>{props.location}</p>
            <p className = 'review-text'>
                {props.review_text}
            </p>
        </div>
    )
}

export default Review;