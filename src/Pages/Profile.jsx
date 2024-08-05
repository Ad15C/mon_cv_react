import React from "react";

const Profile = () => {
    //Format de la date
    const formatDate = (isoString) => {
        const options = {year: "numeric", month: "long", day: "numeric" };
        return new Date(isoString).toLocaleDateString("fr=FR", options);
    };
    
    return (
        <div className="container bg-white mt-5 mb-5 p-5">
            <div className="container-header p-5">
                <h2 className="fw-bold" id="title">Github user</h2>
                    <h3 className="fw-semibold">John Doe</h3>
            </div>

            <div className="container-body ">
                <img 
                    src="github.png" 
                    alt="photo du profil Github" 
                    id="Github_img"
                    className="img-fluid mb-3"
                />
                <p>As we all know, John Doe's identity is unknonwn. I just wanted to contribute without being known.</p><br></br>
                <ul className="lh-lg">
                    <li className="github-list">Abonnés: 10</li>
                    <li className="github-list">Abonnements: 0</li>
                    <li className="github-list">Créé le :  {formatDate("2016-06-09T17:14:00Z")}</li>
                    <li className="github-list">Modifié le : {formatDate("2021-10-12T05:01:09Z")}</li>
                    <li className="github-list">URL repositories : 
                        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover ps-2" href="https://api.github.com/github-john-doe/repos">
                         https://api.github.com/github-john-doe/repos
                        </a> 
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Profile;