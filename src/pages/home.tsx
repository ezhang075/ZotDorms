import DormCard from '../components/dorm-card.tsx';
import dorms from '../components/dorms.tsx';

const Home = () => {
    return (
        <div className="page-content">
            <h1 className=" dorm-title">Dorms at UC Irvine</h1>
                <div className="dorm-grid">
                    {dorms.map((dorm) => (
                        <DormCard 
                            dormName={dorm.name}
                            rating={dorm.rating}
                            description={dorm.description}
                            price={dorm.price}
                            image={dorm.image}
                        />
                    ))}
                </div>
            </div>
    )
}

export default Home;