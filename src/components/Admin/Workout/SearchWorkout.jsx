// import { useState } from "react";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";



// const filterData = (query, data) => {
//     if (!query) {
//       return data;
//     } else {
//       return data.filter((d) => d.toLowerCase().includes(query));
//     }
//   };
  
//   const data = [
//     "Couche haltere",
//     "Couche haltere v2",
//     "Couche haltere prise serre",
//     "Couche 1 haltere prise serre",
//     "Tajmi3",
//     "Lateral haltere stead",
//     "Piramide",
//     "Couche haltere one hand",
//     "Ecarte haltere",
//     "Incline haltere",
//     "Incline haltere prise serre",
//     "Ecarté incline haltére",
//     "Ecarté incliné haltére 2",
//     "Pullover haltére",
//     "Lateral haltére",
//     "Front chest haltere",
//     "Epaule front + lateral",
//     "Front raise haltére one hand",
//     "Epaule front + lateral 2",
//     "Curl marteau haltére",
//     "Biceps curl haltére",
//     "Curl marteau haltére one hand",
//     "Biceps curl haltére 2",
//     "Biceps curl + marteau",
//     "Biceps curl + avant bras",
//     "Trapéze haltére",
//     "Biceps curl barre",
//     "Biceps curl barre",
//     "Biceps curl barre wide grip",
//     "Trapéze barre z",
//     "Laterale barre z",
//     "Front raise barre",
//     "Epaule Front press barre",
//     "Front chest with barre",
//     "Epaule front press 2",
//     "Front raise 1 haltére",
//     "Rowing barre",
//     "Rowing barre 2",
//     "Rowing 2 haltéres",
//     "Oiseaux epaule arriere",
//     "Epaule arriere with barre",
//     "Epaule arriere with barre 2",
//     "Deadlift",
//     "Avant bras barre",
//     "Avant bras barre 2",
//     "Front raise disc tournant",
//     "Front raise disc",
//     "Epaule front press disc",
//     "Triceps barre z",
//     "Triceps press barre close grip",
//     "Triceps haltere",
//     "Triceps haltere 2",
//     "Triceps barre z incline",
//     "Biceps curl haltere short head",
//     "Biceps curl haltere long head",
//     "Epaule arriere haltere",
//     "Spider biceps curl",
//     "Epaule arriere + trapez",
//     "Trapez incliné",
//     "Curl marteau haltere one hand",
//     "Curl marteau haltere one hand 2",
//     "Triceps 1 haltere 2 hand",
//     "Triceps 1 haltere 1 hand",
//     "Tirage haltere",
//     "Triceps 1 haltere 1 hand 2",
//     "Triage haltere 2",
//     "Couche barre",
//     "Coucher barre wide grip",
//     "Couche barre close grip",
//     "Incline barre",
//     "Decliné barre",
//     "Decliné haltere",
//     "Abdo crunch",
//     "Lombaire",
//     "Triage barre T",
//     "Shoulder press haltere",
//     "Press arnold",
//     "Front chest with cable",
//     "Decline chest with cable",
//     "Vie a vie",
//     "Vie a vie 3 partie",
//     "Press chest with cable",
//     "Cable 2 arms high row",
//     "Biceps long head with cable",
//     "Biceps curl with cable",
//     "Trapeze with cable",
//     "Avant bras with cable",
//     "Avant bras with cable 2",
//     "Curl marteau with cable",
//     "Triceps with cable",
//     "Epaule arriere with cable",
//     "Triceps press down",
//     "Triceps press down inverse",
//     "Tirage with cable high row",
//     "Pull over with cable",
//     "Triceps with cable close grip",
//     "Triceps with cable close grip 2",
//     "Pull over with cable close grip",
//     "Triceps with cable one hand",
//     "Epaule arriere with cable one hand",
//     "Triceps with cable one hand 2",
//     "Rowing with cable",
//     "Press machine chest",
//     "Press machine chest close grip",
//     "Tirage with cable machine close grip",
//     "Tirage with cable machine inverse",
//     "Tirage with cable machine wide grip",
//     "Tirage with cable machine one hand",
//     "Lat pull down wide grip",
//     "Lat pull down inverse",
//     "Lat pull down arriere",
//     "Lat pull down close grip",
//     "Lat pull down + epaule arriere",
//     "Hamstring machine",
//     "Leg extension",
//     "Leg extension 1 leg",
//     "Abducteur machine",
//     "Adducteur machine",
//     "Squad",
//     "Langues",
//     "Langues arriere",
//     "Hamstring with barre",
//     "Sumo squad barre",
//     "Sumo squad barre",
//     "Front squad with haltere",
//     "Sumo squad with haltere",
//     "Abducteur with disc",
//     "Epaule arriere machine",
//     "Fly machine",
//     "Fly machine 2",
//     "Leg press quadriceps",
//     "Leg press adducteur",
//     "Leg press hamstring",
//     "Leg press mollet",
//     "Stead mollet",
//     "Hack squad",
//     "Machine mollet"
//   ];
   

// const SearchBar = ({setSearchQuery}) => (
//     <form>
//       <TextField
//         id="search-bar"
//         onInput={(e) => {
//           setSearchQuery(e.target.value);
//         }}
//         label="Enter exercice name"
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//       />
//       <IconButton type="submit" aria-label="search">
//         <SearchIcon style={{ fill: "blue" }} />
//       </IconButton>
//     </form>
//   );


//   export default function SearchWorkout() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const dataFiltered = filterData(searchQuery, data);

//     console.log(data.length)
  
//     return (
//       <div
//         style={{
//           display: "flex",
//           alignSelf: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           padding: 20
//         }}
//       >
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         <div style={{ padding: 3 , maxHeight:"20vh" , overflowY:"scroll", width:"fit-content" }}>
//           {dataFiltered.map((d) => (
//             <div
//               className="text"
//               style={{
//                 padding: 5,
//                 justifyContent: "normal",
//                 fontSize: 20,
//                 color: "blue",
//                 margin: 1,
//                 width: "250px",
//                 BorderColor: "green",
//                 borderWidth: "10px"
//               }}
//               key={d.id}
//             >
//               {d}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }




import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango"];

export default function SearchWorkout() {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Select a fruit" variant="outlined" />
      )}
      freeSolo
      openOnFocus
      disableClearable
    />
  );
}
