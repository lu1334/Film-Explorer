interface PropBtnDelete{
   handlerDeleteSearch:()=> void
}

export const BtnDelete = ( {handlerDeleteSearch}:PropBtnDelete ) => {
  return (
    <>
      {/* Limpia el texto de busqueda. */}
      <button className="search-clear" onClick={handlerDeleteSearch}>
        X
      </button>
    </>
  );
}
