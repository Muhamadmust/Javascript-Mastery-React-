import { useState } from 'react'
import Search from "./components/Search.jsx";



const App = () => {

    const [searchTerm, setSearchTerm] = useState('');


    return (
        <main>
            <div className="pattern" />
            <div>
                <h1 className="wrapper">
                    <header>
                        <img src={"./hero.png"} alt="Hero Banner" />
                        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                    </header>

                    <Search serchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <h1>{searchTerm}</h1>
                </h1>
            </div>
        </main>
    )
}
export default App
