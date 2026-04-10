import {FaStar} from 'react-icons/fa';
import {Link} from 'react-router-dom';

type DormCardProps = {
    dormName: string;
    rating: number;
    description: string;
    price: string;
    image: string;
}

const DormCard = ({ dormName, rating, description, price, image }: DormCardProps) => {
    return (
        <div className="dorm-card">
            <div className="dorm-image">
                <img src={image} alt="Mesa Court" />
            </div>
            <div className="dorm-card-content">
                <div className="dorm-header">
                    <h2>{dormName}</h2>
                    <p className="dorm-rating"><FaStar color="#0e7490" size={25} /> {rating}</p>
                </div>
                <div className="dorm-description">
                    <p>{description}</p>
                </div>
                <div className="dorm-card-footer">
                    <div className="dorm-pricing">
                        <p className="starting">STARTING AT </p>
                        <p className="dorm-price">{price}</p>
                    </div>
                    <Link to="/reviews">
                        <button className="dorm-review-button">Read Reviews</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DormCard;
// 384 x 468