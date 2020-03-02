import Navigation from "./navigation";


function Layout({children}) {
    return <div>
        <Navigation/>
        <main>
            {children}
        </main>
        <footer>hasan aydin. 2020</footer>
    </div>
}


export default Layout