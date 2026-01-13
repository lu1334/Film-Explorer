import { getDiscover } from "../services/getDiscover";
import type { Movie } from "../types/types";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { useParams } from "react-router-dom";

export const MovieByCategory = () => {
  const {id} = useParams()
  const [categoryList, setCategoryList] = useState<Movie[]>([]);
  const [messageErrorDiscover, setErrorMessageDiscover] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getDiscoverFetch = async () => {
      try {
        const response = await getDiscover(Number(id))
        if (!Array.isArray(response) || !response.length) {
          setCategoryList([])
          setErrorMessageDiscover("No films found")
          return
        }
        setCategoryList(response);
      } catch (err: any) {
        setErrorMessageDiscover(err.message)
      } finally {
        setLoading(false);
      }
    };
    getDiscoverFetch();
  }, [id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {messageErrorDiscover && <p>{messageErrorDiscover}</p>}
      <ul>
        {categoryList.map((c)=>(
            <li><MovieCard movie={c}/></li>
        ))}
      </ul>
    </>
  );
};
