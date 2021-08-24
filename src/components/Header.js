//svg and img
import scissor from '../img/scissor.svg';

//components
import Nav from './Nav';

export default function Header({ name, home }) {

    const header2 = () => {
        if (!home) return (null)
        return (
            <div className="header2">
                <h2>hair salon and boutique</h2>
                <img src={scissor} alt="scissor"></img>
            </div>
        )
    }
    return (
        <header>
            <h1>{name}</h1>
            {header2()}
            <Nav />
        </header>
    )
}