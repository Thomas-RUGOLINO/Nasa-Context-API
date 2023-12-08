import './Home.scss'

const Home = () => {
    return (
        <> 
            <h1 className="main-title"> Bienvenue sur l'App de la NASA en images</h1>
            <div className="header">
                <img className="header__img" src="https://wallpaperaccess.com/full/5779793.jpg" alt="photo d'homme sur la lune"  />
                <div className="header__container-desc">
                <p className="header__desc">La NASA explore l'inconnu dans l'air et dans l'espace, innove pour le bénéfice de l'humanité et inspire le monde par la découverte.</p>
                </div>
            </div>

            <h2 className="main-title">La NASA</h2>
            <p className="main-desc">Agence emblématique de l'exploration spatiale, la NASA a vu le jour dans un contexte très différent de celui que l'on connaît aujourd'hui. Fondée à l'origine pour rivaliser avec l'URSS, alors en avance dans le domaine spatial, la NASA a réussi en une décennie seulement à supplanter l'avance des Soviétiques sur ce terrain. Après avoir accompli l'exploit de faire marcher les Hommes sur la Lune, elle a ensuite su renouveler ses projets et proposer des missions toujours plus diverses et ambitieuses. Le monde scientifique lui doit une grande partie des connaissances actuelles sur l'Univers et le système solaire mais elle est également responsable de grandes avancées technologiques que l'on retrouve jusque dans notre quotidien.

                Parmi les réussites les plus emblématiques de la NASA, on trouve sans aucun doute le programme Apollo, qui a permis les premiers pas d'Armstrong sur la Lune, le rover Curiosity qui arpente la surface de la planète Mars depuis 2012, ainsi que les célèbres télescopes Hubble et son successeur James Webb qui nous proposent des clichés exceptionnels de l'Univers. Aujourd'hui, la NASA vise de nouveau la Lune pour des missions habitées de plus longues durées, grâce à l'installation d'une station permanente autour de notre satellite naturel. Elle ambitionne également de continuer l'exploration de la planète Mars, cette fois avec des missions habitées.
            </p>

            <h2 className="main-title">Qu'est-ce que la NASA ?</h2>
            <p className="main-desc">La NASA est l'agence gouvernementale qui assure le programme spatial américain. Cette organisation a vu le jour en 1958 et travaille depuis cette date au développement de technologies et de missions ayant pour but d'accroître nos connaissances sur l'espace. Véhicules, télescopes, missions habitées, recherches et publications, la NASA est aujourd'hui l'organisme le plus important de la conquête spatiale et ses activités ont des retombées mondiales dans les domaines scientifiques et techniques.

            </p>

            <h2 className="main-title">Quelle est la signification de la NASA ?</h2>
            <p className="main-desc">Le nom NASA est l'acronyme de "National Aeronautics and Space Administration". Cela signifie en anglais "administration nationale de l'aéronautique et de l'espace". La NASA est donc l'agence qui organise les grands programmes d'exploration et de recherche spatiale mais elle travaille également dans le domaine de l'aéronautique.

            </p>

            <h2 className="main-title">Quel est le rôle de la NASA ?</h2>
            <p className="main-desc" >La NASA a pour mission de réaliser le programme spatial des États-Unis dans le domaine civil. Elle a été conçue en 1958 avec la volonté assumée de créer un organisme qui ne soit pas militaire pour assurer les missions spatiales du pays. La NASA assure donc l'organisation et la réalisation du programme spatial mais également de nombreux programmes aéronautiques. Dans le spatial, la NASA travaille sur différents volets bien définis :
                
                Le plus connu est certainement le programme spatial habité incarné par l'emblématique Station spatiale internationale (ISS) lancée en 1998. En 2022, l'organisation compte 44 astronautes et continue à effectuer des campagnes de candidatures régulières.

                Le programme scientifique de la NASA comprend différentes activités qui visent à explorer le système solaire et notre étoile : le Soleil. Il s'intéresse également à la Terre et en particulier à notre atmosphère, au champ de gravité de notre planète ainsi qu'à son climat.
                Enfin la NASA consacre une partie de son budget à la recherche spatiale et aérospatiale. Ce dernier pan est particulièrement important bien que moins connu du grand public.
            </p>
        </>
)}

export default Home