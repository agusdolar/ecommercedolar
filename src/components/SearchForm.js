import { Input, SearchContainer} from './Styledcomponents';


const HandleChange = () => {

    const  handleClick = (e) => {
         
         if (e.key === '') {
             
             console.log("Barra espaciadora => ", e.key);
             e.preventDefault();
     }
    }
    return(
        <>
        <SearchContainer>
        <Input onKeyDown={handleClick} />
        </SearchContainer >
        </>
    );
}

export default HandleChange;

