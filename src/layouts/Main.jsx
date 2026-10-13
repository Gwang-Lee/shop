import mainPhoto from '../assets/hero.png'

const Main = () => {

    return(
        <div className="main">
            <h2>컴퓨터 기기 쇼핑몰</h2>
            <section>
                <div>
                    <img src={mainPhoto} alt="메인 이미지" />
                    <div>
                            <img src={mainPhoto} alt="메인 이미지" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;