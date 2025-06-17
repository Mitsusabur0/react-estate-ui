import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"


function HomePage() {
    return (
        <div className="homePage">

            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real estate & get your dream place
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aliquam sapiente, quam, cum amet provident deserunt fuga dolor laboriosam cumque voluptas et explicabo dignissimos qui! Impedit, et cum? Inventore tempore labore voluptas ex perspiciatis, veritatis est magni molestiae earum voluptatum expedita eligendi voluptate fuga unde non quasi voluptatibus quo harum.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years of experience</h2>
                        </div>

                    </div>
                </div>
            </div>

            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>

        </div>
    )
    
}

export default HomePage