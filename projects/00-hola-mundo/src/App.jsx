
import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard/TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`     // Funcion que devuelve un elemento, para pasar por prop
    const follow = <span className='tw-true-follow'>te sigue</span>                    // Elemnto html, para pasar por prop

    return (
        <>
            <h1>Twitter Card</h1>
            <section className='conteiner-tw-follow-cards'>
                <TwitterFollowCard
                    name='Miguel Angel Duran'
                    userName='midudev'
                    isFollowing={false}
                    elementFollow={follow}
                    formatUserName={formatUserName}
                    initialIsFollowingUser              // Por convencion, esta prop se utiliza para inicializar estado en el componente, por ende lleva el nombre de intial al principio
                />
                <TwitterFollowCard
                    name='Pablo Picazzo'
                    userName='CrazyM'
                    isFollowing={false}
                    elementFollow={follow}
                    formatUserName={formatUserName}
                    initialIsFollowingUser={false}
                />
                <TwitterFollowCard
                    name='Juan El Ultimo Aparecido'
                    userName='juan'
                    isFollowing
                    elementFollow={follow}
                    formatUserName={formatUserName}
                    initialIsFollowingUser={true}
                />
                <TwitterFollowCard
                    name='React JS Falopaa'
                    userName='ReactJS'
                    isFollowing
                    elementFollow={follow}
                    formatUserName={formatUserName}
                    
                />
                <TwitterFollowCard
                    // En caso de faltar atributos, los inicialiso por defecto en el componente
                    elementFollow={follow}
                    formatUserName={formatUserName}
                />

            </section>
        </>
    )
}

/*  NO ES UNA BUENA PRACTICA
    const USER-ReactJs = {               // Pasar todas las props juntas como un objeto, no es la mejor opcion, pero se puede
        name:'React JS Falopaa',
        userName:'ReactJS',
        isFollowing,
        elementFollow:{follow},
        formatUserName:{formatUserName}
    }

    ...
    ...

    <TwitterFollowCard
        { ... USER-ReactJs }
    />





*/