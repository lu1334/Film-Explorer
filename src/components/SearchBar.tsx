import type React from "react";

interface Prop {
  textoMovie: string;
  seTtextoMovie: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBar = ({ textoMovie, seTtextoMovie }: Prop) => {
  return (
    <>
      <input
        type="text"
        value={textoMovie}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          seTtextoMovie(e.target.value)
        }
      />
    </>
  );
};
