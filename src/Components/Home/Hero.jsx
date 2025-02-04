import suit from '../../assets/Homeimg/suit.jpg';

export default function Hero() {
    return (
        <div>
            <div
                className="h-screen bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${suit})` }}
            >
                {/* content */}

                <div className=' grid grid-cols-2 '>
                    <div className=' '>

                    </div>
                </div>
            </div>
        </div>
    );
}
