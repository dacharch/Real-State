import "./Header.css"

export default function Header(){
    return(
        <section className="h-wrapper" style={{ background:"none"}}>
            <div className="flexCenter paddings innerWidth h-container">
                 <img src="./logo.png" alt="" width={100}/>
                 <div>
                 <div className="flexCenter h-menu" >
                    <a href="#">Residencies</a>
                    <a href="#">Residencies</a>
                    <a href="#">Residencies</a>
                    <a href="#">Residencies</a>
                    <button className="button">
                          <a href="">Contact</a>
                    </button>
                 </div>
                 </div>
                
            </div>

        </section>
    )
}