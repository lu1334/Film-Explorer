interface PropBtnDelete{
   handlerDeleteSearch:()=> void
}

export const BtnDelete = ( {handlerDeleteSearch}:PropBtnDelete ) => {
  return (
    <button className="search-clear" onClick={handlerDeleteSearch}>
      X
    </button>
  );
}
