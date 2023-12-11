import './Home.scss'

const Home = () => {
    return (
        <>
        <div className='home'> 
            <h1 className="home__title"> Bienvenue sur l'App de la NASA</h1>

            <div className="home__container">

                <section className='left-section'>
                    <img className="left-section__img" src="https://cdn.pixabay.com/photo/2012/11/28/10/37/launch-pad-67650_1280.jpg" alt="photo de site de décollage de fusée"  />
                    <div className="left-section__container-desc">
                        <p className="left-section__desc">La NASA explore l'inconnu dans l'air et dans l'espace, innove pour le bénéfice de l'humanité et inspire le monde par la découverte.</p>
                    </div>
                </section>

                <section className='right-section'>
                    

                    <h2 className="right-section__title">Qu'est-ce que la NASA ?</h2>
                    <p className="right-section__desc">La NASA est l'agence gouvernementale qui assure le programme spatial américain. Cette organisation a vu le jour en 1958 et travaille depuis cette date au développement de technologies et de missions ayant pour but d'accroître nos connaissances sur l'espace. Véhicules, télescopes, missions habitées, recherches et publications, la NASA est aujourd'hui l'organisme le plus important de la conquête spatiale et ses activités ont des retombées mondiales dans les domaines scientifiques et techniques.

                    </p>

                    <h2 className="right-section__title">Quelle est la signification de la NASA ?</h2>
                    <p className="right-section__desc">Le nom NASA est l'acronyme de "National Aeronautics and Space Administration". Cela signifie en anglais "administration nationale de l'aéronautique et de l'espace". La NASA est donc l'agence qui organise les grands programmes d'exploration et de recherche spatiale mais elle travaille également dans le domaine de l'aéronautique.

                    </p>

                    <h2 className="right-section__title">Quel est le rôle de la NASA ?</h2>
                    <p className="right-section__desc" >La NASA a pour mission de réaliser le programme spatial des États-Unis dans le domaine civil. Elle a été conçue en 1958 avec la volonté assumée de créer un organisme qui ne soit pas militaire pour assurer les missions spatiales du pays. La NASA assure donc l'organisation et la réalisation du programme spatial mais également de nombreux programmes aéronautiques. Dans le spatial, la NASA travaille sur différents volets bien définis :
                        
                        Le plus connu est certainement le programme spatial habité incarné par l'emblématique Station spatiale internationale (ISS) lancée en 1998. En 2022, l'organisation compte 44 astronautes et continue à effectuer des campagnes de candidatures régulières.

                        Le programme scientifique de la NASA comprend différentes activités qui visent à explorer le système solaire et notre étoile : le Soleil. Il s'intéresse également à la Terre et en particulier à notre atmosphère, au champ de gravité de notre planète ainsi qu'à son climat.
                        Enfin la NASA consacre une partie de son budget à la recherche spatiale et aérospatiale. Ce dernier pan est particulièrement important bien que moins connu du grand public.
                    </p>
                </section>
            </div>
        </div>
        </>
)}

export default Home