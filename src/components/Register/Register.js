import React, { useState } from "react";
import "../Login/Login.css";
import { GoogleLogin } from "react-google-login";

const Register = ({ cityLocations }) => {
  const [userRole, setUserRole] = useState(""); // Initialize with an empty string
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const _cityLocations = {
    Ariana: [
      "Ariana",
      "La Soukra",
      "Raoued",
      "Kalâat el-Andalous",
      "Sidi Thabet",
      "Ettadhamen-Mnihla",
    ],
    Béja: [
      "Béja",
      "El Maâgoula",
      "Zahret Medien",
      "Nefza",
      "Téboursouk",
      "Testour",
      "Goubellat",
      "Majaz al Bab",
    ],
    "Ben Arous": [
      "Ben Arous",
      "El Mourouj",
      "Hammam Lif",
      "Hammam Chott",
      "Bou Mhel el-Bassatine",
      "Ezzahra",
      "Radès",
      "Mégrine",
      "Mohamedia-Fouchana",
      "Mornag",
      "Khalidia",
    ],
    Bizerte: [
      "Bizerte",
      "Sejnane",
      "Mateur",
      "Menzel Bourguiba",
      "Tinja",
      "Ghar al Milh",
      "Aousja",
      "Menzel Jemil",
      "Menzel Abderrahmane",
      "El Alia",
      "Ras Jebel",
      "Metline",
      "Raf Raf",
    ],
    Gabès: [
      "Gabès",
      "Chenini Nahal",
      "Ghannouch",
      "Métouia",
      "Nouvelle Matmata",
      "Mareth",
      "Zarat",
      "EL Hamma",
    ],
    Gafsa: [
      "El Ksar",
      "Moularès",
      "Redeyef",
      "Métlaoui",
      "Mdhila",
      "El Guettar",
      "Sened",
    ],
    Jendouba: [
      "Jendouba",
      "Bou Salem",
      "Tabarka",
      "Aïn Draham",
      "Fernana",
      "Beni Mtir",
      "Ghardimaou",
      "Oued Melliz",
    ],
    Kairouan: [
      "Kairouan",
      "Chebika",
      "Sbikha",
      "Oueslatia",
      "Aïn Djeloula",
      "Haffouz",
      "Alaâ",
      "Hajeb El Ayoun",
      "Nasrallah",
      "Menzel Mehiri",
      "Echrarda",
      "Bou Hajla",
    ],
    Kasserine: [
      "Kasserine",
      "Sbeitla",
      "Sbiba",
      "Jedelienne",
      "Thala",
      "Haïdra",
      "Foussana",
      "Fériana",
      "Thélepte",
      "Magel Bel Abbès",
    ],
    Kebili: ["Kebili", "Djemna", "Douz", "El Golâa", "Souk Lahad"],
    Kef: [
      "El Kef",
      "Nebeur",
      "Touiref",
      "Sakiet Sidi Youssef",
      "Tajerouine",
      "Menzel Salem",
      "Kalaat es Senam",
      "Kalâat Khasba",
      "Jérissa",
      "El Ksour",
      "Dahmani",
      "Sers",
    ],
    Mahdia: [
      "Mahdia",
      "Rejiche",
      "Bou Merdes",
      "Ouled Chamekh",
      "Chorbane",
      "Hebira",
      "Essouassi",
      "El Djem",
      "Kerker",
      "Chebba",
      "Melloulèche",
      "Sidi Alouane",
      "Ksour Essef",
      "El Bradâa",
    ],
    Manouba: [
      "Manouba",
      "Den Den",
      "Douar Hicher",
      "Oued Ellil",
      "Mornaguia",
      "Borj El Amri",
      "Djedeida",
      "Tebourba",
      "El Battan",
    ],
    Medenine: [
      "Medenine",
      "Beni Khedache",
      "Ben Gardane",
      "Zarzis",
      "Houmt El Souk (Djerba)",
      "Midoun (Djerba)",
      "Ajim (Djerba)",
    ],
    Monastir: [
      "Monastir",
      "Khniss",
      "Ouerdanin",
      "Sahline Moôtmar",
      "Sidi Ameur",
      "Zéramdine",
      "Beni Hassen",
      "Ghenada",
      "Jemmal",
      "Menzel Kamel",
      "Zaouiet Kontoch",
      "Bembla-Mnara",
      "Menzel Ennour",
      "El Masdour",
      "Moknine",
      "Sidi Bennour",
      "Menzel Farsi",
      "Amiret El Fhoul",
      "Amiret Touazra",
      "Amiret El Hojjaj",
      "Cherahil",
      "Bekalta",
      "Téboulba",
      "Ksar Hellal",
      "Ksibet El Mediouni",
      "Benen Bodher",
      "Touza",
      "Sayada",
      "Lemta",
      "Bouhjar",
      "Menzel Hayet",
    ],
    Nabeul: [
      "Nabeul",
      "Dar Chaabane",
      "Béni Khiar",
      "El Maâmoura",
      "Somâa",
      "Korba",
      "Tazerka",
      "Menzel Temime",
      "Menzel Horr",
      "El Mida",
      "Kelibia",
      "Azmour",
      "Hammam Ghezèze",
      "Dar Allouch",
      "El Haouaria",
      "Takelsa",
      "Soliman",
      "Korbous",
      "Menzel Bouzelfa",
      "Béni Khalled",
      "Zaouiet Djedidi",
      "Grombalia",
      "Bou Argoub",
      "Hammamet",
    ],
    Sfax: [
      "Sfax",
      "Sakiet Ezzit",
      "Chihia",
      "Sakiet Eddaïer",
      "Gremda",
      "El Ain",
      "Thyna",
      "Agareb",
      "Jebiniana",
      "El Hencha",
      "Menzel Chaker",
      "Ghraïba",
      "Bir Ali Ben Khélifa",
      "Skhira",
      "Mahares",
      "Kerkennah",
    ],
    "Sidi Bouzid": [
      "Sidi Bouzid",
      "Jilma",
      "Cebalet",
      "Bir El Hafey",
      "Sidi Ali Ben Aoun",
      "Menzel Bouzaiane",
      "Meknassy",
      "Mezzouna",
      "Regueb",
      "Ouled Haffouz",
    ],
    Siliana: [
      "Siliana",
      "Bou Arada",
      "Gaâfour",
      "El Krib",
      "Sidi Bou Rouis",
      "Makthar",
      "Kesra",
      "Bargou",
      "El Aroussa",
    ],
    Sousse: [
      "Sousse",
      "Ksibet Thrayet",
      "Ezzouhour",
      "Zaouiet Sousse",
      "Hammam Sousse",
      "Akouda",
      "Kalâa Kebira",
      "Sidi Bou Ali",
      "Hergla",
      "Enfidha",
      "Bouficha",
      "Sidi El Hani",
      "Msaken",
      "Kalâa Seghira",
      "Messaadine",
      "Kondar",
    ],
    Tataouine: ["Tataouine", "Bir Lahmar", "Ghomrassen", "Dehiba", "Remada"],
    Tozeur: ["Tozeur", "Degache", "Hamet Jerid", "Nafta", "Tamerza"],
    Tunis: [
      "Tunis",
      "Le Bardo",
      "Le Kram",
      "La Goulette",
      "Carthage",
      "Sidi Bou Said",
      "La Marsa",
      "Sidi Hassine",
    ],
    Zaghouan: [
      "Zaghouan",
      "Zriba",
      "Bir Mcherga",
      "Djebel Oust",
      "El Fahs",
      "Nadhour",
    ],
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google login success", response);
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failure", error);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedLocation("");
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <section>
      <div className="container">
        <div className="login">
          <div className="container">
            <h1>Créer un compte</h1>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="" disabled>
                Sélectionnez votre rôle
              </option>
              <option value="worker">travailleur</option>
              <option value="client">Client</option>
            </select>
            {/* {userRole === "worker" && selectedCity && _cityLocations[selectedCity] ? (
  <select value={selectedLocation} onChange={handleLocationChange}>
    <option value="" disabled>
      Select an option
    </option>
    
    {_cityLocations[selectedCity].map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ))}
  </select>
) : (
  <select value="" disabled>
    <option value="" disabled>
      Select an option
    </option>
  </select>
)} */}

            <input type="text" placeholder="Nom" required />
            <input type="text" placeholder="Prenom" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Numero tel" required />
            <input type="password" placeholder="Mot de passe" required />

            <select value={selectedCity} onChange={handleCityChange}>
              <option value="" disabled>
                Sélectionnez une ville
              </option>
              {Object.keys(_cityLocations).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select value={selectedLocation} onChange={handleLocationChange}>
              <option value="" disabled>
                Sélectionnez un emplacement
              </option>
              {selectedCity &&
                _cityLocations[selectedCity].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
            </select>
            <br />
            <input type="checkbox" />
            <span>Souviens-moi</span>
            <button>Commencer</button>
            <hr />
            <p>Ou connectez-vous avec</p>
            <hr />
            <ul>
              <li>
                <GoogleLogin
                  clientId="YOUR_GOOGLE_CLIENT_ID"
                  buttonText="Login with Google"
                  onSuccess={handleGoogleSuccess}
                  onFailure={handleGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
