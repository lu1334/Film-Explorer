interface PropFavorite{
    handlerAddFavorite:(id:number)=>void
    id:number
}
export const BtnFavorite = ({handlerAddFavorite,id}:PropFavorite)=>{
    return(
        <div>
            <button onClick={()=>handlerAddFavorite(id)}>Add Favorite</button>
        </div>
    )
}